import { withIronSessionApiRoute } from "iron-session/next/dist";
import type { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../utils/session";

type Data = {
  name: string;
};

export default withIronSessionApiRoute(
  (req: NextApiRequest, res: NextApiResponse<Data>) => {

    res.status(200).json({ name: "John Doe" });
  },
  sessionOptions
);
