export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("questions");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("questions", serializedState);
  } catch {
    console.log("save failed");
  }
};
