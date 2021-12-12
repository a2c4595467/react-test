const ColorfulMessage2 = (props) => {
  // 分割代入
  const { color, children } = props;

  const contentStyle1 = {
    //color: props.color,
    color: color,
    fontSize: "18px"
  };

  // 呼び出し元での書き方によっては、props.childrenを使う
  return (
    // <>
    //   <p style={contentStyle1}>{props.children}</p>
    // </>
    //
    // 分割代入した例
    <>
      <p style={contentStyle1}>{children}</p>
    </>
  );
};

// エクスポート
export default ColorfulMessage2;
