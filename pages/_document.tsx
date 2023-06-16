import { Html, Head, Main, NextScript } from "next/document";
import { Fragment } from "react";

export default function Document() {
  const setGoogleTags = () => {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11123792459');
      `,
    };
  };
  return (
    <Html lang="en">
      <script
        async
        defer
        src="https://static.cdn.prismic.io/prismic.js?new=true&repo=daher-site"
      ></script>
      <Head />
      <body>
        <Fragment>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-11123792459"
          />
          <script dangerouslySetInnerHTML={setGoogleTags()} />
        </Fragment>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
