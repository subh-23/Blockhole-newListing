import ExplicitSensitiveContent3 from "../components/explicit-sensitive-content3";
import SetThisItemAsExplicitAnd3 from "../components/set-this-item-as-explicit-and3";
import styles from "./select-sell-text.module.css";

const SelectSellText = () => {
  return (
    <div className={styles.frameDiv}>
      <ExplicitSensitiveContent3 />
      <SetThisItemAsExplicitAnd3 />
    </div>
  );
};

export default SelectSellText;
