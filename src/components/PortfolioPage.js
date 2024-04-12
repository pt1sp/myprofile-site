import React from 'react'
import myprofileImage from "../Images/myprofile.png";
import matchingImage1 from "../Images/matching1.png";
import matchingImage2 from "../Images/matching2.png";
import matchingImage3 from "../Images/matching3.png";
import rankingImage2 from "../Images/ranking2.png";

const PortfolioPage = () => {
  return <div className="container">
    <h1>作品一覧・説明</h1>
    <div className="top"></div>
    <ul>
    <li><a href="#myprofile-site">マイプロフィールサイト</a></li>
    <li><a href="#matching-system">マッチングシステムサイト</a></li>
    <li><a href="#spla3_ranking">ランキングサイト</a></li>
    </ul>

    <div id="myprofile-site"></div>
    <br></br><br></br><br></br><br></br>
    <h2 className="my-3">マイプロフィールサイト</h2>
    <h4 className="my-3">このサイトを作ろうと思ったきっかけ</h4>
    <p className="text-muted">YoutubeでReactというものを初めて知り勉強した後、何か作ってみようと思い、このサイトを作りました。</p>
    <h4 className="my-3">サイト説明</h4>
    <p className="text-muted">ホームページと解説ページとブログページの３ページ構成です。ホームページでは自分が作った作品について、学んでいるスキルについて、これまでの主な人生経験についてを掲載しています。解説ページでは作った作品それぞれの説明が書かれています。ブログページではwebアプリを作り始めたときの進捗を日記みたいな感じで掲載しています。</p>
    <img className="ViewImage" src={myprofileImage} />
    <h4 className="my-3">技術説明</h4>
    <p className="text-muted">主な使用言語はJavascriptです。Bootstrapを使ってアイコンやデザインを表示しています。コンポーネント技術を使ってHeader部分と本体部分などのファイルを分けています。AWS Amplifyを使ってGithub経由でデプロイしています。とても簡単にデプロイできて感動しました。</p>
   
   <div id="matching-system"></div>
   <br></br><br></br><br></br><br></br>
    <h2 className="my-3">マッチングシステムサイト</h2>
    <h4 className="my-3">このサイトを作ろうと思ったきっかけ</h4>
    <p className="text-muted">趣味で遊んでいるゲームで、対抗戦というサッカーで例えると練習試合のようなものをやる時に練習相手をXで募集したり探したりするのを、専用のサイトでやってみたいと思ったので作ってみました。</p>
    <h4 className="my-3">サイト説明</h4>
    <p className="text-muted">主に申し込みページ、募集ページ、ログイン新規登録ページの３つでできています。練習試合の相手を募集したい人は条件を選択して募集をします。募集を見て申し込みをしたい人は募集一覧から申し込みたい募集を選んで申し込みをします。</p>
    <img className="ViewImage" src={matchingImage1} />
    <p className="text-muted">申し込みページでは、募集されている練習試合の一覧を見ることができます。その練習試合の日付、時間帯、ルール画見れるようになっていて、詳細ボタンを押すとその募集のさらに詳しい情報が見れるようになっています。</p>
    <img className="ViewImage" src={matchingImage2} />
    <p className="text-muted">募集ページではプルダウンから条件を選択したり、備考欄に記入したりできます。記入し終わったら確認画面へボタンを押して確認画面に遷移します。その確認画面で、確定ボタンを押すと募集が完了します。</p>
    <img className="ViewImage" src={matchingImage3} />
    <p className="text-muted">ログイン新規登録画面では、アカウントの新規登録とログインができます。パスワードは入力してもデフォルトでは非表示になっていて見れません。右側にある目のボタンを押すと表示非表示を切り替えられます。</p>
    <h4 className="my-3">技術説明</h4>
    <p className="text-muted">主な使用言語はPHPです。XAMPPのApacheを使って実行しています。データベースはMySQLを使っています。セッション機能を使ってページを遷移した後でも入力されたデータが表示されるようにしています。募集一覧から選んで詳細を表示するときには、詳細ボタンが押されたときにIDを見てどの募集を表示すればいいかを判断しています。募集ページの日付のプルダウン要素は現在日から１か月後までの３０個の選択肢を動的に生成しています。入力必須のプルダウンが未入力のまま確認画面へ行こうとすると入力されていない箇所が赤く囲まれて入力してくださいと警告が出てきます。</p>
   
   <div id="spla3_ranking"> </div>
   <br></br><br></br><br></br><br></br>
    <h2 className="my-3">ランキングサイト</h2>
    <h4 className="my-3">このサイトを作ろうと思ったきっかけ</h4>
    <p className="text-muted">趣味で遊んでいるゲームで個人成績のランキングがあるんですが、それを確認するためには専用のスマホアプリをインストールして、ログインしないと見れません。ここまでは1度だけやればいいんですが、アプリを起動する時間とランキングを確認するための場所に移動するまでのロード時間が若干長かったり、ランキングの並び替えや絞り込みの機能がもっとこんなのがあればいいなと感じることがあったのでそれだけに特化したためにロード時間が短く、会ったらいいなと思う並び替えや絞り込みができるもの作りました。</p>
    <h4 className="my-3">サイト説明</h4>
    <p className="text-muted">このサイトはスプラトゥーン３というゲームにあるランキングの表示ができます。左側にあるボタンから見たい条件のランキングを選んで決定ボタンを押すとその条件のランキングが表示されます。</p>
    <img className="ViewImage" src={rankingImage2} />
    <p className="text-muted">プログラミングを勉強し始めて初めて作ったサイトがこれでした。何も知らなかったので、デザインやコードなどすべてがぐちゃぐちゃになっています。</p>
    <h4 className="my-3">技術説明</h4>
    <p className="text-muted">主にPHPを使用しています。今でもあまり理解してませんが、fetchAPIというものを使って条件に合ったファイルに選択された情報を送っています。シーズンが６個、ルールが４個、武器が指定なしと指定ありの２個あります。その組み合わせすべてのファイルがあり、決定ボタンを押したら選択された条件のファイルに飛んでクエリを実行します。今見たらどう考えてももっといいやり方があると思います。このサイトを作って一番学んだと思ったことはSQL文の作り方です。データベースのテーブルにすべてのデータがあって、条件に合ったデータを抽出したあとにその中でパワーというカラムの数値順に並び替えた後、１番目に順位というカラムを追加して上から順に順位を割り付けるという複雑なSQL文を実行しています。データベースにランキングのデータを追加する方法を探したときに、画像認識しか方法がないとわかって、いろいろ試したけど、どの手段も手作業のほうが早そうだったので、手作業でやることにしました。しかしデータの量がとんでもないし、月１程度でデータが増えていくので、データ入力はあきらめています。</p>
    <a href="#top">トップへ</a>
  </div>
}

export default PortfolioPage