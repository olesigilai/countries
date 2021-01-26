const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchData = async () => {
    try {
      const response = await fetch(catsAPI)
      const catName = await response.json()
      console.log(catName)

      catName.forEach(breed => {
        weight = ""
        breed.weight.metric.forEach(weights => {
            weight.metric += weights+ ", "
        })

        console.log(breed.weights )/breed
    })

    } catch (err) {
      console.log(err)
    }
  }
  fetchData()