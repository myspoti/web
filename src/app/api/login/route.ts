import { BASE_URL } from "@/constants/path";
import randomString from "@/utils/randomString";
import { redirect } from "next/navigation";
import qs from "querystring";

export default function GET() {
  const state = randomString(16);
  const scope = "user-read-private user-read-email";
  // const scope = "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming";

  redirect(
    "https://accounts.spotify.com/authorize?" +
      qs.stringify({
        response_type: "code",
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        scope: scope,
        redirect_uri: `${BASE_URL}/api/callback`,
        state: state,
      })
  );
}
