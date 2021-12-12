// React のコンポーネントであることがわかるよう
// ファイルの拡張子は「jsx」にしておくと良い。

// React コンポーネント名は、必ず先頭を大文字から始めること。
// 例)
// App
// SomoComponent
//
// 悪い例
// app
// someComponent
//
// エラーにならないが非推奨
// Some_component
// Some_Component

import ColorfulMessage from "./components/ColorfulMessage";
import ColorfulMessage2 from "./components/ColorfulMessage2";

// はじめ index.js 側で記述した App コンポーネントを移設。
// 波括弧{} はJavaScriptと解釈される
// {}の中に{}を書くとスタイルと解釈される。
const App = () => {
  // ボタンのアクション用関数
  const onClickButton = () => alert("押された！");

  // CSS用にオブジェクトを作成
  // Components/ColurfulMessage.jsx へ移設
  // const contentStyle1 = {
  //   color: "blue",
  //   // 本来のCSSならハイフンで単語を区切るが、Reactではキャメルケースで記述する
  //   fontSize: "18px"
  // };
  const contentStyle2 = {
    color: "pink",
    // 本来のCSSならハイフンで単語を区切るが、Reactではキャメルケースで記述する
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>ほえほえ</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <p style={contentStyle2}>元気です！</p>
      <ColorfulMessage2 color="green">元気ですよ！</ColorfulMessage2>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルでも利用できるようにする
export default App;
