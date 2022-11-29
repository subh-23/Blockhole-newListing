import styles from "./frame-component4.module.css";

const FrameComponent4 = () => {
  return (
    <div className={styles.frameDiv}>
      <img
        className={styles.phwarningCircleFillIcon}
        alt=""
        src="../phwarningcirclefill.svg"
      />
      <div className={styles.minimumPriceIsETH004Or}>
        Minimum price is ETH 0.04 or $500 for this category
      </div>
    </div>
  );
};

export default FrameComponent4;
