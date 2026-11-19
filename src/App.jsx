import { useState } from "react";
import animals from "./data";
import Search from "./search";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  // Filter animals based on what the user types
  const filteredAnimals = animals.filter((pet) =>
    pet.animal.toLowerCase().includes(search.toLowerCase().trim()),
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My Favorite Animals</h1>

      <Search search={search} setSearch={setSearch} />

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Animal</th>
            <th>Specialty</th>
          </tr>
        </thead>

        <tbody>
          {filteredAnimals.map((pet) => (
            <tr key={pet.id}>
              <td>
                <img src={pet.image} alt={pet.name} width="100" />
              </td>
              <td>{pet.name}</td>
              <td>{pet.animal}</td>
              <td>{pet.specialty}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredAnimals.length === 0 && (
        <p className="text-center">No animals found.</p>
      )}
    </div>
  );
}

export default App;
