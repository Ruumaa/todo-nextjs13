"use client";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from ".";
import { addTodo } from "../api/todo";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [important, setImportant] = useState("");
  const router = useRouter();

  const handleSubmitTodo = async (e) => {
    e.preventDefault();
    const payload = {
      id: uuidv4(),
      title,
      description,
      important,
    };
    await addTodo(payload);
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add Task <AiOutlinePlus size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitTodo}>
          <h1 className="text-center text-4xl font-semibold mb-8 mt-3">
            Add Your Todo
          </h1>
          <div className="text-left w-full form-control gap-2 modal-action">
            {/* <label></label>
            <label>Id</label>
            <input
              type="number"
              className="input input-bordered"
              value={id}
              onChange={(e) => setId(e.target.value)}
            /> */}
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
    </div>
  );
};

export default AddTask;
