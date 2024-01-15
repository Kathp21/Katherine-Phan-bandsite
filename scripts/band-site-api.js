 export class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://project-1-api.herokuapp.com";
    }

    getComments = async () => {
        try { 
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`)
            return response.data.sort((a, b) => {
                const timestampA = a.timestamp
                const timestampB = b.timestamp
                if (timestampA > timestampB) {
                    return -1
                }
                if (timestampA < timestampB) {
                    return 1
                }
                return 0
            })
        } catch(error) {
            console.error(error.message)
        }
    }

    postComment = async (comment) => {
        try {
            const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, 
                {
                    name: comment.name,
                    comment: comment.comment,
                }
            )
            return response.data
        } catch (error) {
            console.error(error.message)
        }
    }

    getShows = async () => {
        try {
            const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`)
            return response.data
        } catch (error) {
            console.error(error.message)
        }
    }
 }