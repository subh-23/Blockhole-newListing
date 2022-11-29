import styles from "./category-dropdown.module.css";

const CategoryDropdown = () => {
  return (
    <div className={styles.textfieldsDiv}>
      <div className={styles.selectDiv}>Select</div>
      <img
        className={styles.riarrowDropDownLineIcon}
        alt=""
        src="../riarrowdropdownline.svg"
      />
    </div>
  );
};

export default CategoryDropdown;
