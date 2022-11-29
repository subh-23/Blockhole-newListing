import styles from "./drag-dop.module.css";

const DragDop = () => {
  return (
    <button className={styles.frameButton}>
      <div className={styles.dragDropFile}>{`Drag & drop file`}</div>
      <div className={styles.orBrowseMediaOnYourDevice}>
        or browse media on your device
      </div>
    </button>
  );
};

export default DragDop;
