import { BandSiteApi } from "./band-site-api.js";

const api = new BandSiteApi("e666d163-2fe5-40c6-b626-ea9b5931346e")

const displayShows = async () => {
    const shows = await api.getShows()
    shows.forEach((place) => {
        addToShows(place)
    })
}
displayShows()

function formatDate(date) {
    let dayOfTheMonth = new Date(date)
    let day = dayOfTheMonth.getDate() + 1
    let month = dayOfTheMonth.getMonth()
    const year = dayOfTheMonth.getFullYear()
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const weekDay = weekDays[dayOfTheMonth.getDay()];
    const monthName = months[month];

    if ( day < 10) {
        day = '0' + day
    }
    return `${weekDay} ${monthName} ${day} ${year}`
}

const gateway = document.querySelector(".shows");

const addToShows = (show) => {
    const showSection = document.createElement('div')
    showSection.classList.add('shows__section')

    const showDate = document.createElement('p')
    const showVenue = document.createElement('p')
    const showLocation = document.createElement('p')
    showDate.classList.add('shows__data')
    showVenue.classList.add('shows__data')
    showLocation.classList.add('shows__data')

    const showDateEl = document.createElement('p')
    const showVenueEl = document.createElement('p')
    const showLocationEl = document.createElement('p')

    showDateEl.classList.add('shows__info')
    showDateEl.classList.add('shows__info--bold')
    showVenueEl.classList.add('shows__info')
    showLocationEl.classList.add('shows__info')

    showDate.innerText = "DATE"
    showVenue.innerText = "VENUE"
    showLocation.innerText = "LOCATION"
    showDateEl.innerText = formatDate(show.date)
    showVenueEl.innerText = show.place
    showLocationEl.innerText = show.location

    showSection.appendChild(showDate)
    showSection.appendChild(showDateEl)

    showSection.appendChild(showVenue)
    showSection.appendChild(showVenueEl)

    showSection.appendChild(showLocation)
    showSection.appendChild(showLocationEl)

    gateway.appendChild(showSection)

    showSection.addEventListener('click', (event) => {
        const clickedShows = document.querySelectorAll('.shows__section--click')
        clickedShows.forEach((show) => {
            show.classList.remove('shows__section--click')
        })

        showSection.classList.add('shows__section--click')
    })

    //Button
    const btnContainer = document.createElement("div")
    showSection.appendChild(btnContainer)

    const btn = document.createElement("button")
    btn.innerText = "BUY TICKETS"
    showSection.appendChild(btn)

    btnContainer.appendChild(btn)

    //Style button
    btn.classList.add("shows__button")
    btnContainer.classList.add("shows__btn-container")

    // Add Div for underline
    const borderBottom = document.createElement('div')
    borderBottom.classList.add('shows__divider')
    gateway.appendChild(borderBottom)
}