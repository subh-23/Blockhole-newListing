import { FormControlLabel, Switch } from "@mui/material";
import RequiredFields from "../components/required-fields";
import FillNFTDetails from "../components/fill-n-f-t-details";
import UploadFiles from "../components/upload-files";
import Title from "../components/title";
import Description from "../components/description";
import Category from "../components/category";
import UnlockableContent from "../components/unlockable-content";
import Stats from "../components/stats";
import styles from "./frame-component1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.frameDiv}>
      <RequiredFields />
      <FillNFTDetails />
      <UploadFiles />
      <Title />
      <Description />
      <Category />
      <div className={styles.formDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.chooseCategoryDiv}>Choose collection</div>
          <div className={styles.div}>*</div>
        </div>
        <div className={styles.weWillIncludeALinkToThis}>
          We will include a link to this URL on this item's detail page, so that
          users can click to learn more about it.
        </div>
        <div className={styles.textfieldsDiv}>
          <div className={styles.selectDiv}>Select</div>
          <img
            className={styles.riarrowDropDownLineIcon}
            alt=""
            src="../riarrowdropdownline.svg"
          />
        </div>
      </div>
      <input
        className={styles.formInput}
        type="text"
        defaultValue="Add a link"
        placeholder="External link"
      />
      <UnlockableContent />
      <div className={styles.formDiv1}>
        <div className={styles.frameDiv2}>
          <div
            className={styles.chooseCategoryDiv}
          >{`Explicit & Sensitive Content`}</div>
          <div className={styles.setThisItemAsExplicitAnd}>
            Set this item as explicit and sensitive content
          </div>
        </div>
        <FormControlLabel
          label=""
          control={<Switch color="primary" size="medium" />}
        />
      </div>
      <input
        className={styles.formInput}
        type="text"
        defaultValue="The number of items that can be minted."
        placeholder="Supply"
      />
      <div className={styles.formDiv1}>
        <div className={styles.frameDiv2}>
          <div className={styles.chooseCategoryDiv}>Properties</div>
          <div className={styles.setThisItemAsExplicitAnd}>
            Textual traits that show up as rectangles
          </div>
        </div>
        <button className={styles.frameButton} autoFocus>
          <img className={styles.phplusIcon} alt="" src="../phplus.svg" />
          <div className={styles.addPropertyDiv}>Add Property</div>
        </button>
      </div>
      <div className={styles.formDiv1}>
        <div className={styles.frameDiv2}>
          <div className={styles.chooseCategoryDiv}>Levels</div>
          <div className={styles.setThisItemAsExplicitAnd}>
            Numerical traits that show as a progress bar
          </div>
        </div>
        <button className={styles.frameButton} autoFocus>
          <img className={styles.phplusIcon} alt="" src="../phplus1.svg" />
          <div className={styles.addPropertyDiv}>Add Level</div>
        </button>
      </div>
      <Stats />
    </div>
  );
};

export default FrameComponent1;
