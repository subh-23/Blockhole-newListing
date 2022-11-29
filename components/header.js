import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <div className={styles.frameDiv}>
        <img className={styles.frameIcon} alt="" src="../frame-10.svg" />
        <img className={styles.blockHoleIcon} alt="" src="../blockhole.svg" />
      </div>
      <div className={styles.frameDiv1}>
        <img
          className={styles.risearchLineIcon}
          alt=""
          src="../risearchline.svg"
        />
        <div className={styles.navLinksDiv}>
          <div className={styles.homeDiv}>Home</div>
          <textarea className={styles.rectangleTextarea} />
        </div>
        <div className={styles.navLinksDiv}>
          <div className={styles.homeDiv}>Explore</div>
          <input className={styles.rectangleTextarea} type="text" />
        </div>
        <div className={styles.navLinksDiv}>
          <div className={styles.homeDiv}>Rankings</div>
          <textarea className={styles.rectangleTextarea} />
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.homeDiv}>Create</div>
          <div className={styles.rectangleDiv} />
        </div>
      </div>
      <button className={styles.button} autoFocus>
        <div className={styles.connectWalletDiv}>Connect Wallet</div>
      </button>
    </div>
  );
};

export default Header;
