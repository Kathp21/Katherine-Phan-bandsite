// const previousComment = [
//     {
//         userName : "Connor Walton",
//         date : "02/17/2021",
//         content: "This is art. This is inexplicable magic expressed in the purest way, \
//         everything that makes up this majestic work deserves reverence. \
//         Let us appreciate this for what it is and what it contains."
//     },
//     {
//         userName : "Emilie Beach",
//         date : "01/09/2021",
//         content: "I feel blessed to have seen them in person. What a show! They were just perfection. \
//         If there was one day of my life I could relive, this would be it. What an incredible day."
//     },
//     {
//         userName : "Miles Acosta",
//         date : "12/20/2020",
//         content: "I can't stop listening. Every time I hear one of their songs - the vocals - \
//         it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity.\
//          Can't get enough."
//     }
// ]

import { BandSiteApi } from "./band-site-api.js";

// Calling the constructor 
const api = new BandSiteApi("e666d163-2fe5-40c6-b626-ea9b5931346e")

// Get comment
const displayComments = async () => {
    const comments = await api.getComments()
    comments.forEach((comment) => {
        addCommentToPage(comment)
    })
}

displayComments()

/* The function is an asynchronous function that take 1 comment. 
It calls the postComment method inside BandSiteApi. Then the function
adds the new comment to the bottom of the comment section. */
const postComment = async (comment) => {
    const newComment = await api.postComment(comment)
    addCommentOnTopOfPage(newComment)
}

const commentContainer = document.querySelector('.comment-container')

const divider = document.createElement('div')
divider.classList.add('comment-container__line')
commentContainer.appendChild(divider)

const createCommentElement = (comment) => {
    const indComContainer = document.createElement('div')
    indComContainer.classList.add('comment-container__divider')

    const profileImg = document.createElement('div')
    profileImg.classList.add('comment-container__img')
    indComContainer.appendChild(profileImg)

    //create a div for info, name, date and content
    const comContainerInfo = document.createElement('div')
    comContainerInfo.classList.add('comment-container__header')
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

    comName.innerText = comment.name
    comContent.innerText = comment.comment
    comDate.innerText = formatTimestamp(comment.timestamp)

    return indComContainer
}

const addCommentOnTopOfPage = (comment) => {
    commentContainer.prepend(createCommentElement(comment))
}

const addCommentToPage = (comment) => {
    commentContainer.appendChild(createCommentElement(comment))
}

function formatTimestamp(timestamp) {
    let date = new Date(timestamp)
    let day = date.getDate()
    let month =date.getMonth() + 1
    const year = date.getFullYear()
    
    if (day < 10) {
        day = '0' + day
    } 

    if (month < 10) {
        month = '0' + month
    }
    return `${month}/${day}/${year}`
}

const addNewComment = document.querySelector('.comment__section')
addNewComment.addEventListener('submit', (event) => {
    event.preventDefault()

    const currentTimestamp = Date.now()

    const newComment = {
        name: event.target.userName.value,
        comment: event.target.addComment.value,
        timestamp: formatTimestamp(currentTimestamp)
    }
    postComment(newComment)
    
    event.target.reset()    
})

//Clicked Button
const clickButton = document.querySelector('.comment__btn-container')

clickButton.addEventListener('click', (event) => {
    clickButton.classList.toggle('comment__btn-container--click')

})

//Form active state
const nameInput = document.getElementById('userName')

function updateBorderOnInput() {
    const name = nameInput.value

    if (name.trim() === '') {
        nameInput.placeholder = ""
        nameInput.classList.add('error')
        nameInput.classList.remove('active')
    } else {
        nameInput.classList.remove('error')
    }
}
nameInput.addEventListener('input', updateBorderOnInput)

function onInputFocus() {
    nameInput.classList.add('active')
}

function onBlur() {
    nameInput.classList.remove('active')
}
nameInput.addEventListener('focus', onInputFocus)
nameInput.addEventListener('blur', onBlur)
