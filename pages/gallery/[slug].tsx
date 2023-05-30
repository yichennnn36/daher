// @ts-nocheck
import { useState, useEffect, Suspense } from "react";
import Template from "../../components/template";
import Gallery from "../../container/Gallery";
import Layout from "../../components/layout";
import { createClient } from "../../lib/prismic";

type IndexProps = {
  preview: boolean;
  data: any;
};

const Index = ({ data }: IndexProps) => {
  return (
    <Layout>
      <Template header={data}>
        <Gallery resource={data} />
      </Template>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ preview = false, previewData }) {
  const client = createClient({ previewData });

  const headerImg = await client.getByUID("header", "logo");
  const gallery = await client.getByUID("projectpost", "gallery");
  const tags = await client.getByType("tag");

  return {
    props: { data: { headerImg, gallery, tags } },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const allTags = await client.getAllByType("tag");

  return {
    paths: allTags.map((x) => `/gallery/${x.uid}`),
    fallback: false,
  };
}
