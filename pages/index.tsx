import { useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/loading";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/about"), 1000);
  }, []);

  return <Loading />;
}
