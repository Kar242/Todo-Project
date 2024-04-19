import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/Todo-Reducer";

function TodoItem({ name,  text }) {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="text change">Note:{text}</div>

        <div className="col-2">
          <Button
            variant="text"
            onClick={() =>
              dispatch(todoActions.deleteTodoItem({ todoName: name }))
            }
          >
            <DeleteIcon className="delete"/>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
