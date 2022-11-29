import DragDop from "../components/drag-dop";
import styles from "./drag-drop.module.css";

const DragDrop = () => {
  return (
    <div className={styles.frameDiv}>
      <DragDop />
    </div>
  );
};

export default DragDrop;
