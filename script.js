// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  var timeDisplayEl = $('#currentDay');
var current24HourString = dayjs().format('H');
var current24Hour = Math.floor(current24HourString)
// var current24Hour = 10;
var saveButton = document.querySelectorAll(".saveBtn")
// var description = document.querySelectorAll('.description')

// selecting all slot items to change background color
var timeSlots = document.querySelectorAll(".time-block")

saveButton.forEach(function(saveButton) {
  saveButton.addEventListener('click', function(event) {
    var parent = this.parentElement;
    var parentId = parent.id;
    
    if (parentId == "hour-9") {
      for (var i=0; i< parent.childNodes.length; i++) {
        var checkString = parent.childNodes[i].className
        if (checkString != undefined){
        var check = checkString.includes('description')
        if (check == true) {
          var textEl = parent.childNodes[i];
          localStorage.setItem("nineAm",textEl.value)
          console.log(textEl.value)
          break;  
        }
        }
      }

    console.log(textEl.textContent)
    }
   
     
  });
});





// Putting 24 hour clock into a variable
function timeDisplay() {
  var currentTime = dayjs().format('MMM/D/YYYY h:mm a');
  timeDisplayEl.text(currentTime);
}

//Changing Background Color of slots
for (i=9; i <18; i++) {
  if (current24Hour == i) {
    if (timeSlots[i-9].classList.contains("past")) {
    timeSlots[i-9].classList.remove("past");
    }
    if (timeSlots[i-9].classList.contains("future")) {
      timeSlots[i-9].classList.remove("future");
      }
      timeSlots[i-9].classList.add("present");
  } else if (current24Hour > i) {
    if (timeSlots[i-9].classList.contains("present")) {
    timeSlots[i-9].classList.remove("present");
    }
    if (timeSlots[i-9].classList.contains("future")) {
      timeSlots[i-9].classList.remove("future");
      }
      timeSlots[i-9].classList.add("past");
  } else if (current24Hour < i) {
    if (timeSlots[i-9].classList.contains("present")) {
    timeSlots[i-9].classList.remove("present");
    }
    if (timeSlots[i-9].classList.contains("past")) {
      timeSlots[i-9].classList.remove("past");
      }
      timeSlots[i-9].classList.add("future");
  }
  
}


// Initializing time to display
timeDisplay();
//Setting display to update every 1000
setInterval(timeDisplay,1000);

// });

