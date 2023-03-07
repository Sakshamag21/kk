import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
// import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Fragment } from 'react';
import { useState } from 'react';

export default function TemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
  

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (<>
    <div class="header">
      {['left',].map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{color:"black"}}><MenuIcon/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
      <h1>"PAYS"</h1>
      <h3>PROFESSIONALS AT YOUR SERVICE</h3>
      <img src="./headimage.png" width="200px" height="200px" style={{position:"absolute",top:"0",right:"0"}}></img>
    </div>
    <div class="searchbar">
    <TextField 
    id="input-with-icon-textfield"
    style={{backgroundColor:"#b2f7dc",width:"50vw",borderRadius:"20px"}}
    label=""
    placeholder='Search professional or skill'
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
    variant="standard"
  />
  </div>
  <h1>EXPLORE TALENTS:</h1>
  <div class="iconspage">
  <div class="iconsbox"> 
  <img src="./programming.png" width="100px" height="100px"></img>
  <h6>Programming & tech</h6></div>
  <div class="iconsbox"> 
  <img src="./graphics.png" width="100px" height="100px"></img>
  <h6>Graphic design</h6></div>
  <div class="iconsbox"> 
  <img src="./cad.png" width="100px" height="100px"></img>
  <h6>CAD</h6></div>
  <div class="iconsbox"> 
  <img src="./aurdino.png" width="100px" height="100px"></img>
  <h6>Arduino</h6></div>
  <div class="iconsbox"> 
  <img src="./photoshop.png" width="100px" height="100px"></img>
  <h6>Photoshop</h6></div>
  <div class="iconsbox"> 
  <img src="./career.png" width="100px" height="100px"></img>
  <h6>Career Ideas</h6></div>
  <div class="iconsbox"> 
  <img src="./writing.png" width="100px" height="100px"></img>
  <h6>Writing and translation</h6></div>
  <div class="iconsbox"> 
  <img src="./music.png" width="100px" height="100px"></img>
  <h6>Music and Audio</h6></div>
  <div class="iconsbox"> 
  <img src="./bed.png" width="100px" height="100px"></img>
  <h6>Room Makeover</h6></div>
  </div>

    </>
  );
}

// export default TemporaryDrawer;
