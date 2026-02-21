import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore({ name: "views", consistency: "strong" });

  let count = await store.get("count", { type: "text" });
  count = count ? parseInt(count, 10) + 1 : 1;
  await store.set("count", String(count));

  return Response.json({ count });
};

export const config = {
  path: "/api/views",
};
