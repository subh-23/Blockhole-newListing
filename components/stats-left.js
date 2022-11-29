import ExplicitSensitiveContent1 from "../components/explicit-sensitive-content1";
import SetThisItemAsExplicitAnd1 from "../components/set-this-item-as-explicit-and1";
import styles from "./stats-left.module.css";

const StatsLeft = () => {
  return (
    <div className={styles.frameDiv}>
      <ExplicitSensitiveContent1 />
      <SetThisItemAsExplicitAnd1 />
    </div>
  );
};

export default StatsLeft;
