import React, { useContext } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useUserInfo from '../hooks/use-user-info';
import { UserContext } from '../state/Context';

export default function ProfileButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { setToken } = useUserInfo();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    setToken('');
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        sx={{ color: 'white' }}
      >
        <AccountCircle sx={{ width: '40px', height: '40px' }} />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={logOut}>Log Out</MenuItem>
      </Menu>
    </div>
  );
}
