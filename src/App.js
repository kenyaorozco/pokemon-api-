import './App.css';
import React,{useState} from 'react';


function App() {

  // create another function to get access to the information from the request made
  const [getPokemon,setGetPokemon] = useState([])

// Create a function 
const pokemon = () => {

  fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  .then(response => {
    return response.json();
  }).then(apiResponse =>{
    console.log(apiResponse.results)
    // GRAB SPECIFIC info from the results in the info it returned on the console on the browser
    setGetPokemon(apiResponse.results);
  })
  .catch(rejected =>{
    console.log(rejected);
  })
}
  

  return (
    <div className="App">
      {/* using the main function created to get the infro from the api it will be used to when the button is clicked to invoke that function */}
      <button onClick={pokemon}>Fetch Pokemon</button>
      {
        getPokemon.map((pokemon,num) =>{
          return <li key={num}>{pokemon.name}</li>
        })

      
      }
    </div>
  );
}

export default App;
