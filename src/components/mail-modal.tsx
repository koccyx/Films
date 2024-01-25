import React, { useState } from 'react';
import {
  Modal,
  Box,
} from '@mui/material';
import { validateMail } from '../utils/regex';
import ModalInput from '../utils/modal-input';

interface PropsInterface {
  handleOpen: () => void;
  handleClose: () => void;
  submitHandler: () => void;
  open: boolean;
}

export default function MailModal(props: PropsInterface) {
  const [mail, setMail] = useState<string>('');
  const [isError, setError] = useState(false);

  const submitMail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validateMail(mail)) {
      setError(true);
    } else {
      props.submitHandler();
    }
    setMail('');
  };

  const changeMailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setMail(e.target.value);
  };

  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box>
        <ModalInput
          handleClose={props.handleClose}
          input={mail}
          onChangeInput={changeMailHandler}
          isError={isError}
          submitHandler={submitMail}
          placeholder={'Email'}
          topText={'Request a token'}
          errorText={'email'}
        />
      </Box>
    </Modal>
  );
}
