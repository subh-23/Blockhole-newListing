import styles from "./textfields.module.css";

const Textfields = () => {
  return (
    <input
      className={styles.textfieldsInput}
      type="text"
      placeholder="Describe your NFT"
    />
  );
};

export default Textfields;
