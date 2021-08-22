import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import ToDoListLayout from "../components/ToDoListLayout";

const ToDoListContainer = (props) => {
  const [textValue, setTextValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [textValueCorrect, setTextValueCorrect] = useState("");
  const [tegValue, setTegValue] = useState("");

  const handleTegChange = useCallback(
    (event) => {
      const { value } = event.target;
      setTegValue(value);
    },
    [tegValue]
  );

  const handleTaskCorrectForm = useCallback(
    (event) => {
      const { value } = event.target;
      setTextValueCorrect(value);
    },
    [textValueCorrect]
  );

  const handleTaskCreate = useCallback(
    (event) => {
      const { value } = event.target;
      setTextValue(value);
    },
    [textValue]
  );

  useEffect(() => {
    setTaskList((state) => {
      if (localStorage.TaskJson !== undefined) {
        const arrayTaskFromStorage = JSON.parse(localStorage.TaskJson);
        return arrayTaskFromStorage;
      }
      return state;
    });
  }, []);

  const handleSaveCorrect = useCallback(
    (index) => {
      if (textValueCorrect !== "") {
        setTaskList((state) => {
          const taskCopy = [...state];
          taskCopy[index] = {
            ...state,
            task: textValueCorrect,
            isCorrect: false,
          };
          const taskLIstStringify = JSON.stringify(taskCopy);
          localStorage.setItem("TaskJson", taskLIstStringify);
          return taskCopy;
        });

        setTextValueCorrect("");
      }
    },
    [textValueCorrect]
  );

  const handleAddTask = useCallback(() => {
    if (textValue !== "") {
      setTaskList((state) => {
        const taskCopy = [...state];
        taskCopy.push({ task: textValue, isCorrect: false });
        const taskLIstStringify = JSON.stringify(taskCopy);
        localStorage.setItem("TaskJson", taskLIstStringify);
        return taskCopy;
      });
      setTextValue("");
    }
  }, [textValue]);
  const handleRemoveTask = useCallback((index) => {
    setTaskList((state) => {
      const taskCopy = [...state];
      taskCopy.splice(index, 1);
      const taskLIstStringify = JSON.stringify(taskCopy);
      localStorage.setItem("TaskJson", taskLIstStringify);
      return taskCopy;
    });
  }, []);
  const handleChangeTask = useCallback((index) => {
    setTaskList((state) => {
      const taskCopy = [...state];
      taskCopy[index].isCorrect = true;
      return taskCopy;
    });
  }, []);
  const handleChangeCancel = useCallback((index) => {
    setTaskList((state) => {
      const taskCopy = [...state];
      taskCopy[index].isCorrect = false;
      return taskCopy;
    });
  }, []);

  return (
    <ToDoListLayout
      taskList={taskList}
      textValue={textValue}
      handleTaskCreate={handleTaskCreate}
      handleAddTask={handleAddTask}
      handleRemoveTask={handleRemoveTask}
      handleChangeTask={handleChangeTask}
      handleTaskCorrectForm={handleTaskCorrectForm}
      textValueCorrect={textValueCorrect}
      handleSaveCorrect={handleSaveCorrect}
      tegValue={tegValue}
      handleTegChange={handleTegChange}
      handleChangeCancel={handleChangeCancel}
    />
  );
};

export default ToDoListContainer;
