import { createClient } from "../../../lib/prismic";
import Template from "../../../components/template";
import ProductDetail from "../../../container/ProductDetail";
import Layout from "../../../components/layout";

const Index = () => {
  return (
    <Layout>
      <Template>
        <ProductDetail />
      </Template>
    </Layout>
  );
};

export default Index;
