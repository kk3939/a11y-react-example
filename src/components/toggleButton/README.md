# ToggleButton
This software or document includes material copied from or derived from [Button Examples | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/example-index/button/button.html). Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).


## Point
`role=button`を指定することで、divなどでもボタンということをスクリーンリーダーに伝えられます。

https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/button_role

ただしその際には、Enterやspaceを使ってボタンをアクティブ、非アクティブにできる必要がある。

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

※tabIndexでフォーカスを受け取れる必要があるのに加えて、aria-pressedを使ってToggleButtonであることを明示べきです。また、buttonタグを使っていればそれはすぐにできるので、理由がない限りはbuttonタグを使うこと。
