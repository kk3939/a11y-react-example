# ToggleButton
This software or document includes material copied from or derived from [Button Examples | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/example-index/button/button.html). Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).


## Point
If specify `role=button`, you can notice that this element is not div but button to screen reader.

https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/button_role

However, you should add a key operation to activate/deactivate the button with Enter and space.

```tsx
const EnterAndSpaceFunc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.code === "Space") {
        setOn(!on);
      }
    },
    [on, setOn]
  );

  useEffect(() => {
    const element = buttonRef.current;
    element && element.addEventListener("keydown", EnterAndSpaceFunc);
    return () => {
      element && element.removeEventListener("keydown", EnterAndSpaceFunc);
    };
  }, [EnterAndSpaceFunc]);

```


※You designate toggleButton with aria-pressed and tabindex to receive a focus. Button tag contain these attribute, so use button tag unless you have clear reason.
