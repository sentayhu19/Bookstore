const STATUS = 'COMPLETED';

const categoriesReducer = (state = '', action) => {
  const info = 'Under construction';
  switch (action.type) {
    case STATUS:
      return info;
    default:
      return state;
  }
};
export const checkStatus = () => ({
  type: STATUS,
});
export default categoriesReducer;
