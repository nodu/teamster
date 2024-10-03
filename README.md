# Teamster

## Development Setup

### Machine Setup

This project uses [Nix](https://nixos.org/download/), a package and system management tool, for reproducible, declarative, and reliable development environments. After installing `Nix`, run the local environment with `shell-nix`. Then you you can run `direnv allow` to automatically start the local environment when inside this project.

Currently, Django dependencies, are handled by `Nix`. For the UI, install dependencies via `npm install` from the /ui directory.

### Development

As a project centric helper, this project uses a `makefile`. See the contents for common operations such as setting up the Django server, UI server, running the test suites, etc.

Run Django server: `make serve`

Run UI server: `make serve-ui-dev`

Happy coding!

### Testing

To test this project, run the respective Django and UI unit test suites with: 'make test-api' and 'make test-ui'.
