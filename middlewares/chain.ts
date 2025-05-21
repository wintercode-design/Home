// lib/middlewares/chain.ts
import { NextMiddleware, NextResponse } from "next/server";

export type MiddlewareFactory = (mw: NextMiddleware) => NextMiddleware;

export const chain = (fns: MiddlewareFactory[], i = 0): NextMiddleware =>
  fns[i] ? fns[i](chain(fns, i + 1)) : () => NextResponse.next();
