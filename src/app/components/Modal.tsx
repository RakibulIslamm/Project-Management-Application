import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Modal } from "antd";
import useCommonStore from "@/store/commonStore";

type Props = {
  children: ReactNode;
};

const AntModal = ({ children }: Props) => {
  const { modalOpen, toggleModalOpen } = useCommonStore();
  const handleOk = () => {
    toggleModalOpen("close");
  };

  const handleCancel = () => {
    toggleModalOpen("close");
  };

  return (
    <>
      <Modal
        open={modalOpen}
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
