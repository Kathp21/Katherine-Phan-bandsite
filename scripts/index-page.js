const previousComment = [
    {
        userName : "Connor Walton",
        date : "02/17/2021",
        content: "This is art. This is inexplicable magic expressed in the purest way, \
        everything that makes up this majestic work deserves reverence. \
        Let us appreciate this for what it is and what it contains."
    },
    {
        userName : "Emilie Beach",
        date : "01/09/2021",
        content: "I feel blessed to have seen them in person. What a show! They were just perfection. \
        If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        userName : "Miles Acosta",
        date : "12/20/2020",
        content: "I can't stop listening. Every time I hear one of their songs - the vocals - \
        it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity.\
         Can't get enough."
    }
]

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

    comName.innerText = comment.userName
    comContent.innerText = comment.content
    comDate.innerText = comment.date

}

previousComment.forEach((comment) => {
    addCommentToPage(comment)
})

//Form
const buildCommentList = (commentList) => {
    commentContainer.innerHTML = ""

    commentList.forEach((comment) => {
        addCommentToPage(comment, commentContainer)
    })
}

const addNewComment = document.querySelector('.comment__section')
addNewComment.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("hello")

    const currentDate = new Date()
    let day = currentDate.getDate()
    let month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    
    if (day < 10) {
        day = '0' + day
    } 

    if (month < 10) {
        month = '0' + month
    }

    const newComment = {
        userName: event.target.userName.value,
        content: event.target.addComment.value,
        date: month + '/' + day + '/' + year
    }
    
    event.target.reset()
    
    previousComment.unshift(newComment)
    buildCommentList(previousComment)
})

//Clicked Button
const clickButton = document.querySelector('.comment__btn-container')

clickButton.addEventListener('click', (event) => {
    clickButton.classList.toggle('comment__btn-container--click')

})

//Form active state
const formActive = document.getElementById('userName')

function addActiveBorder() {
    formActive.classList.toggle('comment__active-state')
}
formActive.addEventListener('input', addActiveBorder)


//Validate form
function validateForm() {
    const inputEl = document.getElementById('userName')
    const inputValue = inputEl.value

    if (inputValue.trim() === '') {
        inputEl.classList.add('comment__error')
        return false
    } else {
        inputEl.classList.remove('comment__error')
        return true
    }
}