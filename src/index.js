// React17 では
// JSXを使用するだけの場合、React の import は必須ではなくなった。
//import React from 'react';

// HTML にコンポーネントを反映させる必要があるので
// ReactDOM をインポート
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

/* App.jsx へ移動
const App = () => {
  // タグをクオートで囲まない。
  // JSの中でHTMLタグを書いていくのを「JSX記法という」
  return (
    // JSXは１つのタグの中に記述する必要がある。
    // しかしh1とpを出力するだけに不必要なdivを作ってしまっている
    // <div>
    // <h1>ほえほえ</h1>
    // <p>ここに文章を書きます</p>
    // </div>
    //
    // フラグメントを使うと、不要なdivを書く必要はない。
    // <React.Fragment>
    //   <h1>ほえほえ</h1>
    //   <p>ここに文章を書きます</p>
    // </React.Fragment>
    //
    // さらに、React.Fragment も省略が可能
    <>
      <h1>ほえほえ</h1>
      <p>ここに文章を書きます</p>
    </>
  );
};
*/
// HTML へ反映
ReactDom.render(
  // 上記Appをコンポーネントとしてレンダリングする
  <App />,
  // どこに反映するか
  document.getElementById("root")
);
