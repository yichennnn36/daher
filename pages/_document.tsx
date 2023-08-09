import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <script
        async
        defer
        src="https://static.cdn.prismic.io/prismic.js?new=true&repo=daher-site"
      ></script>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=AW-11123792459`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('config', 'AW-11123792459');
							gtag('js', new Date());
							`,
          }}
        />
      </Head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=AW-11123792459`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
