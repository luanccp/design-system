# 🎯 Summary

This project was made to explore how to build a design system as a monorepo and publish the package on NPM.

In this monorepo, we have 5 packages:

#### `docs`
This package represent the storybook page with all components and tokens.

#### `eslint-config`

This package represent the eslint configuration which is shared with the whole monorepo.

#### `react`

This package contain the components built using tokens from the design system.
The components are:
- Button
- Heading
- Text
- TextInput
- Textarea
- Checkbox
- Avatar
- MultiStep

#### `tokens`

This is the core of the design system. Design tokens are name and value pairings that represent small, repeatable design decisions. A token can be a color, font style, unit of white space, or even a motion animation designed for a specific need.

#### `ts-config`
This monorepo uses **Typescript**. So this package is just Typescript configuration that is shared with the whole repo.

## Used technology
- React + Vite
- Stitches
- Storybook
- eslint
- Turborepo
- Vercel caching
- NPM packages
- Changeset
- Github Actions + Github pages


> If you like this repo, give a star ⭐️