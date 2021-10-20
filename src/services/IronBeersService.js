import axios from "axios"


const service = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
})


const IRON_BEERS_SERVICE = {
    

    // list all beers
    listAllBeers: () => {
        return service.get('/')
                      .then( beers => {
                          const allBeers = beers.data
                          console.log(allBeers)
                          return allBeers
                      })
                      .catch( err => console.log(err))


    },

    // get details from beer
    getBeerById: (id) => {
        
        return service.get('/'+id)
    },
    
    // get a random beer
    getRandomBeer: () => {
        return service.get('/random')
    },
    
    
    // add a new beer
    addNewBeer: () => {
        return service.get('/new')
    },


    // search a beer
    searchForBeers: () => {
        // return service.get('/search?q='+{query})
    }
}

export default IRON_BEERS_SERVICE