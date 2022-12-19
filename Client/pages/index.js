import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Index() {
  let router = useRouter();
  useEffect(() => {
    router.push("/homepage");
  });

  return <></>;
}
