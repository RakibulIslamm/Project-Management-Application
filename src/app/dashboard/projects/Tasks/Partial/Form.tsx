"use client";
import { v4 as uuidv4 } from "uuid";
import { Task } from "@/interface/task";
import { User } from "@/interface/user";
import { useState } from "react";

type Props = {
  members: User[];
  projectId: string;
  task?: Task;
  mode: string;
};

const Form = ({ members, projectId, mode }: Props) => {
  const [task, setTask] = useState<Task>({
    id: uuidv4(),
    projectId: projectId,
    title: "",
    description: "",
    deadline: new Date().getTime(),
    assignedMembers: [],
    status: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleAssignedMembersChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedMembers = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setTask((prevTask) => ({
      ...prevTask,
      assignedMembers: selectedMembers,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit(task);
    console.log(task);
    setTask({
      id: "",
      projectId: "",
      title: "",
      description: "",
      deadline: new Date().getTime(),
      assignedMembers: [],
      status: "",
    });
  };

  return (
    <div className="w-full p-6">
      <h2 className="py-3 text-xl font-bold">Add a new task</h2>
      <form onSubmit={handleSubmit} className="w-full space-y-3">
        {/* Part 1 */}
        <div className="w-full flex justify-between items-start gap-3">
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              value={task.title}
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              required
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="deadline"
            >
              Deadline
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              id="deadline"
              name="deadline"
              value={new Date(task.deadline).toISOString().split("T")[0]}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            id="description"
            name="description"
            value={task.description}
            placeholder="Description..."
          />
        </div>

        <div className="w-full flex justify-between items-start gap-3">
          <div className="w-6/12">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="assignedMembers"
            >
              Assigned Members
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="assignedMembers"
              name="assignedMembers"
              value={task.assignedMembers}
              onChange={handleAssignedMembersChange}
              multiple
            >
              {members.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-6/12">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              name="status"
              value={task.status}
              onChange={handleChange}
            >
              <option value="to do">To Do</option>
              <option value="in progress">In Progress</option>
              <option value="complete">Complete</option>
            </select>
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          // disabled={processing || mode == "view"}
          type="submit"
        >
          {mode == "create" && "Submit"}
          {mode == "edit" && "Update"}
        </button>
      </form>
    </div>
  );
};

export default Form;
