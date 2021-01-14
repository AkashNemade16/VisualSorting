import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = () => {
    setAnchorEl();// set a new Component
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button color='inherit' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Algorithms
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>SelectionSort</MenuItem>
        <MenuItem onClick={handleClose}>InsertionSort</MenuItem>
        <MenuItem onClick={handleClose}>BubbleSort</MenuItem>
        <MenuItem onClick={handleClose}>QuickSort</MenuItem>
        <MenuItem onClick={handleClose}>MergeSort</MenuItem>
      </Menu>
    </div>
  );
}