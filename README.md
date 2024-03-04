# Strong Towns Vancouver website

This is a repository for the Strong Towns Vancouver local conversation website source code.

You can find this website online at [strongtownsvan.ca](https://strongtownsvan.ca)

## 🚀 Project Structure

Strong Towns Vancouver is a [JAMstack](https://jamstack.org/what-is-jamstack/) static web application written in TypeScript using Astro framework. Inside of this project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

All website pages are defined in `src/pages/` folder as `.astro` or `.md` file. Each page is exposed as a route based on its file name, e.g. page with filename `about.astro` will be in `/about` route.

The `src/components/` folder contains various reusable components for a website. Example of these components are header, footer, page links, etc. Components are defined in `.astro` files.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Strong Towns blog posts are stored in this folder. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

Strong Towns website uses `pnpm`.

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## ⭐ Want to contribute?

Check out [Astro documentation](https://docs.astro.build) to get familiar with the framwork website is built upon. We are happy to accept contributions, but we don't have an SLA to respond on issues or to review contributions. Please be respectful to other contributors!
