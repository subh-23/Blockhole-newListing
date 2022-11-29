import Textfields1 from "../components/textfields1";
import Textfields2 from "../components/textfields2";
import styles from "./frame-component3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.frameDiv}>
      <Textfields1 />
      <Textfields2 />
    </div>
  );
};

export default FrameComponent3;
