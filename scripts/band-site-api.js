 export class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://project-1-api.herokuapp.com";
    }

    getComments = async () => {
        try { 
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`)
            console.log(response)
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
            console.log(response)
            return response.data
        } catch (error) {
            console.error(error.message)
        }
    }
 }






    // deleteComment = async (comment) => {
    //     try {
    //         const response = await axios.delete(`${this.baseUrl}/comments/${comment.id}?api_key=${this.apiKey}`, 
    //             {
    //                 name: comment.name,
    //                 comment: comment.comment,
    //             }
    //         )
    //         return response.data
    //         console.log(response)
    //     } catch (error) {
    //         console.error(error.message)
    //     }
    // }


// const api = new BandSiteApi("e666d163-2fe5-40c6-b626-ea9b5931346e")
// const comment = { id: "4e98cd71-6904-4b1e-8b41-721e345f1b6a" }

// const deleteCom = async (comment) => {
//     const comments = await api.deleteComment(comment)

// }
// deleteCom(comment)