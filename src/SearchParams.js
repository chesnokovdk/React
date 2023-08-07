import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown';
import Results from './Results';

const SearchParams = () => {
  //   const location = "Seattle, WA_location!";

  const [my_locationok1, myNameLocation] = useState("Seattle, WA_location!_123");
  // const [animal, setAnimal] = useState("dog!");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  // const [breed, setBreed] = useState("");
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const {animals} = await pet.animals({
      location,
      breed,
      type:animal
    })

    setPets(animals || []);
  }
  
useEffect(() => {
  // pet.breeds("dog").then(console.log, console.error);
  setBreeds([]);
  setBreed("");

  pet.breeds(animal).then(({ breeds: anotherBreeds }) => {
    const breedStrings = anotherBreeds.map(({name }) => name);
    setBreeds(breedStrings);
  }, console.error);
}, [animal, setBreed, setBreeds]);

  // console.log('state of location', location);

  return (
    <div className="search-params">
      <h1>{my_locationok1}</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location_label
          <input
            id="location"
            value={my_locationok1}
            placeholder="location_here"
            onChange={(event) => myNameLocation(event.target.value)}
          />
        </label>


        {/* <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(event) => setAnimal(event.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option> All</option>
            {ANIMALS.map((animal) => (
              <option value={animal} key="q">
                {" "}
                {animal}{" "}
              </option>
            ))}
          </select>
        </label> */}

        {/* <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            // disabled={!breeds.length}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map(breedString => (
              <option key={breedString} value={breedString} >
                {breedString}
                </option>
            ))}
          </select>
        </label> */}

        <AnimalDropdown/>
        <BreedDropdown/>

        {/* <h3 style={{border: "1px solid black", borderColor: "green", color: "red"}}>Line in form</h3> */}

        
        <button>Submit_button</button>
      </form>
      <h2>KVA-KVA-KVA</h2>
      <Results pets={pets}/>
      
      {/* <h2>FUch how does it work?!_4</h2> */}
    </div>
  );
};

export default SearchParams;
