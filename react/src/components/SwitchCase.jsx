import CustomCase from "./CustomCase"
import CustomSwitch from "./CustomSwitch"
import DefaultCase from "./DefaultCase"

function SwitchCase() {
  return (
   <CustomSwitch value={60}>
    <CustomCase value={(e)=>e<10}>
        <div>Hello 20</div>
    </CustomCase>
    <CustomCase value={20}>Hello 20</CustomCase>
    <CustomCase value={30}>Hello 30</CustomCase>
    <CustomCase value={10}>
        <div>Hello 20</div>
    </CustomCase>
    <DefaultCase>Hello 40</DefaultCase>
   </CustomSwitch>
  )
}

export default SwitchCase