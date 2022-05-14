// import functions from the database 
import { getParks, getServices, getAreaServices, getGuests } from "./database.js"

// invoking functions to get a copy of the state for use in this module. 
const parkList = getParks()
const serviceList = getServices()
const areaServices = getAreaServices()
const guests = getGuests()

// this module will have functions related to the parks section of the database. 
// need a function to determine what services the area has 
// then need function to make that into a sting

// define a function that will create a string to display each park area name
// under the park name will be a list of the services that area of the park has
export const parkAreas = () => {
    let html = ""
    for (const area of parkList) {
        html += `<div class="park--card"><h2 class="park-name" id="park--${area.id}">${area.name}</h2>`
        const filteredService = filterServices(area)
        const serviceName = filterServiceString(filteredService)
        html += `<div class="park-services" id="service">Services in this Area:<br>${serviceName}</div>
        </div>`
    }
    return html
}


// function that will create an array or the services each park area has, parameter is the park area, function will be called in the for loop in the parkAreas function.  This function returns the areaServices array for an individual park
const filterServices = (area) => {
    let serviceArr = []
    for (const service of areaServices) {
        if (area.id === service.parkId) {
            serviceArr.push(service)
        }
    }
    return serviceArr
}
// function will be called in the for loop of the parkAreas this will be called after the filterServices function.  This function will return an array of the the services the park area provides. Parameter for the function is the array created in the filterServices function.  
const filterServiceString = (serviceArr) => {
    let parkSerArr = []
    for (const service of serviceArr) {
        for (const item of serviceList) {
            if (service.servicesId === item.id) {
                parkSerArr.push(item.name)
            }
        }
    }
    return parkSerArr.join(", ")
}


// adding an event listener to the parks.  when a park is clicked it will show the following : "There are ${} guests in this area.

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // for the startsWith when an item with an id of park is clicked this will run
        if (itemClicked.id.startsWith("park")) {
            // declared new variable called parkId 
            const [, parkId] = itemClicked.id.split("--")

            // iterating thru the park array  
            for (const park of parkList) {
                // if statement to determine if the parkId created from the itemClicked is equal to the park.id
                if (park.id === parseInt(parkId)) {
                    // invoking the guestPark function passing thru a single park as the argument in the for loop
                    let guestCount = guestPark(park)
                    // string to populate on the click event
                    window.alert(`There are ${guestCount} guests in this area.`)
                }
            }
        }
    }

)

// defining function to return the amount of guests at each park area.  function has a parameter of park, and will be called in the for loop in the event listener 
const guestPark = (park) => { 
    let totalGuest = 0
    for (const guest of guests) {
        if (guest.parkId === park.id)   
        totalGuest ++
    }
    return totalGuest
}