import { AddTask, Table } from "./components/index";


export default function Home() {


  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-10 flex flex-col">
        <h1 className="text-3xl font-bold mb-10">Todo List App</h1>
        <AddTask />
      </div>
      <Table />
    </main>
  );
}
