// @ts-nocheck
import { createClient } from "../../prismicio";
import Template from "../../components/template";
import ProductDetail from "../../container/ProductDetail";
import Layout from "../../components/layout";
import * as prismicH from "@prismicio/helpers";

type IndexProps = {
  preview: boolean;
  data: any;
};

const Index = ({ data }: IndexProps) => {
  return (
    <Layout>
      <Template header={data}>
        <ProductDetail resource={data} />
      </Template>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ preview = false, previewData, params }) {
  const client = createClient({ previewData });

  const headerImg = await client.getByUID("header", "logo");
  const products = await client.getAllByType("product");
  const tags = await client.getByType("producttag");

  const targetProduct = products?.filter((el: any) => el.uid === params.id);
  return {
    props: { data: { headerImg, targetProduct, tags } },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const products = await client.getAllByType("product");

  return {
    paths: products?.map((x) => `/product/${x?.uid}`),
    fallback: false,
  };
}
