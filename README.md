# Cypress Test Automation Suite

## 📂 Repository Content

This repository contains Cypress tests for user authentication and sign-up functionalities. The main files are structured according to Cypress best practices.

### 🏗 Folder Structure
The test files are located in the `cypress/e2e/` folder:
- **`CreateUser.cy.js`** - Executes form validation tests and creates a random user.
- **`Login.cy.js`** - Tests the login page functionality, including email/password login and GitHub authentication.
- **`CreateUser.spec.cy.js`** - A creative exercise where Cypress attempts to log in. If the user does not exist, it automatically navigates to the Sign-Up page. The test randomly selects between a new user or a fixed existing user (`mathias.pragmatica@gmail.com`).

### 🎬 Test Execution Results
You can find the **Cypress run results** in the `video` folder, showcasing test execution flow and outcomes.

## 🚀 Getting Started

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [Cypress](https://www.cypress.io/)

### Installation
Clone the repository:
```bash
git clone YOUR_GITHUB_REPO_URL
cd YOUR_PROJECT_FOLDER
npm install