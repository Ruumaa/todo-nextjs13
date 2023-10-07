"use client";
import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import { deleteTodo, editTodo } from "../api/todo";

const Tasks = ({ task, index }) => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  // const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [important, setImportant] = useState("");
  const router = useRouter();

  const handleEditTodo = async (e) => {
    e.preventDefault();
    const payload = {
      id: task.id,
      title,
      description,
      important,
    };
    await editTodo(payload);
    setEditModal (false);
    router.refresh();
  };


  const handleDelete = async (id) =>{
    console.log(id)
    await deleteTodo(id)
    setDeleteModal(false)
    router.refresh()
  }
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>{index + 1}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.important}</td>
      <td className="flex gap-4">
        <FiEdit
          size={25}
          className="cursor-pointer text-blue-500"
          onClick={() => setEditModal(true)}
        />
        <Modal modalOpen={editModal} setModalOpen={setEditModal}>
          <form onSubmit={handleEditTodo}>
            <h1 className="text-center text-4xl font-semibold mb-8 mt-3">
              Edit Your Todo
            </h1>
            <div className="text-left w-full form-control gap-2 modal-action">
              <label></label>
              <label>Title</label>
              <input
                type="text"
                placeholder="Praying..."
                className="input input-bordered"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Description</label>
              <input
                type="text"
                placeholder="Praying 5 times a day..."
                className="input input-bordered"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label>Important</label>
              <input
                type="text"
                placeholder="Of course!!"
                className="input input-bordered"
                value={important}
                onChange={(e) => setImportant(e.target.value)}
              />
              <button type="submit" className="btn btn-primary mt-10  mb-4">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2 size={25} className="cursor-pointer text-red-500" onClick={() => setDeleteModal(true)} />
        <Modal modalOpen={deleteModal} setModalOpen={setDeleteModal} >
          <h3 className="text-lg">Are you sure delete this?</h3>
          <div className="modal-action">
            <button onClick={()=> handleDelete(task.id)} className="btn">Yes</button>
            <button className="btn" onClick={() => setDeleteModal(false)}>No</button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Tasks;
