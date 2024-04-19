import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { getFormData } from "../store/AppStore";
import { useDispatch } from "react-redux";
import { formActions } from "../store/form-data-reducer";
import { todoActions } from "../store/Todo-Reducer";
import { useNavigate } from "react-router-dom";

function validateFormData(error, formData) {
  return !!error || formData.text.length < 5 || formData.text.length > 254;
}

function FormComponent() {
  const [error, setError] = useState("");
  const formData = getFormData((state) => state.formData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { value } = e.target;
    let newError = "";
    if (value.length < 5 || value.length > 254) {
      newError = "Input must be between 5 and 254 characters.";
    } else {
      newError = "";
    }
    setError(newError);
    dispatch(formActions.setText({ text: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFormData(error, formData)) {
      dispatch(
        todoActions.setTodoItem([
          {
            text: formData.text,
          },
        ])
      );
      dispatch(formActions.resetForm());
      navigate("/todo");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Note"
            name="text"
            className="Text"
            value={formData.text}
            onChange={handleInputChange}
            error={!!error}
            helperText={error}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={validateFormData(error, formData)}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default FormComponent;
