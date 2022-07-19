import { Modal as AntdModal } from 'antd';
import React, { Dispatch } from 'react';
import { SetStateAction } from 'react';

interface ModalProps {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
  title?: string;
}

const Modal: React.FunctionComponent<ModalProps> = ({ title, isModalVisible, setIsModalVisible, children }) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <AntdModal title={title ? title : 'basic Modal'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      {children}
    </AntdModal>
  );
};

export default Modal;
