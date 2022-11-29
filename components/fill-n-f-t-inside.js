import ExplicitSensitiveContent from "../components/explicit-sensitive-content";
import SetThisItemAsExplicitAnd from "../components/set-this-item-as-explicit-and";
import styles from "./fill-n-f-t-inside.module.css";

const FillNFTInside = () => {
  return (
    <div className={styles.frameDiv}>
      <ExplicitSensitiveContent />
      <SetThisItemAsExplicitAnd />
    </div>
  );
};

export default FillNFTInside;
