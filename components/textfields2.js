import styles from "./textfields2.module.css";

const Textfields2 = () => {
  return (
    <div className={styles.textfieldsDiv}>
      <div className={styles.eTHDiv}>ETH</div>
      <img
        className={styles.phcaretDownBoldIcon}
        alt=""
        src="../phcaretdownbold.svg"
      />
    </div>
  );
};

export default Textfields2;
