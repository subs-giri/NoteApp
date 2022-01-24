import { AddCircleSharp, EventNoteOutlined } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, {  useState,useEffect } from "react";
import { purple } from "@mui/material/colors";
import NoteCard from "./NoteCard";
import Appbar from "./Appbar";
import CreatePage from "./CreatePage";


const getLocalData = () => {
  const lists = localStorage.getItem("mynotes");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const drawerWidth = 170;

function NoteTaking() {
    // const [drawerWidth,setdrawerWidth ]= useState(250);
  const [isCreate, setIsCreate] = useState(false);
  const [notes,setNotes] = useState(getLocalData())


  useEffect(() => {
    localStorage.setItem("mynotes", JSON.stringify(notes));
  }, [notes]);

  const addNotes = (nList) =>{
    setNotes([...notes,nList])
  }


  const deleteNote = (id) => {
    const updateItems = notes.filter((cElem) => {
      return cElem.id !== id;
    });
    setNotes(updateItems);
  };

  const clickHandler = (index) => {
    if (index === 0) return setIsCreate(false);
    else setIsCreate(true);
  };

  return (
    <div style={{ display: "flex" }}>
      {!isCreate && <Appbar drawerWidth={drawerWidth} />}

      <Drawer
        className="drawer"
        variant="permanent"
        anchor="left"
        sx={{ width: drawerWidth }}
      >
        <Box sx={{ width: drawerWidth, height: "100px" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "27px",
              paddingLeft: "10px",
              paddingTop: "30px",
            }}
          >
            Aanfo Notes
          </Typography>
        </Box>
        <Divider />
        <List>
          {["My Notes", "Create Note"].map((text, index) => (
            <ListItem
              button
              color="secondary"
              onClick={() => clickHandler(index)}
              key={text}
            >
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <EventNoteOutlined sx={{ color: purple[500] }} />
                ) : (
                  <AddCircleSharp sx={{ color: purple[500] }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {isCreate ? <CreatePage addNotes={addNotes} /> : <NoteCard notes={notes} deleteNote={deleteNote} />}
    </div>
  );
}

export default NoteTaking;
