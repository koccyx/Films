import React, { useState } from 'react';
import {
  Box,
  Modal,
} from '@mui/material';
import ModalInput from '../utils/modal-input';
import useToken from '../hooks/use-token';
import { useNavigate } from 'react-router-dom';

interface PropsInterface {
  handleOpen: () => void;
  handleClose: () => void;
  submitHandler: () => void;
  open: boolean;
}

export default function TokenModal(props: PropsInterface) {
  const [localToken, setLocalToken] = useState('');
  const navigate = useNavigate();
  const [_, setToken] = useToken();

  const changeTokenHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalToken(e.target.value);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setToken(localToken);
    navigate('/');
    props.handleClose();
  };

  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box>
        <ModalInput
          handleClose={props.handleClose}
          input={localToken}
          onChangeInput={changeTokenHandler}
          submitHandler={submitHandler}
          placeholder={'Token'}
          topText='Input token'
        />
      </Box>
    </Modal>
  );
}
