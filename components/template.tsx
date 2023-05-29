import Container from "./container";
import Header from "./header";
import Banner from "./banner";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Container>
        <Header />
        <Banner />
        {children}
        <Footer />
      </Container>
    </>
  );
}
