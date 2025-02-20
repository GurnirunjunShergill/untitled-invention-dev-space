import "./App.css";
import ButtonGroup from "./components/button-group/ButtonGroup";
import Button from "./components/button/Button";
import Checkbox from "./components/checkbox/Checkbox";
import Input from "./components/input/Input";
import Text from "./components/text/Text";

function App() {
  return (
    <>
      <Button variant="light" id="first-button"><Text>test button</Text></Button>
      <Text>test button</Text>
      <ButtonGroup>
        <Button variant="light" id="second-button"><Text>test button 1</Text></Button>
        <Button variant="dark" id="third-button"><Text>test button 2</Text></Button>
        <Button variant="light" id="fourth-button"><Text>test button 3</Text></Button>
      </ButtonGroup>
      <ButtonGroup listHorizontal={true}>
        <Button variant="light" id="second-button"><Text>test button 1</Text></Button>
        <Button variant="dark" id="third-button"><Text>test button 2</Text></Button>
        <Button variant="light" id="fourth-button"><Text>test button 3</Text></Button>
      </ButtonGroup>
      <Checkbox htmlForId={"checkbox-1"} children={<Text>checkbox</Text>}/>
      <Input/>
    </>
  );
}

export default App;
