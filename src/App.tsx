import "./App.css";
import Button from "./components/button/Button";
import Text from "./components/text/Text";

function App() {
  return (
    <>
      <Button variant="light" id="first-button"><Text>test button</Text></Button>
      <Text>test button</Text>
    </>
  );
}

export default App;
