// @ts-nocheck
import { createClient } from "../../prismicio";
import Template from "../../components/template";
import Product from "../../container/Product";
import Layout from "../../components/layout";

type IndexProps = {
  preview: boolean;
  data: any;
};

const Index = ({ data }: IndexProps) => {
  return (
    <Layout>
      <Template header={data}>
        <Product resource={data} />
      </Template>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ preview = false, previewData }) {
  const client = createClient({ previewData });

  const headerImg = await client.getByUID("header", "logo");
  const products = await client.getAllByType("product");
  const tags = await client.getByType("producttag");

  return {
    props: { data: { headerImg, products, tags } },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const allTags = await client.getAllByType("producttag");
  const tags = [{ uid: "all" }, { uid: "hint" }, ...allTags];

  return {
    paths: tags.map((x) => `/category/${x.uid}`),
    fallback: "blocking",
  };
}
