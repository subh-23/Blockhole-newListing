import styles from "./title.module.css";

const Title = () => {
  return (
    <input
      className={styles.formInput}
      type="text"
      defaultValue="Name of your NFT"
      placeholder="Title"
    />
  );
};

export default Title;
