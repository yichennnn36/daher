import { useEffect } from "react";
import { useRouter } from "next/router";
import Landing from "../components/landing";
import Layout from "../components/layout";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/about", undefined, { shallow: true }), 3000);
  }, []);

  return (
    <Layout>
      <Landing />
    </Layout>
  );
}
