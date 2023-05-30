// @ts-nocheck
import { createClient } from "../../../lib/prismic";
import Template from "../../../components/template";
import ProductDetail from "../../../container/ProductDetail";
import Layout from "../../../components/layout";

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
  const products = await client.getByUID("productpost", "product");
  const tags = await client.getByType("producttag");

  const targetProduct = products.data.slices?.filter(
    (el: any) => el.primary.productuid === params.id
  );
  return {
    props: { data: { headerImg, targetProduct, tags } },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const products = await client.getByUID("productpost", "product");
  return {
    paths: products?.data.slices.map(
      (x) => `/product/p/${x.primary.productuid}`
    ),
    fallback: false,
  };
}
