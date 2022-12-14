# AlertDialog
This software or document includes material copied from or derived from [Alert Dialog Example | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/alertdialog.html). Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).

## point
### focus
To focus only dialog element, create dummy component and set ref to it.

※If you want to know the detail implementation, please see the component file.

```tsx
  const openTriggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogWrapperRef = useRef<HTMLDivElement | null>(null);
  const firstButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastButtonRef = useRef<HTMLButtonElement | null>(null);

  const escKeyHandler = useCallback(
    (event: KeyboardEvent) => {
      //  "Esc" IE/Edge specific value
      if (event.key === "Escape") {
        setOpen(false);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    const body = document.body;
    const dialogWrapperRefCurrent = dialogWrapperRef.current;
    // Escの処理追加
    dialogWrapperRefCurrent &&
      dialogWrapperRefCurrent.addEventListener("keydown", escKeyHandler);

    if (open) {
      body.style.overflow = "hidden";
      openTriggerRef.current = document.activeElement as HTMLButtonElement;
      const firstButtonRefCurrent = firstButtonRef.current;
      firstButtonRefCurrent && firstButtonRefCurrent.focus();
    } else {
      body.style.overflow = "";
      openTriggerRef && openTriggerRef.current?.focus();
    }
    return () => {
      dialogWrapperRefCurrent &&
        dialogWrapperRefCurrent.removeEventListener("keydown", escKeyHandler);
    };
  }, [escKeyHandler, open]);
```

### aria attribute
- role="alertdialog"
  - https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/alertdialog_role
- aria-modal="true"
  - you can notice that the element is modal to screen reader.
  - https://accessible-usable.net/2021/06/entry_210606.html
- aria-labelledby="dialog_label"
  - label of modal
- aria-describedby="dialog_desc"
  - detail of modal
