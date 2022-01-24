import React from 'react';
import {
    DeleteOutlineOutlined,
  } from "@mui/icons-material";
  import {
    CardHeader,
    CardContent,
    Typography,
    Grid,
    Card,
    IconButton,
    Avatar,
  } from "@mui/material";

function NoteCard({notes,deleteNote}) {

  

  return <>
      <Grid
        container
        spacing={4}
        sx={{
          margin: "10px 10px ",
          marginTop:"65px",
        }}
      >
      {notes.length <=0 && <Typography variant="h3" color="textSecondary" sx={{
        paddingTop:"30px",
        textAlign:"Center",
        paddingLeft:"20px"
      }}> No Notes! Create More to see...</Typography> }
        {notes.map(
          (value, index) => {
            return (
              <Grid item md={4} xs={12} key={value.id}>
                <Card
                >
                  <CardHeader
                    avatar={<Avatar>{value.title[0]}</Avatar>}
                    title={value.title}
                    subheader={value.category}
                    action={
                      <IconButton onClick={()=>deleteNote(value.id)}>
                        <DeleteOutlineOutlined />
                      </IconButton>
                    }
                  />
                  <CardContent>
                    <Typography variant="body2">
                      {value.details}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          }
        )}
      </Grid>
  </>;
}

export default NoteCard;
