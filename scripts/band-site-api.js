 export class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://project-1-api.herokuapp.com";
    }

    getComments = async () => {
        try { 
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`)
            return response.data
        } catch(error) {
            console.error(error.message)
        }
    }
}

const api = new BandSiteApi("a6b57c51-47cb-4915-9d1a-70b3cb940dfd")

const displayComments = async () => {
    const comments = await api.getComments()
    comments.forEach(comment => {
        console.log(comment) // debug

    })
}

displayComments()

// // const comments = api.getComments()
// // console.log(comments)

