/* ===========================================================
   ATデザイン｜販売プレゼン  スライドデータ
   - 各スライド: eyebrow(章) / title / body(HTML) / foot / 台本4種
   - 番号(01/02..)は「順序がある」S3・S7のみで使用
   =========================================================== */

const IC = {
  talk:`<svg viewBox="0 0 24 24"><path d="M4 5h13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>`,
  glass:`<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/><circle cx="11" cy="10" r="3"/><path d="m14 13 2.5 2.5"/></svg>`,
  group:`<svg viewBox="0 0 24 24"><circle cx="8" cy="9" r="2.4"/><circle cx="16" cy="9" r="2.4"/><path d="M3.5 19c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4M12 19c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4"/></svg>`,
  scale:`<svg viewBox="0 0 24 24"><path d="M12 3v18M6 7l-3 6h6Zm12 0-3 6h6ZM4 21h16"/><path d="M3 13a3 3 0 0 0 6 0M15 13a3 3 0 0 0 6 0"/></svg>`,
  clip:`<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="1.5"/><path d="M9 4a3 3 0 0 1 6 0M8.5 10h7M8.5 14h7M8.5 18h4"/></svg>`,
  tree:`<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="4" rx="1"/><rect x="3" y="17" width="6" height="4" rx="1"/><rect x="15" y="17" width="6" height="4" rx="1"/><path d="M12 7v5M6 17v-3h12v3"/></svg>`,
  pen:`<svg viewBox="0 0 24 24"><rect x="3" y="5" width="14" height="11" rx="1.5"/><path d="M3 19h11"/><path d="m17 14 4-4 2 2-4 4-3 .5Z"/></svg>`,
  chart:`<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V5M16 20v-7M4 13l5-5 4 3 7-7M20 4h-4M20 4v4"/></svg>`,
  build:`<svg viewBox="0 0 24 24"><rect x="6" y="3" width="12" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/></svg>`,
  device:`<svg viewBox="0 0 24 24"><rect x="2" y="4" width="14" height="10" rx="1"/><path d="M2 17h14"/><rect x="16" y="9" width="6" height="11" rx="1.2"/></svg>`,
  cycle:`<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4M6 21v-4h4"/></svg>`,
  shield:`<svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  arrowR:`<svg viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"/></svg>`,
  check:`<svg viewBox="0 0 24 24"><path d="m4 12 5 5L20 6"/></svg>`,
};

