const previousComment = [
    {
        image : "https://placehold.co/400",
        userName : "Connor Walton",
        date : "02/17/2021",
        content: "This is art. This is inexplicable magic expressed in the purest way, \
        everything that makes up this majestic work deserves reverence. \
        Let us appreciate this for what it is and what it contains."
    },
    {
        image : "",
        userName : "Emilie Beach",
        date : "01/09/2021",
        content: "I feel blessed to have seen them in person. What a show! They were just perfection. \
        If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        image : "",
        userName : "Miles Acosta",
        date : "12/20/2020",
        content: "I can't stop listening. Every time I hear one of their songs - the vocals - \
        it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity.\
         Can't get enough."
    }
]
// const form = document.querySelector("comment__section");

const commentList = document.getElementById('commentList')

// const addCommentToPage = (comment) => {
//     const commentEl = document.createElement('div')
//     commentEl.classList.add('comment__list-column')

//     const imageEl = document.createElement('p')
//     const nameEl = document.createElement('p')
//     const contentEl = document.createElement('p')
//     const dateEl = document.createElement('p')

//     imageEl.classList.add('comment__data')
//     nameEl.classList.add('comment__data')
//     contentEl.classList.add('comment__data')
//     dateEl.classList.add('comment__data')

//     imageEl.setAttribute('src',comment.image)
//     nameEl.innerText = comment.userName
//     contentEl.innerText = comment.content
//     dateEl.innerText = comment.date

//     commentEl.appendChild(imageEl)
//     commentEl.appendChild(dateEl)
//     commentEl.appendChild(nameEl)
//     commentEl.appendChild(contentEl)
    
//      commentList.appendChild(commentEl)

//      const commentList = document.getElementById('commentList')

const commentContainer = document.querySelector('.comment-container')

const addCommentToPage = (comment) => {
    const indComContainer = document.createElement('div')
    indComContainer.classList.add('comment-container__divider')
    commentContainer.appendChild(indComContainer)

    const profileImg = document.createElement('div')
    profileImg.classList.add('comment-container__img')
    indComContainer.appendChild(profileImg)


    //create a div for info, name, date and content
    const comContainerInfo = document.createElement('div')
    indComContainer.appendChild(comContainerInfo)

    //creat div for comment-container__info
    const containerInfo = document.createElement('div')
    containerInfo.classList.add('comment-container__info')
    comContainerInfo.appendChild(containerInfo)

    //create <p> tag for Name and Date
    const comName = document.createElement('p')
    comName.classList.add('comment-container__name')
    const comDate = document.createElement('p')
    comDate.classList.add('comment-container__date')

    containerInfo.appendChild(comName)
    containerInfo.appendChild(comDate)

    //create <p> tag and add to <div> comment-container__info
    const comContent = document.createElement('p')
    comContent.classList.add('comment-container__content')
    comContainerInfo.appendChild(comContent)

    // profileImg.setAttribute('src',comment.image)
    // profileImg.innerText = comment.image
    comName.innerText = comment.userName
    comContent.innerText = comment.content
    comDate.innerText = comment.date

    
   

    //  const commentName = document.querySelector('.comment-container__name')
    //  commentName.innerText = comment.userName

    //  const commentDate = document.querySelector('.comment-container__date')
    //  commentDate.innerText = comment.date

    //  const commentContent = document.querySelector('.comment-container__content')
    //  commentContent.innerText = comment.content

}



previousComment.forEach((comment) => {
    addCommentToPage(comment)
})