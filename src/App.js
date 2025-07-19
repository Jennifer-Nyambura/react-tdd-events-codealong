import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [mushroomIsChecked, setMushroomIsChecked] = useState(false);

  const toppings = ["Cheese"];
  if (pepperoniIsChecked) toppings.push("Pepperoni");
  if (mushroomIsChecked) toppings.push("Mushrooms");

  return (
    <div>
      <h1>Select Pizza Toppings</h1>

      <div>
        <input
          type="checkbox"
          id="pepperoni"
          checked={pepperoniIsChecked}
          aria-checked={pepperoniIsChecked}
          onChange={(e) => setPepperoniIsChecked(e.target.checked)}
        />
        <label htmlFor="pepperoni">Add Pepperoni</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="mushrooms"
          checked={mushroomIsChecked}
          aria-checked={mushroomIsChecked}
          onChange={(e) => setMushroomIsChecked(e.target.checked)}
        />
        <label htmlFor="mushrooms">Add Mushrooms</label>
      </div>

      <h2>Your Toppings:</h2>
      <ul>
        {toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
