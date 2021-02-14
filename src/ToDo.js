// import React from "react";

// const ToDo = ({ todo, handleToggle }) => {
//   console.log(todo.id);
//   const handleClick = (e) => {
//     e.preventDefault();
//     handleToggle(e.currentTarget.todo.id);
//   };

//   return (
//     <div
//       id={todo.id}
//       key={todo.id + todo.task}
//       name="todo"
//       value={todo.id}
//       onClick={() => handleClick}
//       className={todo.complete ? "todo strike" : "todo"}
//     >
//       {todo.task}
//     </div>
//   );
// };

// export default ToDo;

import React from "react";

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      name="todo"
      value={todo.id}
      onClick={handleClick}
      className={todo.complete ? "todo strike" : "todo"}
    >
      {todo.task}
    </div>
  );
};

export default ToDo;
