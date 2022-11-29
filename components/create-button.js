import styles from "./create-button.module.css";

const CreateButton = () => {
  return (
    <button className={styles.component3Button} autoFocus>
      <button className={styles.button} autoFocus>
        <div className={styles.buttonDiv}>Create</div>
      </button>
    </button>
  );
};

export default CreateButton;
