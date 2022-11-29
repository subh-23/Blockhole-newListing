import CategoryHeading from "../components/category-heading";
import CategoryDropdown from "../components/category-dropdown";
import styles from "./category.module.css";

const Category = () => {
  return (
    <div className={styles.formDiv}>
      <CategoryHeading />
      <div className={styles.weWillIncludeALinkToThis}>
        We will include a link to this URL on this item's detail page, so that
        users can click to learn more about it.
      </div>
      <CategoryDropdown />
    </div>
  );
};

export default Category;
