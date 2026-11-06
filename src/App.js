import "./App.css";
import CourseItem from "./components/CourseItem/CourseItem";

function App() {
  //             0     1      2
  // const array = [1, "Hello", false]

  // console.log(array[0])
  // console.log(array[0])
  // console.log(array[1])

  // props - объект с данными которые передаются в компонент

  return (
    <div className="App">
      <h1>CATS</h1>

      <div className="coursesList">
        <CourseItem
          title={"HTML PROPS"}
          duration={"3"}
          descr={"Html - course its like"}
        />
      </div>
    </div>
  );
}

export default App;

// import - мы что запршиваем компонент
// Import "название компонента" from (из или от куда) ""
