import styles from "./desc-heading.module.css";

const DescHeading = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.chooseCategoryDiv}>Description</div>
      <div className={styles.div}>*</div>
    </div>
  );
};

export default DescHeading;
