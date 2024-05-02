import AntModal from "@/app/components/Modal";
import { Task } from "@/interface/task";
import { User } from "@/interface/user";
import useTaskStore from "@/store/TaskStore/taskStore";
import useCommonStore from "@/store/commonStore";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const AddMembers = ({
  task,
  teamMembers,
}: {
  task: Task;
  teamMembers: User[];
}) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const { changeTaskStatus, assignMemberToTask, removeTask } = useTaskStore();
  const { toggleModalOpen } = useCommonStore();
  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    const user = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedUsers([...selectedUsers, user.id]);
    } else {
      setSelectedUsers(
        selectedUsers.filter((selectedUser) => selectedUser !== user.id)
      );
    }
  };

  const handleMemberSubmit = (e: FormEvent) => {
    e.preventDefault();
    assignMemberToTask(task?.id as string, selectedUsers);
    toggleModalOpen("close", null);
    toast.success("Members added successfully");
    setSelectedUsers([]);
  };

  return (
    <AntModal>
      <div className="w-full h-full">
        <form onSubmit={handleMemberSubmit} className="flex flex-col gap-3">
          {teamMembers
            .filter((user) => !task?.assignedMembers.includes(user.id))
            .map((u, idx) => (
              <Checkbox
                value={u}
                key={idx}
                onChange={handleCheckboxChange}
                checked={selectedUsers.includes(u.id)}
              >
                {u.name}
              </Checkbox>
            ))}
          <button type="submit" className="px-4 py-1 border rounded">
            Add Members
          </button>
        </form>
      </div>
    </AntModal>
  );
};

export default AddMembers;
