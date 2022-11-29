import styles from "./properties-heading.module.css";

const PropertiesHeading = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.propertiesDiv}>Properties</div>
      <div className={styles.addingAnEndingPriceWillAl}>
        Adding an ending price will allow this listing to expire, or for the
        price to be reduced until a buyer is found.
      </div>
    </div>
  );
};

export default PropertiesHeading;
