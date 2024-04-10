import React from 'react'
import mysqlImage from "../Images/mysql.jpg";
import jsImage from "../Images/js.png";
import phpImage from "../Images/php.jpg";
import profileImage from "../Images/me.jpg";
import winImage from "../Images/win kinki.jpg";
import sportsImage from "../Images/sports.png";
import bokiImage from "../Images/boki.jpg";
import programImage from "../Images/program.jpg";
import engineerImage from "../Images/engineer.png";

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>横山龍之介</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        横山龍之介です。普段はwebエンジニア勉強かゲームをしています。遊んでいるゲームでこうなったらいいなと思うことがあったので、
        PHPとJavaScriptとMySQLを使ってそれが実現できるサイトを作りました。
      </p>

      <section className="page-section" id="services">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">ポートフォリオ</h2>
            <h3 className="section-subheading text-muted mb-5">
              私が作った作品です
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fa-solid fa-ranking-star fa-stack-1x"></i>
              </span>
              <h4 className="my-3">ランキングサイト</h4>
              <p className="text-muted">
                普段遊んでいたゲームでのランキングの並び替えや絞り込みが思うようにできなかったり読み込みが遅かったので、自分の思うようにできるサイトを作りました。初めてのサイトかつYouTube等で作り方があるものでもありません。
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fa-solid fa-blog fa-stack-1x"></i>
              </span>
              <h4 className="my-3">マッチングシステム</h4>
              <p className="text-muted">
                これも普段遊んでいるゲームでのこんなものがあったらいいなと思ったため作成したものです。サッカーで言うなら、練習試合にあたることをゲームでする相手を、日付やルールなどを設定して募集することができるものです。
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">タイピングゲーム</h4>
              <p className="text-muted">
                JavaScriptの練習として寿司打のようなタイピングゲームを作りました。YouTubeで見た動画を参考にして作った後に自分でアレンジを加えました。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div className="text-center">
          <h1 className="title">スキル</h1>
          <div className="row text-center">
            <div className="col-md-4 services">
              <img src={mysqlImage} />
              <h4>MySQL</h4>
              <p>MySQLがつかえます</p>
            </div>
            <div className="col-md-4 services">
              <img src={jsImage} />
              <h4>JavaScript</h4>
              <p>JavaScriptがつかえます</p>
            </div>
            <div className="col-md-4 services">
              <img src={phpImage} />
              <h4>PHP</h4>
              <p>PHPがつかえます</p>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">経歴</h2>
                    <h3 class="section-subheading text-muted">私の人生の要点をまとめました</h3>
                </div>
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={sportsImage} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2014-2019</h4>
                                <h4 class="subheading">小中学校</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">小学校の部活で長距離走とドッヂボール、習い事でサッカーと水泳をやっていました。中学校では部活でバスケをやっていました。</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={bokiImage} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2020-2022</h4>
                                <h4 class="subheading">高校</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">総合科の高校に進学し商業化で簿記を学びました。他には商品開発やマーケティングやエクセルのことも学びました。</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={programImage} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2023.4</h4>
                                <h4 class="subheading">専門学校へ進学</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">進路を簿記とプログラミングで迷った結果プログラミングの方が楽しそうだったのでIT科のある専門学校に進学しました。</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={winImage} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2023.8</h4>
                                <h4 class="subheading">ゲーム大会で優勝</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">趣味でやっているゲームの大会で優勝しました。年に１回しかない大会なのでとてもうれしかったです。</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={engineerImage} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2024.2</h4>
                                <h4 class="subheading">エンジニア</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">2024年の2月に趣味で繋がったエンジニアの方と就職について話したことをきっかけにこれから何をすればいいのかが明確に想像できました。そのおかげでエンジニアについて勉強することが楽しくなっています。</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>現在
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default HomePage