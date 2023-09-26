{ pkgs, ... }:
let
  perlEnv = pkgs.perl.withPackages (p: with p; [
    CryptEksblowfish
    CryptPassphrase
    CryptPassphraseArgon2
    CryptPassphraseBcrypt
    FileHomeDir
    FileReadBackwards
    HTTPAcceptLanguage
    SyntaxKeywordTry
    FutureAsyncAwait
    FileWhich
    IOSocketSSL
    IRCUtils
    JSONValidator
    LinkEmbedder
    ModuleInstall
    Mojolicious
    MojoliciousPluginOpenAPI
    MojoliciousPluginSyslog
    MojoliciousPluginWebpack
    NetSSLeay
    ParseIRC
    TestDeep
    TextMarkdownHoedown
    TimePiece
    UnicodeUTF8
    CpanelJSONXS
    EV
    YAMLPP
  ]);
in
{

  # https://devenv.sh/packages/
  packages = with pkgs; [
    libxcrypt
    openssl
    perlEnv
  ];

}
