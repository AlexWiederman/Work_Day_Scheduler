$(function () {
var timeDisplayEl = $('#currentDay');
var current24HourString = dayjs().format('H');
// Displaying time as an integer, not a string
var current24Hour = Math.floor(current24HourString);
// var current24Hour = 10;
var saveButton = document.querySelectorAll(".saveBtn");
var description = document.querySelectorAll('.description');
// var intArray = new Array();
// var descArray

var descArray = localStorage.getItem('descriptions')
//Collecting all of the local storage into an array to be displayed initially
function readDescriptionsLocalStorage() {
  // Only parsing it if there is something already initialized in the local storage
  if (descArray) {
    descArray = JSON.parse(descArray);
  } else {
    descArray = [];
  }
  return descArray;
}

// putting the text on the webpage
function displayDescriptions() {
for (var i = 0; i < description.length; i++) {
  
  if (descArray[i] != undefined) {
    description[i].value = descArray[i];
  }
}
}

// selecting all slot items to change background color
var timeSlots = document.querySelectorAll(".time-block");

// putting text in local storage when hitting any save button
saveButton.forEach(function (saveButton) {
  saveButton.addEventListener('click', function (event) {
    var parent = this.parentElement;
    var parentId = parent.id;
    //Going through all of the children to find the description element in order to grab the inputed text
    for (var i = 0; i < parent.childNodes.length; i++) {
      var checkString = parent.childNodes[i].className
      if (checkString != undefined) {
        var check = checkString.includes('description');
        if (check == true) {
          var textEl = parent.childNodes[i];
          
          if (parentId == "hour-9") {
            descArray[0] = textEl.value;
            // localStorage.setItem("nineAm", textEl.value);
          } else if (parentId == "hour-10") {
            descArray[1] = textEl.value;
            // localStorage.setItem("tenAm", textEl.value);
          } else if (parentId == "hour-11") {
            descArray[2] = textEl.value;
            // localStorage.setItem("elevenAm", textEl.value);
          } else if (parentId == "hour-12") {
            descArray[3] = textEl.value;
            // localStorage.setItem("twelvePm", textEl.value);
          } else if (parentId == "hour-13") {
            descArray[4] = textEl.value;
            // localStorage.setItem("onePm", textEl.value);
          } else if (parentId == "hour-14") {
            descArray[5] = textEl.value;
            // localStorage.setItem("twoPm", textEl.value);
          } else if (parentId == "hour-15") {
            descArray[6] = textEl.value;
            // localStorage.setItem("threePm", textEl.value);
          } else if (parentId == "hour-16") {
            descArray[7] = textEl.value;
            // localStorage.setItem("fourPm", textEl.value);
          } else if (parentId == "hour-17") {
            descArray[8] = textEl.value;
            // localStorage.setItem("fivePm", textEl.value);
          }
          localStorage.setItem("descriptions", JSON.stringify(descArray));
          break;
        }
      }
    }
  });
});

// Putting 24 hour clock into a variable
function timeDisplay() {
  var currentTime = dayjs().format('MMM/D/YYYY h:mm a');
  timeDisplayEl.text(currentTime);
}

//Changing Background Color of slots
for (i = 9; i < 18; i++) {
  if (current24Hour == i) {
    if (timeSlots[i - 9].classList.contains("past")) {
      timeSlots[i - 9].classList.remove("past");
    }
    if (timeSlots[i - 9].classList.contains("future")) {
      timeSlots[i - 9].classList.remove("future");
    }
    timeSlots[i - 9].classList.add("present");
  } else if (current24Hour > i) {
    if (timeSlots[i - 9].classList.contains("present")) {
      timeSlots[i - 9].classList.remove("present");
    }
    if (timeSlots[i - 9].classList.contains("future")) {
      timeSlots[i - 9].classList.remove("future");
    }
    timeSlots[i - 9].classList.add("past");
  } else if (current24Hour < i) {
    if (timeSlots[i - 9].classList.contains("present")) {
      timeSlots[i - 9].classList.remove("present");
    }
    if (timeSlots[i - 9].classList.contains("past")) {
      timeSlots[i - 9].classList.remove("past");
    }
    timeSlots[i - 9].classList.add("future");
  }
}

// Initializing the descriptions to display first if not empty
readDescriptionsLocalStorage()

displayDescriptions()
// Initializing time to display
timeDisplay();
//Setting display to update every 1000
setInterval(timeDisplay, 1000);

});

