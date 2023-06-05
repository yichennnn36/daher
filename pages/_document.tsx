import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <script
        async
        defer
        src="https://static.cdn.prismic.io/prismic.js?new=true&repo=daher-site"
      ></script>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
