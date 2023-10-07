import { getAllTodos } from "../api/todo";
import Tasks from "./Tasks";
const Table = async () => {
  const tasks = await getAllTodos();
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table font-semibold table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Important</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <Tasks key={index} task={task} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
