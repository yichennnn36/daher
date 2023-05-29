import Container from "./container";
import Header from "./header";
import Banner from "./banner";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
  header: any;
};

export default function Layout({ children, header }: LayoutProps) {
  return (
    <>
      <Container>
        <Header header={header} />
        <Banner />
        {children}
        <Footer />
      </Container>
    </>
  );
}
