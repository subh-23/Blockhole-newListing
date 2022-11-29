import FrameComponent5 from "../components/frame-component5";
import styles from "./schedule-toggle.module.css";

const ScheduleToggle = () => {
  return (
    <div className={styles.formDiv}>
      <FrameComponent5 />
      <div className={styles.togglesDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
      </div>
    </div>
  );
};

export default ScheduleToggle;
