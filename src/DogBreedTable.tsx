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
        breeds.map((breed, index) => {
        const { name, temperament, image } = breed
        const { url } = image
        return (
          <tbody>
            <tr key={index}>
              <th>{name}</th>
              <td rowSpan={2}><img src={url} /></td>
            </tr>
            <tr>
              <td>{temperament}</td>
            </tr>
          </tbody>
        )
      })
    )
  }

  return(
    <div>
    { loading ? "loading":
      <table>
          {renderTable()}
      </table>
    }
    </div>
  )
}

export default DogBreedTable;