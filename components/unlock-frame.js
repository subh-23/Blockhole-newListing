import ExplicitSensitiveContent2 from "../components/explicit-sensitive-content2";
import SetThisItemAsExplicitAnd2 from "../components/set-this-item-as-explicit-and2";
import styles from "./unlock-frame.module.css";

const UnlockFrame = () => {
  return (
    <div className={styles.frameDiv}>
      <ExplicitSensitiveContent2 />
      <SetThisItemAsExplicitAnd2 />
    </div>
  );
};

export default UnlockFrame;
