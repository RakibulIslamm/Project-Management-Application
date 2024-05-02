import AntModal from "@/app/components/Modal";
import React from "react";
import Form from "./Form";
import { User } from "@/interface/user";

const EditTask = ({
  projectId,
  teamMembers,
}: {
  projectId: string;
  teamMembers: User[];
}) => {
  return (
    <AntModal>
      <Form projectId={projectId as string} members={teamMembers as User[]} />
    </AntModal>
  );
};

export default EditTask;
