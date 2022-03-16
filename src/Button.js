import PropTypes from "prop-types";
import styles from "./Button.module.css";
//creat-react-app은 css코드를 javascript오브젝트로 변환시켜준다.

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
