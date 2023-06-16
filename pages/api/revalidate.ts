import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import sm from "../../slicemachine.config.json";

/**
 * This API endpoint will be called by a Prismic webhook. The webhook
 * will send an object containing a list of added, updated, or deleted
 * documents. Pages for those documents will be rebuilt.
 *
 * The Prismic webhook must send the correct secret.
 */
function linkResolver(doc) {
  switch (doc.type) {
    case "introduction":
    case "history":
    case "header":
    case "areamap":
    case "partnerLogo":
      return ["/about"];
    case "projectpost":
      let arr = ["/gallery/all"];
      doc?.data?.slices?.forEach((el) =>
        arr.push(`/gallery/${el?.primary?.tagname?.uid}`)
      );
      return arr;
    case "tag":
      return ["/gallery/all", `/gallery/${doc.uid}`];
    case "product":
      return [`/product/${doc.uid}`];
    case "producttag":
      return ["/product/all", `/product/${doc.uid}`];
    default:
      return null;
  }
}

export default async function handler(req, res) {
  if (req.body.type === "api-update" && req.body.documents.length > 0) {
    // Check for secret to confirm this is a valid request
    if (req.body.secret !== process.env.PRISMIC_WEBHOOK_SECRET) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const client = prismic.createClient(sm.apiEndpoint);
    // Get a list of URLs for any new, updated, or deleted documents
    const documents = await client.getAllByIDs(req.body.documents);

    const [urls] = documents.map((doc) => linkResolver(doc));

    try {
      // Revalidate the URLs for those documents
      await Promise.all(urls?.map(async (url) => await res.revalidate(url)));

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
