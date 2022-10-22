// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/login.ts";
import * as $1 from "./routes/api/logout.ts";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/secret_or_custom.tsx";
import * as $4 from "./routes/secret_or_redirect.tsx";
import * as $$0 from "./islands/Login.tsx";

const manifest = {
  routes: {
    "./routes/api/login.ts": $0,
    "./routes/api/logout.ts": $1,
    "./routes/index.tsx": $2,
    "./routes/secret_or_custom.tsx": $3,
    "./routes/secret_or_redirect.tsx": $4,
  },
  islands: {
    "./islands/Login.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