window.SLIDES = [

/* 01 表紙 ---------------------------------------------------- */
{
  id:1, cover:true, eyebrow:"提案書",
  title:`専門性を、伝わる<span class="en">Web</span>に。`,
  body:`
    <div class="cover-sub">士業・クリニック・専門サービス・不動産向け｜Web活用のご提案</div>
    <div class="cover-lead">商談で説明している強みを、初見の取引先にもWebで伝わる状態へ。</div>
    <div class="cover-desc">ATデザインは、専門性・技術・事業内容を整理し、<br>商談前の理解を進めるWeb上の説明構造を設計します。</div>`,
  foot:null,
  first:"本日は、貴社の専門性・サービス内容を、初見の取引先にもWeb上で伝わる状態にするご提案です。",
  talk:"ポイントは、ホームページを作ること自体ではありません。商談で毎回説明している強みを、商談前に相手が理解できる状態へ整理することです。",
  point:"制作会社として売らず、『営業前理解を進める説明構造』として入る。主導権はこちらが握る。",
  ask:"貴社では、商談前に相手がサイトを見てから来るケースはありますか？"
},

/* 02 課題提起 ------------------------------------------------ */
{
  id:2, eyebrow:"現状",
  title:`こんな<em>お悩み</em>はありませんか`,
  body:`
    <div class="cards">
      <div class="card"><span class="ic">${IC.talk}</span><p>技術や対応範囲を、<br>毎回 口頭で説明している</p></div>
      <div class="card"><span class="ic">${IC.glass}</span><p>サイトを見ても、<br>強みが一瞬で伝わらない</p></div>
      <div class="card"><span class="ic">${IC.group}</span><p>紹介後・商談前の<br>理解が進みにくい</p></div>
      <div class="card"><span class="ic">${IC.scale}</span><p>価格や見た目で<br>比較されやすい</p></div>
    </div>`,
  foot:`その課題、<small>"情報不足"ではなく</small><br>"伝え方の設計不足" かもしれません。`,
  first:"技術やサービスを商談で丁寧に説明されている会社ほど、Web上ではその強みが伝わりきっていないことがあります。",
  talk:"これは情報量が足りないというより、何を・誰に・どう伝えるかの設計が足りない状態です。結果として、価格や見た目で比較されやすくなります。",
  point:"相手に自分ごと化させる入口。課題を断定しすぎず『かもしれません』で留める。",
  ask:"今のサイトを初めて見た方は、貴社の強みや対応範囲を一瞬で理解できる状態でしょうか？"
},

/* 03 課題構造 (順序) ---------------------------------------- */
{
  id:3, eyebrow:"課題構造",
  title:`なぜ<em>機会損失</em>が起きるのか`,
  body:`
    <div class="flow">
      <div class="step"><span class="num">1</span><p>営業担当が<br>強みを説明する</p><span class="arr">${IC.arrowR}</span></div>
      <div class="step"><span class="num">2</span><p>その内容がサイトに<br>整理されていない</p><span class="arr">${IC.arrowR}</span></div>
      <div class="step"><span class="num">3</span><p>初見の取引先に<br>商談前に伝わらない</p></div>
    </div>`,
  foot:`結果：理解不足のまま、比較される。`,
  first:"機会損失は、営業担当が説明できていないから起きるのではありません。むしろ商談では説明できていることが多いです。",
  talk:"問題は、その説明がサイトに整理されていないことです。紹介後や商談前にサイトを見た相手が、理解不足のまま比較検討に入ってしまいます。",
  point:"『営業力不足』ではなく『Web上の説明構造不足』と定義し直す。相手の営業を否定しない。",
  ask:"商談で毎回 補足している内容のうち、サイトに載っていない情報はありますか？"
},

/* 04 提供価値 ------------------------------------------------ */
{
  id:4, eyebrow:"提供価値",
  title:`ATデザインが<em>できること</em>`,
  body:`
    <div class="values">
      <div class="value"><div class="k">PHASE 01</div><div class="rule"></div><h3>整理する</h3><p>強み・対応範囲・実績を棚卸し</p></div>
      <div class="value"><div class="k">PHASE 02</div><div class="rule"></div><h3>伝える</h3><p>見た目と言葉で伝わる構成へ</p></div>
      <div class="value"><div class="k">PHASE 03</div><div class="rule"></div><h3>導く</h3><p>問い合わせ・資料請求・採用導線まで設計</p></div>
    </div>`,
  foot:`つくるのはホームページではなく、<br>商談前の理解を進める Web上の "説明構造"。`,
  first:"ATデザインでは、貴社の強みを整理し、伝わる構成にし、次の行動につながる導線まで設計します。",
  talk:"単にページを増やすのではなく、強み・対応範囲・実績を棚卸しして、誰に何を伝えるべきかを整理します。そのうえで、問い合わせや資料請求、採用導線までつなげます。",
  point:"『整理・伝達・導線』の3価値。制作物ではなく構造を売る、が差別化の核。",
  ask:"現状、問い合わせや相談につなげたいサービス・製品は、明確に整理されていますか？"
},

/* 05 実績ギャラリー (新設) ---------------------------------- */
{
  id:5, eyebrow:"実績", klass:"works",
  title:`<em class="en" style="font-style:normal">10年</em>、伝わるWebをつくってきました`,
  body:`
    <div class="work-grid">
      <div class="work"><img src="images/work1.png" alt="京都写真クラブ"><div class="cap"><span class="nm">京都写真クラブ 様</span><span class="ty">オウンドメディア</span></div></div>
      <div class="work"><img src="images/work2.png" alt="Sosuke Nakabo Design Office"><div class="cap"><span class="nm">Sosuke Nakabo Design Office 様</span><span class="ty">オウンドメディア</span></div></div>
      <div class="work"><img src="images/work3.png" alt="ティー・エヌ・ジャパン"><div class="cap"><span class="nm">株式会社ティー・エヌ・ジャパン 様</span><span class="ty">オウンドメディア</span></div></div>
      <div class="work"><img src="images/work4.png" alt="福嶋頼秀"><div class="cap"><span class="nm">音楽家 福嶋頼秀 様</span><span class="ty">ホームページ</span></div></div>
      <div class="work"><img src="images/work5.png" alt="BLENDER'S"><div class="cap"><span class="nm">株式会社BLENDER'S 様</span><span class="ty">LP制作</span></div></div>
      <div class="work"><img src="images/work6.png" alt="エスクラフト"><div class="cap"><span class="nm">株式会社エスクラフト 様</span><span class="ty">オウンドメディア</span></div></div>
    </div>`,
  foot:`<small>全国・デザイン10名体制。</small>業種を問わず "説明が要る事業" を伝わる形に。`,
  first:"ATデザインは、約10年にわたって幅広い業種のWebを手がけてきました。こちらは制作実績の一部です。",
  talk:"写真クラブやデザイン事務所、メーカー、音楽家、サービス業まで、オウンドメディア・コーポレートサイト・LPと、目的に合わせて制作しています。専門性が高く『説明が要る』事業を、伝わる形に整理してきた実績です。",
  point:"抽象的な業種タグではなく実物を見せて信頼を作る。『近い業種の事例は別途お持ちできる』で具体提案へつなぐ。",
  ask:"貴社と近い業種・規模の事例があれば、別途まとめてお持ちできます。特に気になる業種はありますか？"
},

/* 06 ターゲット (実績ベースに修正・序列) ------------------- */
{
  id:6, eyebrow:"対象",
  title:`<em>このような企業</em>に有効です`,
  body:`
    <div class="rank">
      <div class="rank-row a"><div class="badge">A</div><div class="tier">最優先</div><div class="desc">士業・クリニック・専門サービス</div></div>
      <div class="rank-row b"><div class="badge">B</div><div class="tier">次点</div><div class="desc">不動産・医療・教育・BtoB商材</div></div>
      <div class="rank-row c"><div class="badge">C</div><div class="tier">補完</div><div class="desc">地域事業・中小企業全般</div></div>
    </div>`,
  foot:`"説明が難しい事業" ほど、提案価値が高まります。`,
  first:"特に相性が良いのは、士業やクリニック、専門サービスのように、説明しないと価値が伝わりにくい事業です。",
  talk:"不動産や医療・教育、BtoB商材なども同様です。形のない専門性ほど、Web上での伝え方を整える価値が高くなります。これは先ほどお見せした実績業種とも重なります。",
  point:"製造業特化はやめ、実績業種に整合させた。『説明が難しいほど効く』という横串(業種非依存の論理)は維持。",
  ask:"貴社のサービスは、初見の方に説明なしで伝わりやすい内容でしょうか？"
},

/* 07 支援イメージ (順序) ------------------------------------ */
{
  id:7, eyebrow:"進め方",
  title:`<em>ご支援</em>イメージ`,
  body:`
    <div class="flow">
      <div class="step"><span class="num">1</span><p>現状整理</p><small>強み・課題・導線の確認</small><span class="arr">${IC.arrowR}</span></div>
      <div class="step"><span class="num">2</span><p>情報設計</p><small>何を、誰に、どう伝えるか</small><span class="arr">${IC.arrowR}</span></div>
      <div class="step"><span class="num">3</span><p>制作・改善</p><small>サイト・LP・構成の見直し</small><span class="arr">${IC.arrowR}</span></div>
      <div class="step"><span class="num">4</span><p>公開後運用</p><small>更新・改善・活用定着</small></div>
    </div>`,
  foot:`小さな改善から、全面刷新まで対応します。`,
  first:"進め方は、まず現状整理から始めます。いきなり全面リニューアルを前提にする必要はありません。",
  talk:"強み・課題・導線を確認し、何を誰にどう伝えるかを設計します。その後、必要に応じてサイト、LP、ページ構成の見直し、公開後の運用改善まで対応できます。",
  point:"小さく始められる安心感。『現状整理→情報設計→制作改善→運用』の段階で、心理的ハードルを下げる。",
  ask:"まず見直すなら、会社全体のサイトと、特定サービスのページ、どちらが優先になりそうでしょうか？"
},

/* 08 メニュー ------------------------------------------------ */
{
  id:8, eyebrow:"メニュー",
  title:`主な<em>制作・改善</em>メニュー`,
  body:`
    <div class="menu">
      <div class="m"><div class="ic">${IC.build}</div><div class="rule"></div><h3>コーポレートサイト</h3><p>企業理解・信用形成の土台づくり</p></div>
      <div class="m"><div class="ic">${IC.device}</div><div class="rule"></div><h3>サービス／LPページ</h3><p>商材ごとの訴求を明確に整理</p></div>
      <div class="m"><div class="ic">${IC.cycle}</div><div class="rule"></div><h3>運用改善・更新支援</h3><p>公開後の改善・更新・活用まで伴走</p></div>
    </div>
    <div class="cta-wrap"><span class="wp-badge">WordPress対応 — 納品後も貴社側で更新できます</span></div>`,
  foot:`必要な範囲から始められます。`,
  first:"メニューとしては、コーポレートサイト、サービスページやLP、公開後の運用改善・更新支援まで対応できます。",
  talk:"会社全体の信用形成を整える場合はコーポレートサイト、特定商材の訴求を明確にする場合はサービスページやLP、既存サイトを活かす場合は運用改善から始められます。",
  point:"相手の状況に合わせ提案範囲を可変に。WordPressで『自社更新できる』は維持コストの安心材料として補助訴求。",
  ask:"現時点では、全面刷新よりも一部改善から始める方が進めやすいでしょうか？"
},

/* 09 効果 ---------------------------------------------------- */
{
  id:9, eyebrow:"効果",
  title:`<em>導入後</em>に期待できること`,
  body:`
    <div class="checks">
      <div class="check"><span class="ck">${IC.check}</span><p>商談前の理解が進み、<b>初回説明の手間が減る</b></p></div>
      <div class="check"><span class="ck">${IC.check}</span><p>紹介後の<b>信用補完</b>になる</p></div>
      <div class="check"><span class="ck">${IC.check}</span><p>問い合わせ内容の<b>精度が上がる</b></p></div>
      <div class="check"><span class="ck">${IC.check}</span><p>そのまま<b>営業資料</b>としても使える</p></div>
    </div>`,
  foot:`<span style="font-size:1.25em">価格勝負から、理解力勝負へ。</span>`,
  first:"導入後に期待できるのは、商談前の理解が進むことです。これは営業効率や問い合わせの質にも影響します。",
  talk:"紹介後の信用補完になり、毎回の初回説明の手間が減り、問い合わせの精度が上がります。そのまま営業資料としても使えるため、価格ではなく理解で選ばれやすくなります。",
  point:"成果保証ではなく『期待効果』。先頭を『初回説明の手間が減る』と具体動作に落として、抽象論にしない。",
  ask:"問い合わせ前に、相手に理解しておいてほしい情報は何がありますか？"
},

/* 10 CTA (無料・低リスク強調) ------------------------------- */
{
  id:10, eyebrow:"ご提案",
  title:`まずは<em>現状サイトの整理</em>から`,
  body:`
    <div class="quote"><p>貴社が商談で説明している強み、<br>サイトにも載っていますか？</p></div>
    <div class="cta-desc">ATデザインは、専門性・技術・事業内容を、初見の取引先にも伝わるWebへ整理します。</div>
    <div class="cta-wrap"><span class="cta-free">無料相談 ／ 現状サイト診断 から<span class="yen">費用はかかりません</span></span></div>
    <div class="cta-close">専門性を、伝わるWebに。</div>`,
  foot:null,
  first:"最後に、まず確認したいのは、貴社が商談で説明している強みが、サイトにも載っているかです。",
  talk:"ATデザインでは、専門性・技術・事業内容を、初見の取引先にも伝わるWebへ整理します。まずは無料相談、または現状サイト診断からご提案できます。ここまでは費用はかかりません。",
  point:"CTA。金額は出さず、『次の一歩は無料・低リスク』だけ視覚的に強調してハードルを下げる。貴社表記で統一。",
  ask:"まずは現状サイトを拝見し、商談前に伝わりにくい箇所を整理する形で進めてもよろしいでしょうか？"
},

];
