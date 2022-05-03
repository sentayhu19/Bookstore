const STATUs = 'COMPLETED';

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case STATUs:
      return [...state, 'Under construction'];
    default:
      return state;
  }
};
export const checkStatus = () => ({
  type: STATUs,
});
export default categoriesReducer;
