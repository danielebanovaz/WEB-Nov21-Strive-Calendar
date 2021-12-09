
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

        // Set the 'selectDay' function as a LISTENER for the CLICK event
        // on the newly created HTML node
        newDayNode.onclick = selectDay
        // (this is another, almost equivalent alternative)
        // newDayNode.addEventListener("click", selectDay)

        // ...and we attach it as the last child of the month container
        monthContainerNode.appendChild(newDayNode)
    }
}

const getCurrentlySelectedDay = function() {
    return document.querySelector(".selected")

    //return document.getElementsByClassName("selected")[0]
}

const selectDay = function(e) {

    // Let's find the currently selected day...
    const currentlySelectedDay = getCurrentlySelectedDay()

    // ...if there's one, DE-SELECT it
    if (currentlySelectedDay !== null) {
        // ...by removing the 'selected' class
        currentlySelectedDay.classList.remove("selected")
    }

    // Find the element that has been click
    const clickedDayNode = e.target

    // Set its class to be 'selected'
    clickedDayNode.classList.add("selected")
}

const createNewMeeting = function() {

    // Make sure that we actually selected a day
    if (getCurrentlySelectedDay() === null) {
        alert("You have to select a day first!")
        return
    }

    // Read the user input (so the values of time, description)
    const meetingTime = document.getElementById("meeting-time").value
    const meetingDescription = document.getElementById("meeting-description").value

    // We joint the input in a more human readable string
    const meeting = meetingTime + "] " + meetingDescription

    // We create a new meeting LI based on that data
    const newMeetingListItemNode = document.createElement("li")
    newMeetingListItemNode.innerText = meeting

    // We display the newly created meeting by appending it to the UL
    const meetingsContainerNode = document.getElementById("meetings-for-the-day")
    meetingsContainerNode.appendChild(newMeetingListItemNode)
}