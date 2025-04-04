import { createUser } from "../../../../models/Users";
import jwt from "jsonwebtoken";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof decoded !== "object" || decoded === null || !("role" in decoded)) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const { role } = decoded as jwt.JwtPayload;
    if (role !== "admin") return res.status(403).json({ message: "Forbidden" });

    const { email, password } = req.body;
    await createUser(email, password);

    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
}
