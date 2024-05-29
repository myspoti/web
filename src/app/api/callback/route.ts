import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import qs from "querystring";
import { postAuthorizationCodeToken } from "../../../utils/token";
import { redirect } from "next/navigation";

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  const code = typeof req.query.code === "string" ? req.query.code : null;
  const state = typeof req.query.state === "string" ? req.query.state : null;

  if (state === null || code === null) {
    redirect(
      "/#" +
        qs.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    postAuthorizationCodeToken(code)
      .then(
        (response: {
          data: { access_token: any; expires_in: any; refresh_token: any };
        }) => {
          setCookie("access_token", response.data.access_token, {
            req,
            res,
            maxAge: response.data.expires_in,
          });

          setCookie("refresh_token", response.data.refresh_token, {
            req,
            res,
            maxAge: response.data.expires_in,
            httpOnly: true,
          });

          redirect("/");
        }
      )
      .catch((error: any) => {
        res.status(500).json(error);
      });
  }
}
