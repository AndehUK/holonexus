import { db } from "@/server/db";
import { shards } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

const app = new Hono().get("/:allyCode", async (ctx) => {
  try {
    const allyCode = ctx.req.param("allyCode");

    const results = await db
      .select({ characterId: shards.characterId })
      .from(shards)
      .where(eq(shards.allyCode, allyCode))
      .orderBy(shards.createdAt);

    return ctx.json({ data: results });
  } catch (error) {
    if (error instanceof HTTPException) throw error;
    throw new HTTPException(500, { message: "Internal Server Error" });
  }
});

export default app;
