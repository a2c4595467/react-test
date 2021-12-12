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

// ステート
import { useEffect, useState } from "react";

// Props
import ColorfulMessage from "./components/ColorfulMessage";
import ColorfulMessage2 from "./components/ColorfulMessage2";

// はじめ index.js 側で記述した App コンポーネントを移設。
// 波括弧{} はJavaScriptと解釈される
// {}の中に{}を書くとスタイルと解釈される。
const App = () => {
  // ボタンのアクション用関数
  const onClickButton = () => alert("押された！");

  // ---------------------------------
  // ボタンクリックごとに数字をカウントアップ
  // ---------------------------------
  // 第１ ... ステートの値を格納する変数名
  // 第２ ... ステートを更新する関数名
  const [num, setNum] = useState(0);
  // カウントアップする
  const onClickCountUpButton = () => {
    setNum(num + 1);
  };

  // ---------------------------------
  // 顔文字の表示/非表示
  // ---------------------------------
  // 第１ ... ステートの値を格納する変数名
  // 第２ ... ステートを更新する関数名
  const [isShow, showFace] = useState(true);
  const onClickShowFaceButton = () => {
    showFace(!isShow);
  };

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

  // useEffectの第2引数に配列でステートを渡すと、コンポーネントの中で
  // そのステートが変化した場合に実行できるようにする
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // isShowがflaseの場合に顔表示(showFace(true))を実行する
        // if (!isShow ) {
        //   showFace(true);
        // }
        // 上記と同じ意味になる記述
        isShow || showFace(true);
      } else {
        // isShowがtrueの場合に顔非表示(showFace(false))にしたい
        // if (isShow) {
        //   showFace(false);
        // }
        // 上記と同じ意味になる記述
        isShow && showFace(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  // 記述する処理によっては、useEffectで使用する変数を第2引数の配列の中に
  // すべて記述しろというESlintのワーニングが表示される。
  // しかし上記は num ステートのみ監視させたいので、numだけ記述する。
  // 上記のように "eslint" で始まるコメント行を書くと、
  // "次の行でeslintワーニングを無視する"という事ができる

  return (
    <>
      <h1 style={{ color: "red" }}>ほえほえ</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <p style={contentStyle2}>元気です！</p>
      <ColorfulMessage2 color="green">元気ですよ！</ColorfulMessage2>
      <button onClick={onClickButton}>ボタン</button>
      <button onClick={onClickCountUpButton}>カウントアップ</button>
      <p>{num}</p>
      <br />
      <button onClick={onClickShowFaceButton}>顔On/Off</button>
      {isShow && <p>( ﾟДﾟ)Σ</p>}
      <p>&nbsp;</p>
    </>
  );
};

// 他のファイルでも利用できるようにする
export default App;
