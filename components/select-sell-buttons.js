import SetPrice from "../components/set-price";
import HighestBid from "../components/highest-bid";
import styles from "./select-sell-buttons.module.css";

const SelectSellButtons = () => {
  return (
    <div className={styles.selectDiv}>
      <SetPrice />
      <HighestBid />
    </div>
  );
};

export default SelectSellButtons;
