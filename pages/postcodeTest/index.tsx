import React, { useState } from "react";
import { Button, Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Address } from "cluster";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const qqqq = (address: Address) => {
    console.log(address.address);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={qqqq} />
      </Modal>
      <div></div>
    </>
  );
};

export default App;
