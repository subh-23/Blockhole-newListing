import styles from "./category-heading.module.css";

const CategoryHeading = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.chooseCategoryDiv}>Choose category</div>
      <div className={styles.div}>*</div>
    </div>
  );
};

export default CategoryHeading;
