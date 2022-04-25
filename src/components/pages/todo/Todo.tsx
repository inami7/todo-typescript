//mapを使うときはkeyをつける
//関数に引数を渡したい場合は() => アロー関数で新しく関数を生成する必要がある
//splice 何番目の要素からいくつ削除するか
import React, { useState } from "react";
import { InputTodo } from "../../InputTodo";
import { IncompleteTodos } from "../../IncompleteTodos";
import { CompleteTodos } from "../../CompleteTodos";

export const Todo = () => {
  const [todoText, settodoText] = useState<string>("");
  const [incompleteTodos, setincompleteTodos] = useState<string[]>([]);
  const [completeTodos, setcompleteTodos] = useState<string[]>([]);

  console.log(incompleteTodos);
  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) =>
    settodoText(event.target.value);

  //入力したものを未完了リストに入れる
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    settodoText("");
  };
  //未完了リストの削除
  const onClickDelete = (index: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); //削除
    setincompleteTodos(newTodos);
    console.log(index);
  };
  //未完了リストの完了
  const onClickComplete = (index: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1); //削除
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setincompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };
  //完了リストの戻す
  const onClickBack = (index: number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1); //削除
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setincompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };

  return (
    <>
      {/* ================================== */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるのは５個までだ</p>
      )}

      {/* ================================== */}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/* ================================== */}
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
