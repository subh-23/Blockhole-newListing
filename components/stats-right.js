import styles from "./stats-right.module.css";

const StatsRight = () => {
  return (
    <button className={styles.frameButton}>
      <img className={styles.phplusIcon} alt="" src="../phplus1.svg" />
      <div className={styles.addPropertyDiv}>Add Stat</div>
    </button>
  );
};

export default StatsRight;
