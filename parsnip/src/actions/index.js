let _id = 1;

export const uniquId = () => {
  return _id++;
};

export const createTask = ({ title, description }) => {
  return {
    type: "CREATE_TASK",
    payload: {
      id: uniquId(),
      title,
      description,
      status: "Unstarted"
    }
  };
};
