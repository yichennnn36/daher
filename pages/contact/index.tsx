import Template from "../../components/template";
import Contact from "../../components/contact";
import Layout from "../../components/layout";
import { createClient } from "../../lib/prismic";
import { PostDocumentWithAuthor } from "../../lib/types";

type IndexProps = {
  preview: boolean;
  data: PostDocumentWithAuthor[];
};

export default function Index({ data }: IndexProps) {
  return (
    <Layout>
      <Template header={data}>
        <Contact />
      </Template>
    </Layout>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  const client = createClient({ previewData });

  const headerImg = await client.getByUID("header", "logo");

  return {
    props: { data: { headerImg } },
  };
}
