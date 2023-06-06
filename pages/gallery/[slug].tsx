// @ts-nocheck
import { useState, useEffect, Suspense } from "react";
import Template from "../../components/template";
import Gallery from "../../container/Gallery";
import Layout from "../../components/layout";
import { createClient } from "../../prismicio";

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
  const gallery = await client.getByUID("projectpost", "gallery", {
    orderings: [
      {
        field: "document.last_publication_date_publication_date",
        direction: "desc",
      },
    ],
  });
  const tags = await client.getByType("tag", {
    orderings: [{ field: "document.first_publication_date", direction: "asc" }],
  });

  return {
    props: { data: { headerImg, gallery, tags } },
    revalidate: 45,
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const allTags = await client.getAllByType("tag");
  const tags = [{ uid: "all" }, ...allTags];

  return {
    paths: tags.map((x) => `/gallery/${x.uid}`),
    fallback: "blocking",
  };
}
