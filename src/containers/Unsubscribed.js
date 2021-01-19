import React from 'react';
import { Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { APP_INFO } from '../constants';
import '../components/Auth/AuthModal.css';
import Banner from '../components/UI/Banner';
import { useKeycloak } from '@react-keycloak/web';
import { Redirect } from 'react-router-dom';

export const Unsubscribed = () => {
  const { keycloak } = useKeycloak();

  // Back to root route if the user is not authenticated
  if (keycloak.authenticated === false){
    return (
      <Redirect to="/" />
    )
  }

  return (
    <Modal modalClassName="auth-modal" isOpen={true} fade={false}>
      <ModalHeader>
        <Banner titleText={APP_INFO.NAME} />
      </ModalHeader>
      <ModalBody>You have unsubscribed from the Platform News mailing list.</ModalBody>
    </Modal>
  );
};



export default Unsubscribed;
