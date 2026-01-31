# Refactor / Maintenance TODO

## Missing `scripts/*` referenced by `package.json`

`package.json` currently references these scripts, but the corresponding files don’t exist in the repository:

- `scripts/deploy.sh` (used by `npm run deploy`)
- `scripts/add-source-metadata.mjs` (used by `npm run add-source-metadata`)
- `scripts/remove-tags-from-posts.mjs` (used by `npm run remove-tags`)

Suggested fixes:

1. Restore/commit the missing files (if they exist elsewhere), **or**
2. Remove/rename these `package.json` script entries to avoid broken commands.

(We only added `scripts/generate-ai-posts-txt.mjs` in this change; the above were pre-existing references.)
