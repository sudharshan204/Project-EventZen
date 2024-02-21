import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate=useNavigate();
  const ClickBirthday = () =>
    {
        navigate('./b')
    }
  const ClickCorp = () =>
    {
        navigate('./c')
    }
  const ClickWedding = () =>
    {
        navigate('./w')
    }
  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        EVENTS
      </Button>
      <Menu 
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        
      >
        <MenuItem className='sudha' style={{color:'black'}} onClick={ClickBirthday}>BirthDays</MenuItem>
        <MenuItem className='sudha' style={{color:'black'}} onClick={ClickCorp}>Corporate Events</MenuItem>
        <MenuItem className='sudha' style={{color:'black'}} onClick={ClickWedding}>Weddings</MenuItem>
      </Menu>
    </div>
  );
}
