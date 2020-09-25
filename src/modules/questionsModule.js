import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../localStorage";

const localState = loadState();

const questionsModule = createSlice({
  name: "questions",
  initialState: localState,
  reducers: {
    addQuestion: (state, action) => {
      const question = {
        questionTitle: action.payload.title,
        question: action.payload.content,
        answers: [],
        createdAt: new Date().getTime(),
      };
      state.push(question);
      saveState(state);
    },
    sendAnswer: (state, action) => {
      state[action.payload["questionIndex"]]["answers"].push(
        action.payload["answer"]
      );
      saveState(state);
    },
    deleteQuestion: (state, action) => {
      state.splice(action.payload, 1);
      saveState(state);
    },
    editQuesitonContent: (state, action) => {
      state[action.payload["questionIndex"]]["question"] =
        action.payload["question"];
      saveState(state);
    },
    editQuesitonTitle: (state, action) => {
      state[action.payload["questionIndex"]]["questionTitle"] =
        action.payload["questionTitle"];
      saveState(state);
    },
    deleteAnswer: (state, action) => {
      state[action.payload["questionIndex"]]["answers"].splice(
        action.payload["answerIndex"],
        1
      );
      saveState(state);
    },
  },
});

export default questionsModule;
