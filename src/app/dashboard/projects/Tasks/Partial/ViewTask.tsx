import AntModal from "@/app/components/Modal";
import { Task } from "@/interface/task";
import { User } from "@/interface/user";
import { CalendarFilled } from "@ant-design/icons";

const ViewTask = ({
  task,
  teamMembers,
}: {
  task: Task;
  teamMembers: User[];
}) => {
  return (
    <AntModal>
      <div className="w-full h-full">
        <h4 className="text-lg px-4 py-1 border rounded font-bold w-11/12 break-words">
          {task?.title}
        </h4>
        <div className="py-4">
          <p className="uppercase text-lg font-semibold">Task Description</p>
          <p className="">{task?.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <CalendarFilled className="text-xl text-gray-500" />
          {new Date(task?.deadline as number).toDateString()}
        </div>
        <div className="py-4">
          <p className="uppercase text-lg font-semibold">Team members</p>
          {teamMembers
            .filter((user) => task?.assignedMembers.includes(user.id))
            .map((user, idx) => (
              <p key={idx}>{user.name}</p>
            ))}
        </div>
        <p
          className={`px-5 py-2 border ${
            task?.status.toLowerCase() === "pending"
              ? " bg-slate-200"
              : task?.status.toLowerCase() === "in progress"
              ? "bg-yellow-200"
              : "bg-green-300"
          } rounded-lg inline-block`}
        >
          {task?.status}
        </p>
      </div>
    </AntModal>
  );
};

export default ViewTask;
