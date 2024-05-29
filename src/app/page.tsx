import { getAuthSession } from "@/utils/serverUtils";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <p>hi</p>
    </>
  );
}
