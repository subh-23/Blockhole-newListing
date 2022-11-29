import styles from "./upload-heading.module.css";

const UploadHeading = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.uploadFilesDiv}>Upload files</div>
      <div className={styles.div}>*</div>
    </div>
  );
};

export default UploadHeading;
