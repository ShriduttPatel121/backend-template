# Backend Template

This is a backend template using Express and TypeScript.

## Folder Structure

```
.dockerignore
.gitignore
Dockerfile
package.json
README.md
tsconfig.json
src/
    index.ts
    controllers/
        signup.ts
    middleware/
        customeResponse.ts
        errorHandler.ts
    routes/
        curresntUser.ts
        index.ts
        signin.ts
        signout.ts
        signup.ts
    Types/
        SignupSchema.ts
    utils/
        StatusCodes.ts
```

- **controllers/**: Contains the controller logic for handling requests.
- **middleware/**: Contains custom middleware for handling responses and errors.
- **routes/**: Defines the routes for the application.
- **Types/**: Contains TypeScript type definitions and schemas.
- **utils/**: Contains utility functions and constants.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd backend-template
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Project

To start the development server, run:
```sh
npm start
```

The server will start on port 3000.

### Running in Production

To build and run the project for production, run:
```sh
npm run production
```

The server will start on port 3000.
