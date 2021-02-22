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
        const { name, image } = breed
        const { url } = image
        return (
          <tr key={index}>
            <td>{name}</td>
            <td><img src={url} width="100" height="100" /></td>
          </tr>
        )
      })
    )
  }

  return(
    <div>
    { loading ? "loading":
      <table>
        <tbody>
          {renderTable()}
        </tbody>
      </table>
    }
    </div>
  )
}

export default DogBreedTable;