import * as React from "react";
import Table from "@mui/material/Table";
import { Link } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../Redux/Actions/Useraction";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddCardIcon from "@mui/icons-material/AddCard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import "../App.css";

function TeachersList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.currentUser);
  const Students = useSelector((state) => state.userReducer.users);
  //console.log(Students)
  //console.log(Student)

  const [checked, setChecked] = React.useState();
  const handleChange1 = (e) => {
    setChecked(!checked);
  };

  const drawerWidth = 240;

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));

  const mdTheme = createTheme();

  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}  className="background">
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
              <p className="log">
                TE
                <strong className="mainname" style={{ color: "#a904f5" }}>
                  CH
                </strong>
                ERS
              </p>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          {user.role == "prof" ? (
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

              <Link className="side-bar" to="/student">
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
              <Link className="side-bar" to="/addPost">
                <ListItemButton>
                  <ListItemIcon>
                    <AddCardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Post" />
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
              <Link className="side-bar" to="/Performance">
                <ListItemButton>
                  <ListItemIcon>
                    <ArticleIcon />
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
      
          className="order"
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "150vh",
            overflow: "auto",
          }}
        >
          <div style={{color:"#0542b5" ,fontSize:"50px",textAlign:"center"}}>Teachers List</div>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Photo</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Students.map((row) => ( row.role == "prof" ?(
                <TableRow key={row._id}>
                  <TableCell>{row.createdOn}</TableCell>
                  <TableCell>
                    <Avatar alt="Remy Sharp" src={row.image} />
                  </TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>):null
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default TeachersList;
