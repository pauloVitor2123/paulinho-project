import { pgTable, uuid, primaryKey } from "drizzle-orm/pg-core";
import { posts } from "./posts";
import { tags } from "./tags";

export const postsToTags = pgTable(
  "posts_to_tags",
  {
    postId: uuid("post_id")
      .notNull()
      .references(() => posts.id, { onDelete: "cascade" }),
    tagId: uuid("tag_id")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
  },
  (table) => [primaryKey({ columns: [table.postId, table.tagId] })],
);
