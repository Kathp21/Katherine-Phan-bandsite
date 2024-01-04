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

shows.forEach((show) => {
    // console.log(show)
    const date = document.createElement('h3')
    const venue = document.createElement('h3')
    const location = document.createElement('h3')
    
    gateway.appendChild(date);
    console.log(date)
})