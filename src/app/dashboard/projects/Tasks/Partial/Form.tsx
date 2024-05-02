"use client";
import { v4 as uuidv4 } from "uuid";
import { Task } from "@/interface/task";
import { User } from "@/interface/user";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import useTaskStore from "@/store/TaskStore/taskStore";
import toast from "react-hot-toast";
import useCommonStore from "@/store/commonStore";

type Props = {
  members: User[];
  projectId: string;
};

const Form = ({ members, projectId }: Props) => {
  const { addTask, editTask } = useTaskStore();
  const { mode, data } = useCommonStore();
  const { toggleModalOpen } = useCommonStore();
  const [task, setTask] = useState<Task>(
    data ?? {
      id: uuidv4(),
      projectId: projectId,
      title: "",
      description: "",
      deadline: new Date().getTime(),
      assignedMembers: [],
      status: "",
    }
  );

  const notAssignedMembers = members.filter(
    (member) => !data?.assignedMembers.includes(member.id)
  );

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
    // console.log(task);
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
      assignedMembers: data?.id
        ? [...data!.assignedMembers, ...selectedMembers]
        : selectedMembers,
    }));

    /* 
    const selectedMemberIds = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    const selectedMembers = members.filter((member) =>
      selectedMemberIds.includes(member.id)
    );

    setTask((prevTask) => ({
      ...prevTask,
      assignedMembers: selectedMembers,
    }));
    
    */
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mode == "create") {
      task.id = uuidv4();
      task.projectId = projectId;
      task.deadline = new Date(task.deadline).getTime();
      // console.log(task);
      addTask(task);
      // console.log(task);
      toast.success("Task added");
      toggleModalOpen("");
      setTask({
        id: "",
        projectId: "",
        title: "",
        description: "",
        deadline: new Date().getTime(),
        assignedMembers: [],
        status: "",
      });
    }
    if (mode == "edit") {
      editTask(task.id, task);
      toast.success("Task Updated successfully");
      toggleModalOpen("");
    }
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
              value={task?.title}
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
              required
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
            value={task?.description}
            placeholder="Description..."
            required
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
              value={task?.assignedMembers}
              onChange={handleAssignedMembersChange}
              multiple
            >
              {notAssignedMembers.map((member) => (
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
              onChange={handleChange}
              required
            >
              <option value="">Select status</option>
              <option
                selected={task?.status.toLowerCase() == "pending"}
                value="Pending"
              >
                To Do
              </option>
              <option
                selected={task?.status.toLowerCase() == "in progress"}
                value="in progress"
              >
                In Progress
              </option>
              <option
                selected={task?.status.toLowerCase() == "completed"}
                value="completed"
              >
                Completed
              </option>
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
