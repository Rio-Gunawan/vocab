# CSS 仕様

このプロジェクトのCSSは、SMACSS ([https://smacss.com/ja/](https://smacss.com/ja/)) に準拠して設計しています。CSSは原則classを使用し、BEMに基づいて命名をしてます。

## 命名規則

- `layout.css`に記載があるものは`l-`から始まるclass名をつけています。
- `state.css`に記載があるものは`is-`から始まるclass名をつけています。
- `theme-〇〇.css`に記載があるものは`theme-`から始まるclass名をつけています。

- blockとelementはアンダースコア2つ(`__`)で区切っています。
- Elementとmodifierはハイフン2つ(`--`)で区切っています。
- block, element, modifierが複数単語になる場合、単語と単語の間はハイフン1つ(`ｰ`)で区切っています。

## クラス名それぞれの意味
