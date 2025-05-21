import { chain } from "./middlewares/chain";
import { withAuth } from "./middlewares/withAuth";
import { withI18n } from "./middlewares/withI18n";

export default chain([
  withAuth, // 1️⃣ protect selected routes
  withI18n, // 2️⃣ add locale routing
]);

// Match everything except API / static / next internals
export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
