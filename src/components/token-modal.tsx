import React, { useContext, useState } from 'react';
import { Box, Modal } from '@mui/material';
import ModalInput from '../utils/modal-input';
import { useNavigate } from 'react-router-dom';
import FetchAccountId from '../api/fetch-account-id';
import useUserInfo from '../hooks/use-user-info';
import { UserContext } from '../state/Context';

interface PropsInterface {
  handleOpen: () => void;
  handleClose: () => void;
  submitHandler: () => void;
  open: boolean;
}

export default function TokenModal(props: PropsInterface) {
  const [localToken, setLocalToken] = useState('');
  const navigate = useNavigate();

  const { setToken, setId } = useUserInfo();

  const changeTokenHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalToken(e.target.value);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setToken(localToken);
    FetchAccountId(localToken).then((data) => setId(data.id));
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
