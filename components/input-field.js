import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import styles from "./input-field.module.css";

const InputField = () => {
  return (
    <div className={styles.frameDiv}>
      <FrameComponent3 />
      <FrameComponent4 />
    </div>
  );
};

export default InputField;
