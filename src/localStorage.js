export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("questions");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    alert("データの読み込みに失敗しました。");
    return [];
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("questions", serializedState);
  } catch {
    alert("保存に失敗しました。");
  }
};
