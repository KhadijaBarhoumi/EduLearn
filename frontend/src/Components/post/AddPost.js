import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import TextField from "@mui/material/TextField";
import Link2 from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddCardIcon from "@mui/icons-material/AddCard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../dashboard/listItems.css";
import { createPost } from "../../Redux/Actions/postaction";
import "./Post.css";

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
export default function AddPost() {
  const user = useSelector((state) => state.userReducer.currentUser);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [value, setValue] = React.useState(new Date());
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = createTheme();
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [question, setQuestion] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("title", title);
    data.append("message", message);
    data.append("question", question);
    console.log({
      title: data.get("title"),
      message: data.get("message"),
      question: data.get("question"),
    });
    dispatch(createPost({
      title: data.get("title"),
      message: data.get("message"),
      question: data.get("question")}
    , navigate));
    
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
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
                ADD
                <strong className="mainname" style={{ color: "#a904f5" }}>
                  P
                </strong>
                OST
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
          className="background"
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}

              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    width: 500,
                    ml: 45,
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                      <CssBaseline />
                      <Box
                        sx={{
                          marginTop: 8,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Typography component="h1" variant="h5">
                          Add Post
                        </Typography>
                        <Box
                          component="form"
                          onSubmit={handleSubmit}
                          noValidate
                          sx={{ mt: 1 }}
                        >
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            type="string"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                          />
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="question"
                            label="question"
                            name="question"
                            type="string"
                            onChange={(e) => setQuestion(e.target.value)}
                          />
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="message"
                            label="message"
                            id="message"
                            type="string"
                            onChange={(e) => setMessage(e.target.value)}
                          />

                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                          >
                            Add Post
                          </Button>
                        </Box>
                      </Box>
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
