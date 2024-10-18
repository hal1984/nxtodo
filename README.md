# Nxtodo

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/8xdbFBMw5N)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve nxtodo
```

To create a production bundle:

```sh
npx nx build nxtodo
```

To see all available targets to run for a project, run:

```sh
npx nx show project nxtodo
```

## Project Description

Nxtodo is a TODO list application developed in React, using Zustand for state management and following Clean Architecture principles to maintain modular and maintainable code. The backend is powered by NestJS, a progressive Node.js framework for building efficient and scalable server-side applications.

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Zustand**: State management library for React applications.
- **Clean Architecture**: Software architecture that promotes separation of concerns and facilitates code maintenance and scalability.
- **Nx**: Tool for managing monorepositories that simplifies organization and task execution in large projects.
- **NestJS**: A framework for building efficient, reliable, and scalable server-side applications.
- **Docker**: Platform for developing, shipping, and running applications inside containers.
- **Drizzle**: ORM for TypeScript and JavaScript that simplifies database interactions.

## Project Structure

This workspace has the following structure:

- `.editorconfig`: Configuration for code editors to ensure consistent coding styles.
- `.github/workflows/ci.yml`: GitHub Actions configuration for Continuous Integration.
- `.gitignore`: Specifies files and directories that should be ignored by Git.
- `.nx/cache/`: Cache directory for Nx.
- `.prettierignore`: Specifies files and directories that should be ignored by Prettier.
- `.prettierrc`: Configuration file for Prettier.
- `.vscode/extensions.json`: Recommended extensions for Visual Studio Code.
- `apps/nxtodo/`: Source code for the main application.
- `apps/nxtodo-e2e/`: End-to-end tests for the main application.
- `apps/todo-nest-app/`: Source code for the NestJS API.
- `apps/todo-nest-app-e2e/`: End-to-end tests for the NestJS API.
- `docker-compose.yml`: Docker Compose configuration for setting up the development environment.
- `drizzle.config.ts`: Configuration file for Drizzle ORM.
- `eslint.config.js`: Configuration file for ESLint.
- `jest.config.ts`: Configuration file for Jest.
- `jest.preset.js`: Jest preset configuration.
- `nx.json`: Nx workspace configuration.
- `package.json`: Project dependencies and scripts.
- `README.md`: This file.
- `tsconfig.base.json`: Base TypeScript configuration.

## Development

To start developing, follow these steps:

1. **Install dependencies**:
    ```sh
    npm install
    ```
2. **Start Docker Compose to launch Postgresql**:
    ```sh
    npm run docker:compose
    ```

3. **Generate first migration**:
    ```sh
    npm run drizzle:generate
    ```

4. **Apply first migration**:
    ```sh
    npm run drizzle:migrate
    ```

5. **Run development servers**:
    ```sh
    npm run start
    ```

6. **Run tests**:
    ```sh
    npx nx test nxtodo
    ```
    ```sh
    npx nx test todo-nest-app
    ```

7. **Run end-to-end tests**:
    ```sh
    npx nx e2e nxtodo-e2e
    ```

## Building for Production

To create a production build, run:

```sh
npx nx build nxtodo
```
```sh
npx nx build todo-nest-app
```

## Linting

To lint the code, run:

```sh
npx nx lint nxtodo
```

```sh
npx nx lint todo-nest-app
```

## Formatting

To format the code, run:

```sh
npx prettier --write .
```

## CI/CD

This project uses GitHub Actions for Continuous Integration. The configuration can be found in 

ci.yml

.

## Docker

This project uses Docker to manage the development environment. The 

docker-compose.yml

 file sets up a PostgreSQL database for the application. To start the Docker containers, run:

```sh
npm run docker:compose
```

## Drizzle ORM

Drizzle ORM is used for database interactions. To generate and apply migrations, use the following commands:

Generate a new migration:

```sh
npm run drizzle:generate
```

Apply the migrations:

```sh
npm run drizzle:migrate
```

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Learn More

For more information about Nx, visit the [Nx Documentation](https://nx.dev).

Happy coding!
```
