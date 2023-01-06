# CheckBoxes
This software or document includes material copied from or derived from [Checkbox Example | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html). Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).

## Point
addEventListener is triggered to ref value in useEffect. This enables us to operate key from program.

```tsx
useEffect(() => {
    const element = checkboxRef.current;
    element && element.addEventListener("keydown", checkFunctionSpaceKey);
    return () => {
      element && element.removeEventListener("keydown", checkFunctionSpaceKey);
    };
  }, [checkFunctionSpaceKey]);
```

In addition, specify checkbox by `role=checkbox` and `aria-checked`.
https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role

