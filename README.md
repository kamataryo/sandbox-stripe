# SANDBOX Stripe

## A Stripe API pattern

1. アプリの初期構築の際に Product と Plan (1:n) を作成する

1. プランは Archive できるので、価格改定の際に利用する

ex. [src/create-plan.ts](./src/create-plan.ts)

1. ユーザー作成の時に Customer を作成し、 ID をユーザーメタのテーブルに格納する

1. _optional_ ユーザー作成の際にカード情報も入力してもらってもよい

1.
