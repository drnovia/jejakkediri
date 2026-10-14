# Vinext hosting & ChatGPT sign-in

This site runs on [vinext](https://github.com/cloudflare/vinext). Optional Cloudflare D1 uses Drizzle (`db/schema.ts`, `drizzle.config.ts`).

## Auth headers

Signed-in visitors may receive `oai-authenticated-user-id`, `oai-authenticated-user-email`, and optionally percent-encoded `oai-authenticated-user-full-name`.

Helpers live in `app/chatgpt-auth.ts`:

- `getChatGPTUser()` — optional signed-in UI
- `requireChatGPTUser(returnTo)` — protect server pages
- `chatGPTSignInPath` / `chatGPTSignOutPath` — link builders

Mark identity-dependent pages with `export const dynamic = "force-dynamic"`.

Do not implement routes for `/signin-with-chatgpt`, `/signout-with-chatgpt`, or `/callback` — the platform owns those paths.
