import "./App.css";
import StaticButtons from "./StaticButtons";
import CustomizableButton from "./CustomizableButton";

function App() {
  return (
    <div>
      <CustomizableButton />
      <hr className="mt-20 w-5/6 mx-auto" />
      <StaticButtons />
    </div>
  );
}

export default App;
