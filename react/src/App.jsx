import { useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AutoSuggestions from "./pages/AutoSuggestions";
import SwitchCase from "./components/SwitchCase";
import Comment from "./components/Comment";
import useDebounce from "./hooks/useDebounce";
import useToggle from "./hooks/useToggle";
import CaptureProductVisible from "./components/CaptureProductVisible";
import AnimateProgessBar from "./components/AnimateProgessBar";
import AnimateMultipleBar from "./components/AnimateMultipleBar";
import Counter from "./components/Counter";
import TrafficLight from "./components/TrafficLight";
import InfiniteScrolling from "./components/InfiniteScrolling";
import GoogleSheet from "./components/GoogleSheet";
import NestedFolder from "./components/NestedFolder";
import FlattenAndMap from "./components/FlattenAndMap";
import NestedCheckbox from "./components/NestedCheckbox";
import NestedAccordion from "./components/NestedAccordion";
import PaginationWithEllipis from "./components/PaginationWithEllipis";
import SnackBar from "./components/SnackBar";
import TabWithLazyLoadingChildren from "./components/TabWithLazyLoadingChildren";
import Homepage from "./commonComponents/Homepage";
import { About,Contact } from "./commonComponents/DummyPages";
import SidebarWrapper from "./components/SidebarWrapper";
import ChangeColorOfTheSquare from "./components/ChangeColorOfTheSquare";
import GridWithIncrementalValues from "./components/GridWithIncrementalValues";
import StopWatch from "./components/StopWatch";
import TabForm from "./components/TabForm";
import OtpInput from "./components/OtpInput";

function App() {
  // const [count, setCount] = useState(0)
  // const [text, setText] = useState("");
  //  const handleChange = (value) => {
  //   console.log("Debounced value:", value);
  // }
  // const debouncedFn=useDebounce(handleChange,400);
  const arr = [1, 2, 3, 4, 5, 6];
  const [toggle, value] = useToggle(arr, 2);

  return (
    <>
      {/* <Router>
      <Routes>
        <Route path="/" element={<AutoSuggestions/>}/>
       </Routes>
    </Router> */}
      {/* <SwitchCase/> */}
      {/* <input
      value={text}
      onChange={(e) => {
        const value=e.target.value;
         setText(value);
         debouncedFn(value)
      }}
      placeholder="Type something..."
    /> */}
      {/* <Comment/> */}
      {/* <div>
      <p>Current Value is::{value} and element is ::: {arr[value]}</p>
      <button onClick={toggle}>Toggle</button>
     </div> */}
      {/* <CaptureProductVisible/> */}
      {/* <AnimateProgessBar/> */}
      {/* <AnimateMultipleBar/> */}
      {/* <Counter/> */}
      {/* <TrafficLight/> */}
      {/* <InfiniteScrolling/> */}
      {/* <GoogleSheet/> */}
      {/* <NestedFolder/> */}
      {/* <FlattenAndMap/> */}
      {/* <NestedCheckbox/> */}
      {/* <NestedAccordion/> */}
      {/* <PaginationWithEllipis/> */}
      {/* <TabWithLazyLoadingChildren /> */}
      {/* <SnackBar/> */}
    
      {/* <Router>
        <Routes>
          <Route element={<SidebarWrapper/>}>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </Router> */}
      {/* <ChangeColorOfTheSquare/> */}
      {/* <GridWithIncrementalValues/> */}
      {/* <StopWatch/> */}
      {/* <TabForm/> */}
      <OtpInput/>
    </>
  );
}

export default App;
