import React from "react";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase";
function Todo(props) {
  const deleteTodo = (event) => {
    db.collection("todos").doc(props.text.id).delete();
  };
  return (
    <div className="todos">
      <List>
        <ListItem>
          <ListItemText
            primary={props.text.todo}
            secondary="complete it fast"
          />
          <Button variant="contained" color="primary" onClick={deleteTodo}>
            Delete
          </Button>
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
