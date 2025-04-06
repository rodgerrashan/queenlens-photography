import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
  user?: string | jwt.JwtPayload;
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch{
    res.status(401).json({ message: "Invalid token" });
  }
}
