import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

//어떻게 특정 코드들이 첫번째 component render에서만 실행되게 할까
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  //state가 변할 때 마다 react는 rerende를 해준다. 그래서 굳이 rerender가 필요없는 코드는 useEffect를 이용해서 한번만 실행 할 수 있게함.
  console.log("I run all the time");
  useEffect(() => {
    console.log("call the API..");
  }, []);
  // then except run once, what should I do? If I want run specific code in specific situation like some value changes.
  useEffect(() => {
    console.log("I run only once");
  }, [keyword]);
  useEffect(() => {
    console.log("I run if counter changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run if counter & keyword changes");
  }, [keyword, counter]);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <input
        value={keyword}
        type="text"
        placeholder="Search Here.."
        onChange={onChange}
      />
      <button onClick={onClick}>Click me</button>
      <Button text={"continue"} />
    </div>
  );
}

export default App;
