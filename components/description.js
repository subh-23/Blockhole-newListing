import DescHeading from "../components/desc-heading";
import Textfields from "../components/textfields";
import styles from "./description.module.css";

const Description = () => {
  return (
    <div className={styles.formDiv}>
      <DescHeading />
      <div className={styles.weWillIncludeALinkToThis}>
        We will include a link to this URL on this item's detail page, so that
        users can click to learn more about it.
      </div>
      <Textfields />
    </div>
  );
};

export default Description;
