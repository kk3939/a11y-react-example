# Breadcrumb
以下のページを参考にしました。

https://www.w3.org/WAI/ARIA/apg/example-index/breadcrumb/index.html

## point
### CSS
CSSは全てインラインブロック要素にして余白などの調整をしやすくしています。また、疑似要素を作成して、border-rightでスラッシュを表現しています。

### aria attribute
- aria-label="Breadcrumb"
  - パンクずリストをナビゲーションに対して表現
- aria-current="page"
  - 今のページを指定
