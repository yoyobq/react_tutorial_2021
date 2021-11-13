function Item({ name, isPacked = false }) {
  // 条件渲染，三目运算符示例
  // return (
  //   <li className="item">
  //     { name + (isPacked ? ' ✔' : '') }
  //   </li>
  // )

  // 条件渲染，if / else 示例
  // if (isPacked) {
  //   return <li className="item"> {name} ✔</li>;
  // }

  // return <li className="item"> {name}</li>;

  // 条件渲染，短路运算示例
  // return (
  //   <li className="item">
  //     {name} {isPacked && '✔'}
  // </li>
  // )

  // 条件渲染，隐藏已完成项目示例
  // if (isPacked) {
  //   return null;
  // }

  // return <li className="item"> {name}</li>;

  // 条件渲染，根据条件加上删除线
  // return (
  //   <li className="item">
  //     {isPacked ? (
  //       <del>
  //         {name + ' ✔'}
  //       </del>
  //     ) : (
  //       name
  //     )}
  //   </li>
  // );

  // 把字符串拼接写入变量
    let itemContent = name;
    if (isPacked) {
      itemContent = name + " ✔";
    }
    return (
      <li className="item">
        {itemContent}
      </li>
    );

}

export default Item;