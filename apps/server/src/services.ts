import { createAuth as createConfiguredAuth } from "@boarding-school/auth";
import { type Database, createPrismaClient } from "@boarding-school/db";

import { env } from "./env.server";

const db = createPrismaClient(env);

export function getDb(): Database {
  return db;
}
export const auth = createConfiguredAuth(env, db);
