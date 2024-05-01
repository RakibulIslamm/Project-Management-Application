import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Modal } from "antd";

type Props = {
  children: ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const AntModal = ({ children, isModalOpen, setIsModalOpen }: Props) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        {children}
      </Modal>
    </>
  );
};

export default AntModal;
