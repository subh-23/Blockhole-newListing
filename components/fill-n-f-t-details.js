import FillNFTInside from "../components/fill-n-f-t-inside";
import styles from "./fill-n-f-t-details.module.css";

const FillNFTDetails = () => {
  return (
    <div className={styles.formDiv}>
      <FillNFTInside />
      <div className={styles.selectDiv}>
        <button className={styles.button} autoFocus>
          <div className={styles.setPriceDiv}>Set Price</div>
        </button>
        <div className={styles.div}>
          <div className={styles.highestBidDiv}>Highest Bid</div>
        </div>
      </div>
    </div>
  );
};

export default FillNFTDetails;
