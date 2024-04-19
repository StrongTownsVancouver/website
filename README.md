# Strong Towns Vancouver website

This is a repository for the Strong Towns Vancouver local conversation website source code.

You can find this website online at <https://strongtownsvan.pages.dev/>.

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

## 🧞 Getting Started

Strong Towns website uses `pnpm`. In order to run it locally, you need to have Node.js and pnpm installed.

- [Installing Node.js](https://nodejs.org/en/download/current)
- [Installing pnpm](https://pnpm.io/installation)

After Node.js and pnpm installed, you can use command below to run and manage project. All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Install website dependencies                           |
| `pnpm dev`             | Starts local development server at `localhost:4321` with live reload support.      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## ⭐ Want to contribute?

Check out [Astro documentation](https://docs.astro.build) to get familiar with the framwork website is built upon. We are happy to accept contributions, but we don't have an SLA to respond on issues or to review contributions. Please be respectful to other contributors!

### Want to add new blog post?

If you want to add a new blog post, feel free to create a Pull Request with new post placed in [src/content/blog](https://github.com/StrongTownsVancouver/website/tree/main/src/content/blog).

## Deployment

This website is deployed using Cloudflare pages. Deployment happens from `main` branch on every new push. Current production deployment can be found [here](https://github.com/StrongTownsVancouver/website/tree/main). Please talk to any of Strong Towns Vancouver administrators to get access if you need it.
