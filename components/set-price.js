import styles from "./set-price.module.css";

const SetPrice = () => {
  return (
    <button className={styles.button} autoFocus>
      <div className={styles.setPriceDiv}>Set Price</div>
    </button>
  );
};

export default SetPrice;
