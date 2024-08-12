import Card from "./components/Card";
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
      <h1>I'm the app</h1>
      <div className="dog-scroller">
        {dogs}
      </div>
    </div>
  );
}