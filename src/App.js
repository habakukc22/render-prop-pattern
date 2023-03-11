import Input from "./components/Input";
import Fahrenheit from "./components/Fahrenheit";
import Kelvin from "./components/Kelvin";

export default function App() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}
