# Accordion
This software or document includes material copied from or derived from [Accordion Example | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html). Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).

## Point
Declare the state in call side.

```tsx
const [openSection, setOpenSection] = useState<string[]>([]);
```

This state stores section's id, and then it grantees a11y of the component.

In action header, if aria-expanded is not connected to aria-controls, it don't works fine probably. Also, function of open works fine to set `!openSection.includes(id)}` to hidden attribute.

