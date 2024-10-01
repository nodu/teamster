let
  nixpkgs = (fetchGit {
    name = "nixos-release-24.05";
    url = "https://github.com/nixos/nixpkgs/";
    ref = "refs/tags/24.05";
    rev = "63dacb46bf939521bdc93981b4cbb7ecb58427a0";
  });
  getpkgs = import nixpkgs;
  pkgs = getpkgs { };
in
pkgs.mkShell {
  buildInputs = [
    pkgs.direnv
    pkgs.python3
    pkgs.python311Packages.pip
    pkgs.nodejs_22
    pkgs.cowsay
  ];
  shellHook = ''
    cowsay "Here is your shell environment!"
  '';
}
