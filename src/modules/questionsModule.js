import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../localStorage";

const localState = loadState();

const questionsModule = createSlice({
  name: "questions",
  initialState: localState,
  reducers: {
    addQuestion: (state, action) => {
      const question = {
        questionTitle: action.payload,
        question: "",
        answers: [],
        createdAt: new Date().getTime(),
        status: "unanswered",
      };
      state.push(question);
      saveState(state);
    },
    sendQuestion: (state, action) => {
      state[action.payload["questionIndex"]]["question"] =
        action.payload["question"];
      saveState(state);
    },
    sendAnswer: (state, action) => {
      state[action.payload["questionIndex"]]["answers"].push(
        action.payload["answer"]
      );
      state[action.payload["questionIndex"]]["status"] = "answered";
      saveState(state);
    },
    deleteQuestion: (state, action) => {
      state.splice(action.payload, 1);
      saveState(state);
    },
    editQuesiton: (state, action) => {
      state[action.payload["questionIndex"]]["question"] =
        action.payload["question"];
      saveState(state);
    },
    deleteAnswer: (state, action) => {
      state[action.payload["questionIndex"]]["answers"].splice(
        action.payload["answerIndex"],
        1
      );
      if (state[action.payload["questionIndex"]]["answers"].length === 0) {
        state[action.payload["questionIndex"]]["status"] = "unanswered";
      }
      saveState(state);
    },
    toggleStatus: (state, action) => {
      state[action.payload["questionIndex"]]["status"] = action.payload["to"];
      saveState(state);
    },
  },
});

export default questionsModule;
