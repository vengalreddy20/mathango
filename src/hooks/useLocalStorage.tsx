export const setDataFromLocalStorage = (type: string, data: any): void => {
  localStorage.setItem(type, JSON.stringify(data));
};

export const getDataFromLocalStorage = (type: string): any => {
  const item = localStorage.getItem(type);
  return item ? JSON.parse(item) : null;
};
