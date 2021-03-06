import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import Link2 from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddCardIcon from '@mui/icons-material/AddCard';
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import '../dashboard/listItems.css'
import Library from './Library'
 import './Library.css'; 


const drawerWidth = 240;



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();
const LibraryList = () => {
const user = useSelector((state) => state.userReducer.currentUser);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const theme = createTheme();
  const labraries=useSelector(state=>state.libraryReducer.videos)
    console.log(labraries)

  return (
    <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        
        <IconButton onClick={toggleDrawer}>
        <p className="log">LI<strong className="mainname" style={{color:'#a904f5'}}>B</strong>RARY</p>
          <ChevronLeftIcon />
        
        </IconButton>
      </Toolbar>
      <Divider />
      {user.role == "prof" ? (
        <List component="nav">
          <Link   className="side-bar" to="/dashboard">
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/cours">
            <ListItemButton>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary=" Course" />
            </ListItemButton>
          </Link>
          <Link  className="side-bar" to="/library">
            <ListItemButton>
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary=" Library" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/posts">
            <ListItemButton>
              <ListItemIcon>
                <DynamicFeedIcon />
              </ListItemIcon>
              <ListItemText primary=" Posts" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/Calendar">
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/addCour">
            <ListItemButton>
              <ListItemIcon>
                <AddCardIcon />
              </ListItemIcon>
              <ListItemText primary="Add Course" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/addtolab">
            <ListItemButton>
              <ListItemIcon>
                <AddCardIcon />
              </ListItemIcon>
              <ListItemText primary="Add Video" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/addPost">
            <ListItemButton>
              <ListItemIcon>
                <AddCardIcon />
              </ListItemIcon>
              <ListItemText primary="Add Post" />
            </ListItemButton>
          </Link>

          <Link  className="side-bar" to="/student">
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Students" />
            </ListItemButton>
          </Link>
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="All course" />
          </ListItemButton>
         
        </List>
      ) : (
        <List component="nav">
          <Link className="side-bar" to="/dashboard">
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/cours">
            <ListItemButton>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary=" Course" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/library">
            <ListItemButton>
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary=" Library" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/posts">
            <ListItemButton>
              <ListItemIcon>
                <DynamicFeedIcon />
              </ListItemIcon>
              <ListItemText primary=" Posts" />
            </ListItemButton>
          </Link>
          <Link  className="side-bar" to="/addPost">
            <ListItemButton>
              <ListItemIcon>
                <AddCardIcon />
              </ListItemIcon>
              <ListItemText primary="Add Post" />
            </ListItemButton>
          </Link>
          <Link  className="side-bar" to="/Calendar">
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/Performance">
            <ListItemButton>
              <ListItemIcon>
                < ArticleIcon />
              </ListItemIcon>
              <ListItemText primary=" Performance" />
            </ListItemButton>
          </Link>
          <Link className="side-bar" to="/TeachersListboard">
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary=" Teachersboard" />
            </ListItemButton>
          </Link>

        </List>
      )}
    </Drawer>
      <Box 
      className="background"
       
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
         
          overflow: 'auto',
        }}
      >
        
        <Container  sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/*library */}
            <Grid item xs={12} >
              <Paper sx={{ ml: 25}} >
              <ThemeProvider theme={theme}>
      <Container component="main" >
        <div className='videos' style={{
          marginLeft:10,
            marginTop: 8,
            display: 'flex',
            flexWrap: 'wrap'}}
            >
        
       {labraries.map(el=><Library el={el} key={el._id} />)}
        </div>
       
      </Container>
    </ThemeProvider>
              </Paper>
            </Grid>
          </Grid>
          
        </Container>
      </Box>
    </Box>
  </ThemeProvider>
      
  );
}

export default LibraryList;