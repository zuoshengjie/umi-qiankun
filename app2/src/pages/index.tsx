
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MicroAppWithMemoHistory } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {/* <MicroAppWithMemoHistory name="app1" url='/' /> */}

      <Button onClick={showModal}>Modal</Button>
      <Modal title="Basic Modal" width={1200} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <MicroAppWithMemoHistory name="app1" url='/' />
      </Modal>
    </div>
  );
}
