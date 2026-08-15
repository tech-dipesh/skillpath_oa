# Skillpath Courses
Learning Platform Landing Page With Build of Framer Code componetn which fetch the course code.

## Run locally

```
pnpm install
pnpm dev
```
`pn type` For Type Check
`pnpm build` builds the production bundle.
## Error handling
The course list and country code are fetched independently and each can
fail on its own. Four states are covered: loading (skeleton cards), error
(retry button), empty result, and success. If the country lookup fails but
courses still load, price is hidden instead of guessed.

## Notes
Colors live in `src/index.css` as CSS variables, referenced by each
component's own stylesheet.


# Thanks.