import { createClient } from "../../../lib/prismic";
import Template from "../../../components/template";
import Product from "../../../container/Product";
import Layout from "../../../components/layout";

const Index = () => {
  return (
    <Layout>
      <Template>
        <Product />
      </Template>
    </Layout>
  );
};

export default Index;

// export async function getStaticProps({ params, previewData }) {
//   const client = createClient({ previewData });

//   const tags = await client.getAllByType("tag");
//   const projects = await client.getByType("projectpost", params.slug);
//   // const allPosts = await client.getAllByType("post", {
//   //   fetchLinks: ["author.name", "author.picture"],
//   //   orderings: [{ field: "my.post.date", direction: "desc" }],
//   // });

//   return {
//     props: { tags, projects: projects.results, slug: params.slug },
//   };
// }

// export async function getStaticPaths() {
//   const client = createClient();

//   const allTags = await client.getAllByType("tag");

//   return {
//     paths: allTags.map((x) => `/gallery/${x.uid}`),
//     fallback: true,
//   };
// }
