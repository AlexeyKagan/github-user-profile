import React from 'react';
import Modal from 'components/Modal';
import styled from 'styled-components';

const CreateIssueModal = (props) => {
  const { isOpen, onSubmit, onClose } = props;

  const onFormSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const { title, body } = e.target;

    onSubmit({
      title: title.value,
      body: body.value,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Content>
        <h3>Create issue:</h3>
        <FormContainer onSubmit={onFormSubmit}>
          <input
            name="title"
            type="text"
            required
            placeholder="Type issue title"
          />
          <textarea name="body" required placeholder="Type issue body" />
          <button type="submit">Submit</button>
        </FormContainer>
      </Content>
    </Modal>
  );
};

export default CreateIssueModal;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  background: white;
  min-width: 360px;
  padding: 20px;
  position: absolute;
  outline: 0;
  z-index: 9;
  border-radius: 20px;
`;
