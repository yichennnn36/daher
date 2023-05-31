import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>大和派報社</title>
      <link rel="icon" type="image/png" href="/images/main-icon.svg" />
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
    </Head>
  );
}
