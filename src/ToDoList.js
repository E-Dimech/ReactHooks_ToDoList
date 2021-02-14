// import React from "react";
// import ToDo from "./ToDo";

// function ToDoList({ toDoList, handleToggle }) {
//   return (
//     <div>
//       {toDoList.map((todo) => {
//         return <ToDo todo={todo} handleToggle={handleToggle} />;
//       })}
//     </div>
//   );
// }

// export default ToDoList;

import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
