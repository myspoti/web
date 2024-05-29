"use client";
import { SPOTIFY_AUTH_URL } from "@/constants/path";
import useUserStore from "@/store/useStore";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  const { loginDataState } = useUserStore();

  if (!loginDataState) {
    // return <button onClick={() => router.push("/api/login")}>로그인</button>;
    return (
      <button onClick={() => router.push(SPOTIFY_AUTH_URL())}>로그인</button>
    );
  }

  return (
    <>
      <p>1</p>
    </>
  );
}
