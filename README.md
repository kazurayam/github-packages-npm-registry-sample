# github-packages-npm-registry-sample

## 概要

Zenn記事 [モデルの型定義ファイル(TypeScript)を共有モジュール化してGitHub Packages(npmレジストリ)で配信する, 株式会社log build](https://zenn.dev/logbuild/articles/2b3f650389eade) を学ぶ。この記事を「GHP記事」と略して参照する。

なおGHP記事は冒頭から「GitHub Packagesとは？」という話題から始めているが、わたしはその説明についていけなかった。GitHub Packagesのことを一旦棚上げにして、モノレポ構造のレポジトリを作ることから始めた。つまりgithub-packages-npm-registry-sampleレポジトリをsharedパッケージとfrontendパッケージの二つからなるモノレポとしてちゃんと動作するようにした。そのために

 - [kazurayam/bun-workspaces-monorepo](https://github.com/kazurayam/bun-workspaces-monorepo)

という別のGitレポジトリを作り、そこでモノレポの作り方を学んだ。ここまでの成果に 0.2.0 とタグづけした。

次に、sharedパッケージをGitHub Packagesで配信するように、設定を書き換えた。このまでの成果に 0.3.0 とタグづけした。

## タグ 0.2.0 に関するメモ


## タグ 0.3.0 に関するメモ


