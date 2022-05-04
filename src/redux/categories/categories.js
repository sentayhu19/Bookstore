const STATUs = 'COMPLETED';
const categories = [
  'Action',
  'Adventure',
  'Biographies and Autobiographies',
  'Comic Book or Graphic Novel.',
  'Cookbooks',
  'Detective and Mystery',
  'Economy',
  'Fantasy',
  'Historical Fiction',
  'Horror',
  'Literary Fiction',
  'Romance',
  'Short Stories',
  'Suspense and Thrillers',
  'Sciences Fiction',
  'True Crime',
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
