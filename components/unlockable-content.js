import { FormControlLabel, Switch } from "@mui/material";
import UnlockFrame from "../components/unlock-frame";
import styles from "./unlockable-content.module.css";

const UnlockableContent = () => {
  return (
    <div className={styles.formDiv}>
      <UnlockFrame />
      <FormControlLabel label="" control={<Switch />} />
    </div>
  );
};

export default UnlockableContent;
