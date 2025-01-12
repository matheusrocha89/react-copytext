# Create the CONTRIBUTION.md content

contribution_content = """

# Contributing to React-CopyText

Thank you for considering contributing to the **React-CopyText** project! 🎉 This document outlines the guidelines and processes for contributing to ensure a smooth and efficient workflow.

---

## **Table of Contents**

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Setting Up the Development Environment](#setting-up-the-development-environment)
4. [Making Commits with Commitizen](#making-commits-with-commitizen)
5. [Running the Release Script](#running-the-release-script)
6. [Best Practices](#best-practices)
7. [Submitting Changes](#submitting-changes)
8. [Contact](#contact)

---

## **1. Prerequisites**

Before contributing, ensure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **NPM** (v7 or higher)
- **Git**
- Familiarity with React and TypeScript.

---

## **2. Project Structure**

The project follows this structure:

```
├── src/              # Source code for the library
│   ├── Test.tsx      # Example component
│   └── index.ts      # Exports for the library
├── example/          # Example app for development and testing
├── dist/             # Compiled files (not included in Git)
├── .husky/           # Git hooks for commit linting
├── package.json      # Project configuration
├── CHANGELOG.md      # Automatically generated changelog
└── CONTRIBUTION.md   # Contribution guidelines
```

---

## **3. Setting Up the Development Environment**

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/react-copytext.git
   cd react-copytext
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the example app for local testing:
   ```bash
   npm run start:example
   ```

---

## **4. Making Commits with Commitizen**

We use **Commitizen** to ensure commit messages follow the **Conventional Commits** format.

1. Make changes to the project.
2. Stage your changes:
   ```bash
   git add <file>
   ```
3. Use Commitizen to make a commit:
   ```bash
   npx cz
   ```
4. Follow the prompts to write a descriptive, properly formatted commit message.

---

## **5. Running the Release Script**

Releases are automated using `standard-version` and a custom `release.sh` script.

1. Ensure all tests pass and the code is stable.
2. Run the release script:
   ```bash
   ./release.sh
   ```
3. The script will:
   - Update the version in `package.json`.
   - Generate and append changes to `CHANGELOG.md`.
   - Create a commit and tag for the release.
   - Publish the package to NPM.
   - Push the changes and tags to the repository.

---

## **6. Best Practices**

### **Code Standards**

- Write clean, maintainable code using TypeScript.
- Follow the existing project structure and naming conventions.
- Use CSS modules for styling (`*.module.css`).

### **Git Practices**

- Always use Commitizen for commits (`npx cz`).
- Write meaningful commit messages (e.g., `feat: add CopyText component`).

### **Testing**

- Test your changes locally using the example app.
- If relevant, add or update tests in the `tests/` directory.

### **Peer Dependencies**

- Ensure compatibility with `react` (>=16.8.0 <20.0.0) and `react-dom` (>=16.8.0 <20.0.0).

---

## **7. Submitting Changes**

1. Fork the repository and create a new branch:
   ```bash
   git checkout -b feature/my-feature
   ```
2. Make your changes and commit them using Commitizen.
3. Push your branch to your fork:
   ```bash
   git push origin feature/my-feature
   ```
4. Open a pull request against the `main` branch.

---

## **8. Contact**

If you have any questions or need further assistance, feel free to open an issue or reach out to the project maintainers.

---

"""
