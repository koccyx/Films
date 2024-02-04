import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import ModalInput from '../../../utils/modal-input';
import { useNavigate } from 'react-router-dom';
import useUserInfo from '../../../hooks/use-user-info';
import { fetchUserId } from '../../../state/thunks/user-thunks';
import { useAppDispatch } from '../../../hooks/redux-hooks';

interface Props {
  handleOpen: () => void;
  handleClose: () => void;
  submitHandler: () => void;
  open: boolean;
}

export default function TokenModal(props: Props) {
  const [localToken, setLocalToken] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { setToken } = useUserInfo();

  const changeTokenHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalToken(e.target.value);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setToken(localToken);
    dispatch(fetchUserId({ token: localToken }));
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
