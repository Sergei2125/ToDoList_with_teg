import React from "react";
import PropTypes from "prop-types";
import Card from "../../../commonComponents/Card";
import CardCorrect from "../../../commonComponents/CardCorrect";

import { Button, List, TextField, Box } from "@material-ui/core";

import styles from "./styles.module.scss";
const { v4 } = require("uuid");

const ToDoListLayout = ({
  taskList,
  textValue,
  handleTaskCreate,
  handleAddTask,
  handleRemoveTask,
  handleChangeTask,
  handleTaskCorrectForm,
  textValueCorrect,
  handleSaveCorrect,
  tegValue,
  handleTegChange,
  handleChangeCancel,
}) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.wrapper}>
        <Box className={styles.formWrapper}>
          <Box className={styles.noteValue}>
            <form>
              <TextField
                className="noteValue__input"
                fullWidth
                id="standard-basic"
                label="Введите заметку"
                value={textValue}
                onChange={handleTaskCreate}
              />
            </form>
            <Button
              className={styles.inputButton}
              variant="outlined"
              color="primary"
              onClick={handleAddTask}
            >
              Create note
            </Button>
          </Box>
          <Box>
            <form>
              <TextField
                className={styles.tegButton}
                id="outlined-secondary"
                label="Поиск по тегу"
                variant="outlined"
                color="secondary"
                value={tegValue}
                onChange={handleTegChange}
                size="small"
              />
            </form>
          </Box>
        </Box>

        <Box>
          <List>
            {taskList
              .filter((content) => {
                if (tegValue) {
                  return content.task
                    .split("")
                    .find((elem) => elem === tegValue);
                } else return true;
              })
              .map((elem, index) => {
                if (elem.isCorrect) {
                  return (
                    <CardCorrect
                      task={elem.task}
                      handleSaveCorrect={() => handleSaveCorrect(index)}
                      textValueCorrect={textValueCorrect}
                      handleTaskCorrectForm={handleTaskCorrectForm}
                      handleChangeCancel={() => handleChangeCancel(index)}
                      key={index}
                    />
                  );
                } else if (true) {
                  return (
                    <Card
                      tegValue={tegValue}
                      task={elem.task}
                      handleRemoveTask={() => handleRemoveTask(index)}
                      handleChangeTask={() => handleChangeTask(index)}
                      key={index}
                    />
                  );
                }
              })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

ToDoListLayout.propTypes = {
  taskList: PropTypes.array.isRequired,
  textValue: PropTypes.string.isRequired,
  textValueCorrect: PropTypes.string.isRequired,
  tegValue: PropTypes.string.isRequired,
  handleTaskCreate: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
  handleChangeTask: PropTypes.func.isRequired,
  handleTaskCorrectForm: PropTypes.func.isRequired,
  handleSaveCorrect: PropTypes.func.isRequired,
  handleTegChange: PropTypes.func.isRequired,
  handleChangeCancel: PropTypes.func.isRequired,
};

export default ToDoListLayout;
