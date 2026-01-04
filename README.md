# github-packages-npm-registry-sample

Zenn記事 [モデルの型定義ファイル(TypeScript)を共有モジュール化してGitHub Packages(npmレジストリ)で配信する, 株式会社log build](https://zenn.dev/logbuild/articles/2b3f650389eade) を写経する。

## モノレポに関するチップス

このプロジェクトは型定義をGitHub Packagesで配信するコードを実装しようと試みた。その成果物をimportして利用する側のプロジェクトも作りたくなった。sharedプロジェクトとfrontendプロジェクトと名付けようか。sharedとfrontendの二つのプロジェクトを１つのGitレポジトリに格納したくなった。２つのレポジトリに分けるよりも１つの方が見通しが良いから。つまりモノレポにしたくなった。ところがモノレポにするとGitHub Actionsの使い方がやや高度になって学ぶべきことが増えた。

下記の記事も参照した。

Qiita記事[モノレポでGitHub Actionsをいい感じにやるチップス](https://qiita.com/watta10/items/e9b3e03f304f6ba5ff9b)

Qiita記事[リポジトリの一部分だけcheckoutできるsparse-checkoutがactions/checkout@v4に来てた](https://qiita.com/nicco_mirai/items/5a306549e57ee69403c9)
