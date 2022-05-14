// import functions from the database 
import { getGuests } from "./database.js"

// invoking functions to get a copy of the state for use in this module. 
const guestList = getGuests()

// this module will have functions related to the guests section of the database. 
// this function responsibility is to find the guests names and create a string to list the names of the guests
// function does not have any parameters and will return an html string

export const guests = () => {
    let htmlString = `<ul>`

    for (const guest of guestList) {
        htmlString += `<li class="guest">${guest.name}</li>`
    }
    htmlString += `</ul>`
    return htmlString
}

