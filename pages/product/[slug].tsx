// @ts-nocheck
import { createClient } from "../../lib/prismic";
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
  const products = await client.getByUID("productpost", "product");
  const tags = await client.getByType("producttag");

  return {
    props: { data: { headerImg, products, tags } },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const allTags = await client.getAllByType("producttag");
  const tags = [{ uid: "all" }, ...allTags];

  return {
    paths: tags.map((x) => `/product/${x.uid}}`),
    fallback: true,
  };
}
