import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <PrismicPreview repositoryName={repositoryName}>
      <Component {...pageProps} />
    </PrismicPreview>
  );
}

export default MyApp;
