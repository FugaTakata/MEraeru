import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../localStorage";
import { formatDate } from "../dateFormatter";

const localState = loadState();

const questionsModule = createSlice({
  name: "questions",
  initialState: localState,
  reducers: {
    createQuestion: (state, action) => {
      const { title, question, tags } = action.payload;
      const createdAt = formatDate(new Date(), "yyyy-MM-dd");
      state.push({
        title: title,
        question: question,
        answer: "",
        createdAt,
        tags: tags,
      });
      saveState(state);
    },
    sendAnswer: (state, action) => {
      const { answer, index } = action.payload;
      state[index]["answer"] = answer;
      saveState(state);
    },
    deleteQuestion: (state, action) => {
      const { index } = action.payload;
      state.splice(index, 1);
      saveState(state);
    },
    editQuesiton: (state, action) => {
      const { title, question, tags, index } = action.payload;
      if (title) {
        state[index]["title"] = title;
      }
      if (question) {
        state[index]["question"] = question;
      }
      if (tags) {
        state[index]["tags"] = tags;
      }
      saveState(state);
    },
  },
});

export default questionsModule;
