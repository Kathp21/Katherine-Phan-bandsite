const shows = [
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]
const gateway = document.querySelector(".shows");

const addToShows = (show) => {
    const showEl = document.createElement('div')
    showEl.classList.add('shows__details')

    const showDate = document.createElement('p')
    const showVenue = document.createElement('p')
    const showLocation = document.createElement('p')
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
    showDateEl.innerText = show.date
    showVenueEl.innerText = show.venue
    showLocationEl.innerText = show.location

    showEl.appendChild(showDate)
    showEl.appendChild(showDateEl)
    showEl.appendChild(showVenue)
    showEl.appendChild(showVenueEl)
    showEl.appendChild(showLocation)
    showEl.appendChild(showLocationEl)

    gateway.appendChild(showEl)

//Button
    const btnContainer = document.createElement("div")
    gateway.appendChild(btnContainer)

    const btn = document.createElement("button")
    btn.innerText = "BUY TICKETS"
    btn.addEventListener('click', () => {
        const clickButton = document.querySelector('.button')
        console.log("hello")
    })
    gateway.appendChild(btn)

    btnContainer.appendChild(btn)




//Style button
    btn.classList.add("shows__button")
    btnContainer.classList.add("shows__btn-container")

// Add Div for underline
    const borderBottom = document.createElement('div')
    borderBottom.classList.add('shows__divider')
    gateway.appendChild(borderBottom)
}

shows.forEach ((show) => {
    addToShows(show)
})
