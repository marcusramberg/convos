{ pkgs, ... }:

{
  # https://devenv.sh/packages/
  packages = with pkgs; [
    air
    golangci-lint
    hugo
    pnpm
  ];
  languages.go = {
    enable = true;
    package = pkgs.go_1_26;
  };
  processes = {
    dev.exec = "task dev";
  };
  services.postgres = {
    enable = true;
    initialDatabases = [ { name = "tabdog"; } ];
  };

}
