import React, { FC } from "react";

type Propstype = {
  todoText: string;
  onChange: any;
  onClick: any;
  disabled: boolean;
};
export const InputTodo: FC<Propstype> = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
