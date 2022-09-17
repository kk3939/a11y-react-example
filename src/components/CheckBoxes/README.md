# CheckBoxes
This software or document includes material copied from or derived from [Checkbox Example | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html). Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).

## Point
refで取得した値に対して、useEffect内でaddEventListenerを発火させています。これによりキー操作が可能になります。

```tsx
useEffect(() => {
    const element = checkboxRef.current;
    element && element.addEventListener("keydown", checkFunctionSpaceKey);
    return () => {
      element && element.removeEventListener("keydown", checkFunctionSpaceKey);
    };
  }, [checkFunctionSpaceKey]);
```

加えて、role=checkboxとaria-checkedを設定して、checkBoxと認識させています。
https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role

