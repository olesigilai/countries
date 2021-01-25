const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchData = async () => {
    try {
      const response = await fetch(catsAPI)
      const catName = await response.json()
      console.log(catName)

      catName.forEach(breed => {
        weight = ""
        breed.weight.forEach(weights => {
            weight += weights.name + ", "
        })

        console.log(breed.name )
    })

    } catch (err) {
      console.log(err)
    }
  }
  console.log('===== async and await')
  fetchData()