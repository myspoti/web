import { BASE_URL } from "@/constants/path";
import randomString from "@/utils/randomString";
import type { NextApiRequest, NextApiResponse } from "next";
import qs from "querystring";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = randomString(16);
  const scope =
    "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming";

  res.redirect(
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
