import React, { useState, useEffect } from 'react';


interface Breed{
  id: number
  name: string
  description: string // unused
  temperament: string
  image: {
    width: number     // unused
    height: number    // unused
    url: string
  }
}

const API_URL = "https://api.thedogapi.com/v1/breeds"

function DogBreedTable() {
  const [breeds, setBreeds] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(API_URL)
      .then(r => r.json())
      .then(data => {
        setBreeds(data)
        setLoading(false)
      }, (error) => {
        if (error){
          alert("Could not load\n"+API_URL)
        }})
  }, [])

  function renderTable() {
    return (
      <table>
        {breeds.map((breed: Breed) =>
          <tbody key={breed.id}>
            <tr>
              <th>{breed.name}</th>
              <td rowSpan={2}><img src={breed.image.url} alt="img" /></td>
            </tr>
            <tr>
              <td>{breed.temperament}</td>
            </tr>
          </tbody>
        )}
      </table>
    )
  }

  return (
    <div>
      { loading ? "loading" : renderTable()}
    </div>
  )
}

export default DogBreedTable;