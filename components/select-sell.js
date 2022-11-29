import SelectSellText from "../components/select-sell-text";
import SelectSellButtons from "../components/select-sell-buttons";
import styles from "./select-sell.module.css";

const SelectSell = () => {
  return (
    <div className={styles.formDiv}>
      <SelectSellText />
      <SelectSellButtons />
    </div>
  );
};

export default SelectSell;
