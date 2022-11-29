import FrameComponent1 from "../components/frame-component1";
import VectorIcon from "../components/vector-icon";
import FrameComponent2 from "../components/frame-component2";
import CreateButton from "../components/create-button";
import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameDiv}>
      <FrameComponent1 />
      <VectorIcon />
      <FrameComponent2 />
      <CreateButton />
    </div>
  );
};

export default FrameComponent;
