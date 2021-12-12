const ColorfulMessage = (props) => {
  // オブジェクトでpropsが渡ってくる
  //console.log(props);

  const contentStyle1 = {
    //color: "blue",
    color: props.color,
    // 本来のCSSならハイフンで単語を区切るが、Reactではキャメルケースで記述する
    fontSize: "18px"
  };

  return (
    // <>
    //   <p style={contentStyle1}>お元気ですか？</p>
    // </>
    // props を使った例
    <>
      <p style={contentStyle1}>{props.message}</p>
    </>
  );
};

// エクスポート
export default ColorfulMessage;
