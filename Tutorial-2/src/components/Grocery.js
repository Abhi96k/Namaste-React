import { groceryStyles } from "../CustomStyle/CustomStyle.js";

const Grocery = () => {
  return (
    <div className={groceryStyles.groceryContainer}>
      <div className={groceryStyles.groceryContent}>
        Our Grocery Store, and we have a lot of child components. This Web Page
      </div>
    </div>
  );
};

export default Grocery;
