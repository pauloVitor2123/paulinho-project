# Post Lifecycle

## Status

Posts have two statuses: `draft` and `published`.

- A post starts as `draft` by default.
- A post becomes `published` when `status` is set to `"published"`.

## publishedAt — immutable after first publication

- `publishedAt` is set to `new Date()` the **first time** a post is published (`status: "published"` and current `publishedAt` is `null`).
- Subsequent updates (including re-publishing after draft) do **not** change `publishedAt`.
- Going back to `draft` does **not** clear `publishedAt`.

## slug — immutable after creation

- `slug` is set at creation time (`create-post`).
- `update-post` does not accept `slug` in its input — changing slugs would break existing URLs.

## Public visibility

Only posts with `status: "published"` are returned by public services:
- `listPublishedPosts`
- `getPublishedPostBySlug`

Admin services (`listAllPosts`, `getPostBySlug`) return all posts regardless of status.

## Edge cases

- If a post is published, moved to draft, then published again: `publishedAt` is preserved from the first publication.
- Deleting a post is permanent and cannot be undone.
