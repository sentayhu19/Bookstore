const STATUs = 'COMPLETED';
const categories = [
  'Action',
  'Adventure',
  'Economy',
  'Sciences Fiction',
];
const categoriesReducer = (state = categories, action) => {
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
