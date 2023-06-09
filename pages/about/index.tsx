// @ts-nocheck
import React from "react";
import Template from "../../components/template";
import Layout from "../../components/layout";
import { createClient } from "../../prismicio";
import MainIndex from "../../container/Main";

type IndexProps = {
  preview: boolean;
  data: any;
};

export default function Index({ data }: IndexProps) {
  return (
    <Layout>
      <Template header={data}>
        <MainIndex data={data} />
      </Template>
    </Layout>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  const client = createClient({ previewData });

  const headerImg = await client.getByUID("header", "logo");
  const historyText = await client.getByUID("history", "story");
  const partnerLogo = await client.getByUID("partnerLogo", "partnerlogo");
  const [intro] = await client.getAllByType("introduction");
  const area = await client.getByUID("areamap", "area");

  return {
    props: { data: { headerImg, historyText, partnerLogo, area, intro } },
  };
}
