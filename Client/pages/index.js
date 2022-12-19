import { useRouter } from "next/router";

export default function Home() {
  let router = useRouter()
  return router.push("/homepage");
}
