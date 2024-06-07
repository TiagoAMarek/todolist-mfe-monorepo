# todolist-mfe-monorepo

This is a sample repo to show a reusable todolist component inside a micro-frontend monorepository

Repo started using the [turborepo-next-basic](https://vercel.com/templates/next.js/turborepo-next-basic)

## Install PNPM

This project requires pnpm, install it from [here](https://pnpm.io/pt/installation)

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/state-manager`: a reusable state-manager shared by both `web` and `docs` applications
- `@repo/todolist`: a todolist React component shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command on the root directory:

```
pnpm build
```

#### Building only the todolist component

```
pnpm build --filter=@repo/todolist
```

#### Building only the todolist component

```
pnpm build --filter=@repo/state-manager
```

### Develop

To develop all apps and packages, run the following command on the root directory:

```
pnpm dev
```

### Testing

run tests with the following command:

```
pnpm test
```
