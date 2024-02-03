import { useState } from 'react';
import { Button } from '@mui/material';
import MailModal from './mail-modal';
import TokenModal from './token-modal';

export default function ModalButton() {
  const [openMailModal, setOpenMailModal] = useState(false);
  const handleMailOpen = () => setOpenMailModal(true);
  const handleMailClose = () => setOpenMailModal(false);

  const [openTokenModal, setOpenTokenModal] = useState(false);
  const handleTokenOpen = () => setOpenTokenModal(true);
  const handleTokenClose = () => setOpenTokenModal(false);

  const submitMailModal = () => {
    handleTokenOpen();
    handleMailClose();
  };

  const submitTokenModal = () => {
    handleTokenClose();
  };

  return (
    <>
      <Button
        onClick={handleMailOpen}
        sx={{ color: 'white', fontSize: '20px' }}
      >
        Login
      </Button>
      <MailModal
        handleOpen={handleMailOpen}
        handleClose={handleMailClose}
        open={openMailModal}
        submitHandler={submitMailModal}
      />
      <TokenModal
        handleOpen={handleTokenOpen}
        handleClose={handleTokenClose}
        open={openTokenModal}
        submitHandler={submitTokenModal}
      />
    </>
  );
}
