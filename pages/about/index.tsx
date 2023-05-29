import { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import Template from "../../components/template";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { createClient } from "../../lib/prismic";
import { PostDocumentWithAuthor } from "../../lib/types";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import MainIndex from "../../container/Main";

type IndexProps = {
  preview: boolean;
  allPosts: PostDocumentWithAuthor[];
};

export default function Index({ preview, allPosts }: IndexProps) {
  const [heroPost, ...morePosts] = allPosts;

  return (
    <Layout>
      <Template>
        <MainIndex />
      </Template>
    </Layout>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  const client = createClient({ previewData });

  // const tags = await client.getAllByType("tag");

  // const allPosts = await client.getAllByType("post", {
  //   fetchLinks: ["author.name", "author.picture"],
  //   orderings: [{ field: "my.post.date", direction: "desc" }],
  // });

  return {
    props: { preview, allPosts: [] },
  };
}
