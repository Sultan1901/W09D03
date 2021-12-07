const initialState = {
  task: []
};
const taskRD = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET":
      return payload;
    case "ADD":
      const task = [...state.task, payload];
      return state;

    case "DELETE":
      return { task };
    default:
      return state;
  }
};
export default taskRD;

export const gettask = (data) => {
  return {
    type: "GET",
    payload:{task : data},
  };
};
export const addtask = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};
export const deltask = (data) => {
  return {
    type: "DELETE",
    payload: data,
  };
};
