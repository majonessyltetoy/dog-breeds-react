import React, { useState, useEffect } from 'react';

function DogBreedTable() {
  const [breeds, setBreeds] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then(r => r.json())
      .then(data => {
        setBreeds(data)
        setLoading(false)
      })
  }, [])

  function renderTable() {
    return (
      <table>
        {breeds.map((breed:any, index) =>
          <tbody key={index}>
            <tr>
              <th>{breed.name}</th>
              <td rowSpan={2}><img src={breed.image.url} alt="img"/></td>
            </tr>
            <tr>
              <td>{breed.temperament}</td>
            </tr>
          </tbody>
        )}
      </table>
    )
  }

  return(
    <div>
      { loading ? "loading": renderTable() }
    </div>
  )
}

export default DogBreedTable;