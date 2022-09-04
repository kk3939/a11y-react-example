# Alert
<<<<<<< HEAD
以下のページを参考にしました。

https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html

## Point
`role="alert"`要素はスクリーンリーダーが即座に読み上げを開始します。`role="alert"`は`aria-live="assertive"`と`aria-atomic="true"`を設定したときと同じ設定になります。

- aria-live
  - 更新された際にユーザーに通知させるタイミングを指定できます。
  - 設定できる値
    - off：更新されてもユーザーに通知しない。
    - polite：現在の読み上げの終了や入力終了後に通知する。
    - assertive：即座に通知する。
- aria-atomic
  - 更新の際に、更新箇所のみ通知するか変更箇所含むブロック全体を通知するかどうかを設定する。
  - 真偽値
=======
>>>>>>> d1094f9 (add: Alert component)
