export const isInArrayObject = (array, id) => {
  return array.filter((elem) => elem.id === id);
};

export const Increase = (state, id) => {
  const { selectedItems } = state;

  const newState = selectedItems.map((item) => {
    if (item.id === id) {
      return { ...item, count: item.count + 1 };
    }
    return item;
  });

  return newState;
};

export const Decrease = (state, id) => {
  const { selectedItems } = state;
  const newState = selectedItems.map((item) => {
    if (item.id === id) {
      if (item.count >= 1) {
        return { ...item, count: item.count - 1 };
      } else {
        item.count = 0;
      }
    }
    return item;
  });
  return newState;
};

export const Empty = (state, id) => {
  const { selectedItems } = state;
  const newState = selectedItems.filter((item) => item.id !== id);
  console.log("Empty",newState)
  return newState;
};
