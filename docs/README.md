# 単語学習アプリ ボキャトレ (vocab)

## 概要

![サムネイル](../images/thumbnail/thumbnail.png)

速単・ターゲット英熟語・古文単語の単語をクイズ形式で覚えることができる非公式のサイトです。4択クイズ、並び替え、キーボード入力などの様々な方法で、英語から日本語、日本語から英語、リスニングなど、様々なパターンでのテストが可能です。

## 使い方

[https://www.arcody.com/vocab/](https://www.arcody.com/vocab/)

こちらのサイトにアクセスすれば誰でも利用できます。詳しい説明はサイト内をご覧ください。

## コード仕様

### ファイル構成

- `index.html` : トップページ
- `favicon.ico` : favicon(サイトのアイコン)
- `.gitignore` : git (バージョン管理システム) 除外ファイル
- `eslint.config.mjs` : ESLint(Javascriptのコード検証ソフト)設定ファイル
- `images` : サイト内で使用する画像を格納するフォルダ
  - `icons` : apple-touch-iconなどサイトアイコンを格納
  - `symbols` : 矢印やサウンドなどのアイコンを格納
  - `thumbnail` : サムネイル画像を格納
- `css` : CSSファイルを格納。詳細は`css.md`を参照。
  - `base.css` : 各ページの大元になるCSSファイル。CSSリセット等。
  - `color-setting.css`: ページで使う色を変数として定義。
  - `layout.css` : headerなど主要レイアウト・配置を定義(flexなどをここで設定)。
  - `module.css` : 各パーツの見た目を設定(余白もここで設定)
  - `state.css` : javascriptやhoverなど、細かい状態のスタイルを定義。
  - `theme-〇〇.css` : 各ページのテーマ(配色)を定義。
- `js` : Javascriptファイルを格納
- `library` : アプリ内で使用する外部のライブラリを格納
  - `jquery-3.7.1.min.js` : jQuery
- `docs` : 仕様書等、ドキュメントを格納

### CSS

SMACSS ([https://smacss.com/ja/](https://smacss.com/ja/)) に準拠して設計。細かいルールは`css.md`を参照。

### Javascript

使用ライブラリはjQueryのみ。

## ライセンス

このプロジェクトは、Apache License 2.0 ライセンスの下でライセンスされています。
