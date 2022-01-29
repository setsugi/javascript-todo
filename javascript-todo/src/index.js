//import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して初期化する
  const inpuText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //console.log(inpuText);

  createIncompleteList(inpuText);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-ul").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // div生成
  const div = document.createElement("div");
  div.className = "list-div";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // button（完了）タグの生成
  const completeButton = document.createElement("button");
  // completeButton.className = "list-button";
  completeButton.innerText = "完了";
  // console.log(completeButton);
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    // deleteFromIncompleteList(completeButton.parentNode.parentNode);
    // var listButton = document.getElementsByClassName("list-button");
    // console.log(listButton);
    // deleteFromIncompleteList(listButton.closest(".list-row"));
    // deleteFromIncompleteList(listButton.parentNode);
    deleteFromIncompleteList(completeButton.closest(".list-row"));

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //const addTarget = completeButton.closest(".list-row");

    // todo内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;
    //const text = addTarget.children[0].innerText[0];
    console.log(text);

    // div以下を初期化する
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-ul").removeChild(deleteTarget);

      // テキストの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-ul").appendChild(addTarget);
  });

  // button（削除）タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    // deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    const a = deleteButton.closest(".list-row");
    console.log(a);
    deleteFromIncompleteList(a);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  console.log(li);

  // 未完了リストに追加
  document.getElementById("incomplete-ul").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
