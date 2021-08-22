import React from "react";
import PropTypes from "prop-types";

import { ListItem, ListItemText, TextField } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FolderIcon from "@material-ui/icons/Folder";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import BlockIcon from "@material-ui/icons/Block";

import styles from "./styles.module.scss";

const CardCorrect = ({
  task,
  handleTaskCorrectForm,
  textValueCorrect,
  handleSaveCorrect,
  handleChangeCancel,
}) => {
  return (
    <ListItem className={styles.listItemWrapper}>
      <ListItemIcon className={styles.cardItemHide}>
        <FolderIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary={task} />

      <form>
        <TextField
          className="noteValue__input"
          fullWidth
          id="standard-basic"
          label="Новая заметка"
          value={textValueCorrect}
          onChange={handleTaskCorrectForm}
        />
      </form>
      <IconButton
        className={styles.tegButton}
        aria-label="delete"
        onClick={handleSaveCorrect}
        color="primary"
      >
        <SaveIcon />
      </IconButton>
      <IconButton
        className={styles.tegButton}
        aria-label="delete"
        onClick={handleChangeCancel}
        color="secondary"
      >
        <BlockIcon />
      </IconButton>
    </ListItem>
  );
};

CardCorrect.propTypes = {
  task: PropTypes.string.isRequired,
  textValueCorrect: PropTypes.string.isRequired,
  handleTaskCorrectForm: PropTypes.func.isRequired,
  handleSaveCorrect: PropTypes.func.isRequired,
  handleChangeCancel: PropTypes.func.isRequired,
};

export default CardCorrect;
