import SelectSell from "../components/select-sell";
import Properties from "../components/properties";
import ScheduleToggle from "../components/schedule-toggle";
import styles from "./frame-component2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.frameDiv}>
      <SelectSell />
      <Properties />
      <div className={styles.formDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.explicitSensitiveContent}>
            Include ending price
          </div>
          <div className={styles.setThisItemAsExplicitAnd}>
            Adding an ending price will allow this listing to expire, or for the
            price to be reduced until a buyer is found.
          </div>
        </div>
        <div className={styles.togglesDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleDiv1} />
        </div>
      </div>
      <ScheduleToggle />
      <div className={styles.formDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.explicitSensitiveContent}>
            Bundle with other items
          </div>
          <div className={styles.setThisItemAsExplicitAnd}>
            This item will list with other items, all items will be included in
            this price
          </div>
        </div>
        <div className={styles.togglesDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleDiv1} />
        </div>
      </div>
      <div className={styles.formDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.explicitSensitiveContent}>
            Reserve for specific buyer
          </div>
          <div className={styles.setThisItemAsExplicitAnd}>
            Only buyer with matching hash code will be able to buy
          </div>
        </div>
        <div className={styles.togglesDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleDiv1} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
