import Card from "./components/Card";
import Navbar from "./components/Navbar.js";
import dogData from "./dogData.js";

console.log(dogData)

export default function App() {
  const dogs = dogData.map(dog => {
    return (
      <Card 
        key={dog.key}
        dog={dog}
          />
    )
  })

  return (
    <div>
      <Navbar />
      <div className="dog-scroller">
        {dogs}
      </div>
    </div>
  );
}