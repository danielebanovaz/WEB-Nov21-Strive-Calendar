
window.onload = function() {
    createDays()
}

const createDays = function() {

    // Find the parent for the days (= month container)
    let monthContainerNode = document.getElementById("month-container")

    // TODO: Get the current month, so we can know how many days we need
    // (just for now, we assume we are in December and we have 31 days)
    let daysInTheMonth = 31

    // Within a loop, we create as many days as we need
    for (let dayNumber = 1; dayNumber <= daysInTheMonth; dayNumber++) {

        // We create a new DIV element...
        let newDayNode = document.createElement("div") // <div></div>
        newDayNode.innerText = dayNumber // <div>1</div>
        newDayNode.classList.add("day") // <div class="day">1</div>

        // ...and we attach it as the last child of the month container
        monthContainerNode.appendChild(newDayNode)
    }
}