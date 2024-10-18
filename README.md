# Teamster

## Development Setup

### Prerequisites

This project uses [Nix](https://nixos.org/download/), a package and system management tool, to ensure declarative, reproducible, and reliable development environments.

1. **Install Nix**
   Follow the instructions on [Nix's website](https://nixos.org/download/) to install Nix on your system. To verify the installation, run:

   ```bash
   nix --version
   ```

2. **Clone the Repository**
   Clone the project to your local machine in your preferred directory:

   ```bash
   git clone https://github.com/nodu/teamster.git
   ```

   > **Note:** If `git` is not installed, you can install it via Nix with:
   > `nix-env -iA nixpkgs.git`

3. **Set Up `direnv` for Automatic Environment Management**
   If you haven't already installed `direnv`, you can install it globally via Nix:

   ```bash
   nix-env -iA nixpkgs.direnv
   ```

   Follow the instructions in [direnv's documentation](https://direnv.net/docs/hook.html) to hook `direnv` into your shell. Restart your shell after setting it up.

   Then, allow `direnv` to load the environment for this project:

   ```bash
   cd ...path/to/project...
   direnv allow .
   ```

   > **Tip:** If you prefer not to use `direnv`, you can manually enter the Nix development environment by running `nix develop` in the project directory whenever you need the environment.

4. **Initialize the Project**
   Once you're inside the Nix development shell, initialize the basic Django SQLite database, apply database migrations, and install the UI dependencies:

   ```bash
   make
   ```

   > **Note:** Only machine-level dependencies and backend (Django) packages are managed via Nix. Frontend dependencies (UI) are managed via Vite.

### Running the Application

This project provides a `Makefile` that contains common commands for setting up and running both the API (Django REST Framework) and the UI (Vite/TypeScript/React.js). You can use it as **actionable documentation**.

To develop with hot reloading, start the Django API server and the Vite UI server in separate terminals:

1. **Django API server**:

   ```bash
   make serve-api
   ```

2. **Vite UI server**:

   ```bash
   make serve-ui-dev
   ```

   > **Note:** If you modify the backend models (Django's data model), remember to run:
   >
   > - `make make-migrations` — to create migrations
   > - `make migrate` — to apply the migrations to your local database

### Testing

Run unit tests for the project with the following commands:

- **Django tests**:

  ```bash
  make test-api
  ```

- **UI tests**:

  ```bash
  make test-ui
  ```

Happy coding! 🎉

## TODO

- Better Toast UI notifications
- Replace HTML5 forms/validation with more robust library
- Create coding style guide files and pre-commit hook for prettier, linting, test, etc
- Prepare Pull Request, UAT, and Production CI/CD pipelines: Test API/UI, Production Build API/UI packages
- Deploy to Production, setting up proper .env and config/setting defaults
- Increase unit test coverage
- Add cancel confirmation when navigating away from touched forms/Auto save on edit
- Add proper RDBMS/Service instead of SQLite

<!-- markdownlint-configure-file { "MD013": false } -->
