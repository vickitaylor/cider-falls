import { guests } from "./guests.js"
import { parkAreas } from "./parks.js"
import { services } from "./services.js"

// declared a variable to call the function to have the list of guests appear on the index.html 
const mainHTML = document.querySelector(".container")

const appHTML = `
<section class="services">
  ${services()}
</section>

<article class="parks_guests">
    <section class="parks">
      ${parkAreas()}
    </section>

    <section class="guest-list">
        <h2>Guests Currently in the Park:</h2>
        ${guests()}
    </section>
</article>
`
mainHTML.innerHTML = appHTML


