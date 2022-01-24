import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import React, {  useState } from "react";

function CreatPage({addNotes}) {
  let [title,setTitle] = useState("");
  let [details,setDetails] = useState("");
  let [category,setCategory] = useState("todos");



  const submitHandler = () => {
    const newData ={
      id:new Date().getTime().toString(),
      title,
      details,
      category,
    }
    if (title && details && category){
      addNotes(newData);
      setTitle("");
      setDetails("")
    }
   else{
     alert("Please fill all the input fields")
   }
  };


  const style = {
    color: purple[800],
    "&.Mui-checked": {
      color: purple[600],
    },
  };
  
  return (
    <>
      <div
        autoCorrect="false"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          margin: "0 25px",
        }}
        onSubmit={submitHandler}
      >
        <Typography
          variant="h5"
          color="textSecondary"
          paddingBottom="30px"
          paddingTop="25px"
        >
          Create a New Note
        </Typography>
        <TextField
          autoComplete="false"
          color="secondary"
          label="Note Title"
          value={title}
          onChange={(e) =>
           setTitle(e.currentTarget.value)
          }
          fullWidth
          sx={{ color: purple[800] }}
        />
        <br /> <br />
        <TextField
          label="Details "
          color="secondary"
          value={details}
          onChange={(e) =>
           setDetails(e.currentTarget.value)
          }
          multiline
          rows="3"
          fullWidth
          sx={{ color: purple[800], marginTop: "25px" }}
        />
        <FormControl sx={{ marginTop: "25px" }}>
          <FormLabel color="secondary">Note Category</FormLabel>
          <RadioGroup value={category.length > 1 ?category:"todos"} onChange={(e)=>setCategory(e.currentTarget.value)}>
            <FormControlLabel
              value="money"
              control={<Radio sx={style} />}
              label="Money"
            />
            <FormControlLabel
              value="todos"
              control={<Radio sx={style} />}
              label="Todos"
            />
            <FormControlLabel
              value="Reminders"
              control={<Radio sx={style} />}
              label="Reminders"
            />
            <FormControlLabel
              value="Work"
              control={<Radio sx={style} />}
              label="Work"
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="secondary"
          onClick={submitHandler}
          sx={{
            width: "140px",
            margin: "6px",
            backgroundColor: purple[500],
          }}
          endIcon={<KeyboardArrowRight />}
        >
          SUBMIT
        </Button>
      </div>
    </>
  );
}

export default CreatPage;
