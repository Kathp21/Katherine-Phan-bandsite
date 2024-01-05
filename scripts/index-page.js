const previousComment = [
    {
        image : "image",
        userName : "Connor Walton",
        date : "02/17/2021",
        content: "This is art. This is inexplicable magic expressed in the purest way, \
        everything that makes up this majestic work deserves reverence. \
        Let us appreciate this for what it is and what it contains."
    },
    {
        image : "image",
        userName : "Emilie Beach",
        date : "01/09/2021",
        content: "I feel blessed to have seen them in person. What a show! They were just perfection. \
        If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        image : "image",
        userName : "Miles Acosta",
        date : "12/20/2020",
        content: "I can't stop listening. Every time I hear one of their songs - the vocals - \
        it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity.\
         Can't get enough."
    }
]
// const form = document.querySelector("comment__section");

const commentList = document.getElementById('commentList')

const addCommentToPage = (comment) => {
    const commentEl = document.createElement('li')
    commentEl.classList.add('comment__list-column')

    const imageEl = document.createElement('span')
    const nameEl = document.createElement('span')
    const contentEl = document.createElement('span')
    const dateEl = document.createElement('span')

    imageEl.classList.add('comment__data')
    nameEl.classList.add('comment__data')
    contentEl.classList.add('comment__data')
    dateEl.classList.add('comment__data')

    imageEl.innerText = comment.image
    nameEl.innerText = comment.userName
    contentEl.innerText = comment.content
    dateEl.innerText = comment.date

    commentEl.appendChild(imageEl)
    commentEl.appendChild(dateEl)
    commentEl.appendChild(nameEl)
    commentEl.appendChild(contentEl)
    
    // const commentUserDetails = document.createElement('div')
    // commentUserDetails.classList.add('comment__user-info')

    // commentUserDetails.appendChild(imageEl)
    // commentUserDetails.appendChild(nameEl)
    // commentUserDetails.appendChild(dateEl)

    // commentList.appendChild(commentUserDetails)
    
    commentList.appendChild(commentEl)
}



previousComment.forEach((comment) => {
    addCommentToPage(comment)
})