# Alert
This software or document includes material copied from or derived from [Alert Example | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html). Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).

## Point
Screen reader read immediately if the element has `role="alert"`. `role="alert"` is as same as setting of `aria-live="assertive"` and `aria-atomic="true"`.

- aria-live
  - When updated, you can specify timing of notice to user.
  - available value
    - off：no notice when updated
    - polite：notice if current reading finished
    - assertive：notice immediately.
- aria-atomic
  - When updated, notice whether only where updated or whole block.
  - boolean
