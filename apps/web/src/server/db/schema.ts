// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  primaryKey,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `holonexus_${name}`);

export const shards = createTable(
  "shard",
  {
    allyCode: varchar("ally_code", { length: 9 }).notNull(),
    characterId: varchar("character_id", { length: 256 }).notNull(),

    initialShards: integer("initial_shards").notNull().default(0),

    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (self) => ({
    primaryKey: primaryKey({
      columns: [self.allyCode, self.characterId],
      name: "shard_pk",
    }),

    allyCodeIndex: index("shard_ally_code_idx").on(self.allyCode),
    characterIdIndex: index("shard_character_id_idx").on(self.characterId),
  }),
);

export const shardsRelations = relations(shards, ({ many }) => ({
  shardEntries: many(shardEntries),
}));

export const shardEntries = createTable(
  "shard_entry",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),

    allyCode: varchar("ally_code", { length: 9 }).notNull(),
    characterId: varchar("character_id", { length: 256 }).notNull(),

    shards: integer("shards").notNull(),

    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (self) => ({
    allyCodeIndex: index("entry_ally_code_idx").on(self.allyCode),
    characterIdIndex: index("entry_character_id_idx").on(self.characterId),
  }),
);

export const shardEntriesRelations = relations(shardEntries, ({ one }) => ({
  shard: one(shards, {
    fields: [shardEntries.allyCode, shardEntries.characterId],
    references: [shards.allyCode, shards.characterId],
  }),
}));
