import randomString from "@/utils/randomString";
import qs from "querystring";

export const BASE_API_URL = "https://api.spotify.com";
export const BASE_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";

export const SPOTIFY_AUTH_URL = () => {
  const state = randomString(16);
  const scope =
    "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming";

  return (
    "https://accounts.spotify.com/authorize?" +
    qs.stringify({
      response_type: "code",
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      scope: scope,
      redirect_uri: `${BASE_URL}/api/callback`,
      state: state,
    })
  );
};
