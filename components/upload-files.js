import UploadHeading from "../components/upload-heading";
import AcceptedFormatsImageJPG from "../components/accepted-formats-image-j-p-g";
import DragDrop from "../components/drag-drop";
import styles from "./upload-files.module.css";

const UploadFiles = () => {
  return (
    <div className={styles.formDiv}>
      <UploadHeading />
      <AcceptedFormatsImageJPG />
      <DragDrop />
    </div>
  );
};

export default UploadFiles;
