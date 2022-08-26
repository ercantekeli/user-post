import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Ologo from "../assets/sidebar/Ologo";
import Ticket from "../assets/sidebar/Ticket";
import Ideas from "../assets/sidebar/Ideas";
import Contacts from "../assets/sidebar/Contacts";
import Agents from "../assets/sidebar/Agents";
import Articles from "../assets/sidebar/Articles";
import Settings from "../assets/sidebar/Settings";
import Subscription from "../assets/sidebar/Subscription";
import { useNavigate } from "react-router-dom";
import Logod from "../assets/sidebar/Logod.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const drawerWidth = 240;

export default function Sidebar() {
  const navigate = useNavigate()
  const button = {
    height: "3.11rem",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    justifyContent: "left",
    letterSpacing: "0.2px",
    color: "#a4a6b3",
    textTransform: "capitalize"
}
return (
  <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#363740",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar
        sx={{
          marginBottom: "3.5rem",
          marginTop: "2.27rem",
        }}
      >
        <img src={Logod} alt="logo" style={{height:"2rem", width:"2rem"}}/>
        <span
          style={{
            marginLeft: "1.2rem",
            fontFamily: "Mulish",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "24px",
            color: "#A4A6B3",
            opacity: "0.7",
          }}
        >
          Dashboard Kit
        </span>
      </Toolbar>
      <List>
        <Stack>
          <Button style={button} className="button" fullWidth variant="text" onClick={()=> navigate("/users")}>
            <Ologo />
            <span style={{ marginLeft: "1.2rem" }}>Users</span>
          </Button>
          <Button style={button} className="button" fullWidth variant="text" onClick={()=> navigate("/posts")}>
            <Ticket />
            <span style={{ marginLeft: "1.2rem" }}>Posts</span>
          </Button>
          <Button style={button} className="button" fullWidth variant="text">
            <Ideas />
            <span style={{ marginLeft: "1.2rem" }}>Ideas</span>
          </Button>
          <Button style={button} className="button" fullWidth variant="text">
            <Contacts />
            <span style={{ marginLeft: "1.2rem" }}>Contacts</span>
          </Button>
          <Button style={button} className="button" fullWidth variant="text">
            <Agents />
            <span style={{ marginLeft: "1.2rem" }}>Agents</span>
          </Button>
          <Button style={button} className="button" fullWidth variant="text">
            <Articles />
            <span style={{ marginLeft: "1.2rem" }}>Articles</span>
          </Button>
        </Stack>
      </List>
      <Divider sx={{ border: "1px solid #DFE0EB" }} />
      <List>
        <Stack>
          <Button style={button} className="button" fullWidth variant="text">
            <Settings />
            <span style={{ marginLeft: "1.2rem" }}>Settings</span>
          </Button>
          <Button style={button} className="button" fullWidth variant="text">
            <Subscription />
            <span style={{ marginLeft: "1.2rem" }}>Subscription</span>
          </Button>
          <Button style={button} className="button" fullWidth variant="text" onClick={()=>(window.location.href ="https://github.com/ercantekeli")}>
            <GitHubIcon sx={{width:"1rem", height:"1rem"}}/>
            <span style={{ marginLeft: "1.2rem" }}>Github</span>
          </Button>
          <Button style={button} className="button" fullWidth variant="text" onClick={()=>(window.location.href ="https://www.linkedin.com/in/ercantekeli/")}>
            <LinkedInIcon sx={{width:"1rem", height:"1rem"}}/>
            <span style={{ marginLeft: "1.2rem" }}>Linkedin</span>
          </Button>
        </Stack>
      </List>
    </Drawer>
  </Box>
);
}
