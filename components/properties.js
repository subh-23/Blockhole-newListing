import PropertiesHeading from "../components/properties-heading";
import InputField from "../components/input-field";
import styles from "./properties.module.css";

const Properties = () => {
  return (
    <div className={styles.div}>
      <PropertiesHeading />
      <InputField />
    </div>
  );
};

export default Properties;
