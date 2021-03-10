import React from 'react';
import { Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { APP_INFO } from '../constants';
import '../components/Auth/AuthModal.css';
import Banner from '../components/UI/Banner';

export const Unauthorized = () => {

  return (
    <Modal modalClassName="auth-modal" isOpen={true} fade={false}>
      <ModalHeader>
        <Banner titleText={APP_INFO.NAME} />
      </ModalHeader>
      <ModalBody>You are unable to subscribe to the mailing list. You must log in with an idir account or a be a member of the bcgov or bcgovdevops organizations on github.</ModalBody>
    </Modal>
  );
};

export default Unauthorized;
