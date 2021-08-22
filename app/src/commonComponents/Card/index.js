import React from "react";
import PropTypes from "prop-types";

import { useCallback } from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FolderIcon from "@material-ui/icons/Folder";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

import styles from "./styles.module.scss";

const { v4 } = require("uuid");

const tegButton = {
  marginLeft: "15px",
};

const HightLight = ({ str, tegValue }) => {
  if (!tegValue) return str;

  return (
    <>
      <span className={styles.listItemHight}>{tegValue}</span>
    </>
  );
};

const Card = ({ task, handleRemoveTask, handleChangeTask, tegValue }) => {
  const light = useCallback(
    (str) => {
      return <HightLight tegValue={tegValue} str={str} key={v4()} />;
    },
    [tegValue]
  );
  return (
    <ListItem className={styles.listItemWrapper}>
      <ListItemIcon>
        <FolderIcon color="primary" />
      </ListItemIcon>
      <ListItemText
        className={styles.noteText}
        primary={task.split("").map((str) => {
          if (str === tegValue) return light(str);
          return str;
        })}
      />
      <IconButton
        style={tegButton}
        aria-label="correct"
        onClick={handleChangeTask}
        color="secondary"
      >
        <CreateIcon />
      </IconButton>
      <IconButton
        style={tegButton}
        aria-label="delete"
        onClick={handleRemoveTask}
        color="primary"
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

Card.propTypes = {
  task: PropTypes.string.isRequired,
  tegValue: PropTypes.string.isRequired,
  handleChangeTask: PropTypes.func.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
};

export default Card;
