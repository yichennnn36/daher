import Head from "next/head";

import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <title>大和派報社</title>
      <link rel="icon" type="image/png" href="/images/icon.png" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`da-her`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}
