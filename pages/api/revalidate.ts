import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";

/**
 * This API endpoint will be called by a Prismic webhook. The webhook
 * will send an object containing a list of added, updated, or deleted
 * documents. Pages for those documents will be rebuilt.
 *
 * The Prismic webhook must send the correct secret.
 */
export default async function handler(req, res) {
  if (req.body.type === "api-update" && req.body.documents.length > 0) {
    // Check for secret to confirm this is a valid request
    if (req.body.secret !== process.env.PRISMIC_WEBHOOK_SECRET) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const client = prismic.createClient("https://daher-site.prismic.io/api/v2");
    console.log("create client");
    // Get a list of URLs for any new, updated, or deleted documents
    const documents = await client.getAllByIDs(req.body.documents);
    console.log("documents", documents);
    const urls = documents.map((doc) => prismicH.asLink(doc));
    console.log("urls", urls);
    try {
      // Revalidate the URLs for those documents
      await Promise.all(urls.map(async (url) => await res.revalidate(url)));

      return res.json({ revalidated: true });
    } catch (err) {
      // If there was an error, Next.js will continue to show
      // the last successfully generated page
      return res.status(500).send("Error revalidating");
    }
  }

  // If the request's body is unknown, tell the requester
  return res.status(400).json({ message: "Invalid body" });
}
