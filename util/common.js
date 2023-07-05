import { hash } from "bcryptjs";

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
  return newState;
};

export const sumItems = (items) => {
  const itemsCounter = items.reduce((total, item) => total + item.count, 0);
  return itemsCounter;
};

export const minceItem = (state, id) => {
  const itemsCounter = state.selectedItems.map((item) => {
    if (item.id === id) {
      return (state.totalCount = state.totalCount - item.count);
    }
  });
  return itemsCounter;
};

export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  console.log(hashedPassword);
  return hashedPassword;
}
