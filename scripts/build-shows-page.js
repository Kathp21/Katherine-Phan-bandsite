const shows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
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
    const showSection = document.createElement('div')
    showSection.classList.add('shows__section')
    gateway.appendChild(showSection)

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
    showDateEl.innerText = show.date
    showVenueEl.innerText = show.venue
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
    btn.addEventListener('click', () => {
        const clickButton = document.querySelector('.button')
        console.log("hello")
    })
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

shows.forEach ((show) => {
    addToShows(show)
})