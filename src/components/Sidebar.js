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
import { ListItem, ListItemIcon } from "@mui/material";

const drawerWidth = 240;

export default function Sidebar() {
  const navigate = useNavigate()
  const button = {
    height: "2.5rem",
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
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          <img src={Logod} alt="logo" style={{ height: "2rem", width: "2rem" }} />
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
            <ListItem>
              <Button style={button} className="button" fullWidth variant="text" onClick={() => navigate("/users")}>
                <ListItemIcon>
                  <Ologo />
                </ListItemIcon>
                Users
              </Button>
            </ListItem>

            <ListItem>
              <Button style={button} className="button" fullWidth variant="text" onClick={() => navigate("/posts")}>
                <ListItemIcon>
                  <Ticket />
                </ListItemIcon>
                Posts
              </Button>
            </ListItem>

            <ListItem>
              <Button style={button} className="button" fullWidth variant="text">
                <ListItemIcon>
                  <Ideas />
                </ListItemIcon>
                Ideas
              </Button>
            </ListItem>

            <ListItem>
              <Button style={button} className="button" fullWidth variant="text">
                <ListItemIcon>
                  <Contacts />
                </ListItemIcon>
                Contacts
              </Button>
            </ListItem>

            <ListItem>
              <Button style={button} className="button" fullWidth variant="text">
                <ListItemIcon>
                  <Agents />
                </ListItemIcon>
                Agents
              </Button>
            </ListItem>

            <ListItem>
              <Button style={button} className="button" fullWidth variant="text">
                <ListItemIcon>
                  <Articles />
                </ListItemIcon>
                Articles
              </Button>
            </ListItem>
          </Stack>
        </List>
        <Divider sx={{ border: "1px solid #DFE0EB" }} />
        <List>
          <Stack>
            <ListItem>
              <Button style={button} className="button" fullWidth variant="text">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                Settings
              </Button>
            </ListItem>

            <ListItem>
              <Button style={button} className="button" fullWidth variant="text">
                <ListItemIcon>
                  <Subscription />
                </ListItemIcon>
                Subscription
              </Button>
            </ListItem>

            <ListItem>
              <Button style={button} className="button" fullWidth variant="text" onClick={() => (window.location.href = "https://github.com/ercantekeli")}>
                <ListItemIcon>
                  <GitHubIcon sx={{ width: "1rem", height: "1rem", color:"#606471" }} />
                </ListItemIcon>
                Github
              </Button>
            </ListItem>

            <ListItem>
              <Button style={button} className="button" fullWidth variant="text" onClick={() => (window.location.href = "https://www.linkedin.com/in/ercantekeli/")}>
                <ListItemIcon>
                  <LinkedInIcon sx={{ width: "1rem", height: "1rem", color:"#606471"}} />
                </ListItemIcon>
                Linkedin
              </Button>
            </ListItem>

          </Stack>
        </List>
      </Drawer>
    </Box>
  );
}
