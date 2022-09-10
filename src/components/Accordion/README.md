# Accordion
This software or document includes material copied from or derived from [Accordion Example | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html). Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).

## Point
コンポーネントの呼び出し元で、展開されているsectionのstateを宣言します。

```tsx
const [openSection, setOpenSection] = useState<string[]>([]);
```

このstateではsectionのIdの値が入るようになっていて、それをベースにa11yを担保するようなコンポーネントにします。

accordion headerでは、aria-expandedを`openSection.includes(ariaControls)`でaria-controlsがセクションと紐づいていないと正しく実装できません。accordion sectionでは、id属性を正しく設定しないと前述のようにセクションとの紐付けが機能しません。また、hidden属性を`!openSection.includes(id)}`とすることで非表示/表示が機能します。

