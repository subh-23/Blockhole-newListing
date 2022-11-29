import CreateANewListing from "../components/create-a-new-listing";
import FrameComponent from "../components/frame-component";
import Header from "../components/header";
import styles from "./index.module.css";

const CreateNewListing = () => {
  return (
    <div className={styles.createNewListing}>
      <CreateANewListing />
      <FrameComponent />
      <Header />
    </div>
  );
};

export default CreateNewListing;
