import StatsLeft from "../components/stats-left";
import StatsRight from "../components/stats-right";
import styles from "./stats.module.css";

const Stats = () => {
  return (
    <div className={styles.formDiv}>
      <StatsLeft />
      <StatsRight />
    </div>
  );
};

export default Stats;
