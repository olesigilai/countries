const countriesAPI = 'https://restcountries.eu/rest/v2/all'

const fetchData = async () => {
try {
        const response = await axios.get(countriesAPI)
        
        const countries = await response.json()
        
        countries.forEach(country => {
            languages = ""
            country.languages.forEach(language => {
                languages += language.name + ", "
            })

            console.log(country.name +  country.capital  + country.languages  + country.population  + country.area)
        })
        
    } catch (err) {
        console.log(err)
    }
}
fetchData()