
/*
Author: Carol D. Toro
Filename: resumeBuilder.js
Description: Contains JSON of data to publish on resume page and methods for displaying data
Last Edited: 8/19/2016
*/

var bio = {
  "name": "Carol D. Toro",
  "role": "Software Engineer, Coder",
  "contacts": {
    "mobile": "888-888-8888",
    "email": "CarolToro@outlook.com",
    "github": "toroc",
    "twitter": "@kar0l",
    "location": "San Jose, CA, US"
  },
  "welcomeMessage": "lorem ipsum dolor sit",
  "skills": [
    "programming", "python", "c", "c++", "PHP", "JavaScript", "HTML", "CSS", "Object Oriented Programming"
  ],
  "bioPic": "https://avatars0.githubusercontent.com/u/9097432?v=3&s=460"
}

bio.display = function(){
  
  // Display Header: Name Title Image
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
  // Display skills
  function displaySkills(){

    if (bio.skills.length > 0){

      $("#header").append(HTMLskillsStart);
      // Iteratre thru all skills and append to page
      bio.skills.forEach(function(element) {
        $("#skills:last").append(HTMLskills.replace("%data%", element));
      }, this);
    }
  };
  displaySkills();
  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
  
}

bio.display();


var education = {
  "schools": [{
      "name": "Oregon State University",
      "location": "Corvallis, OR, US",
      "dates": "August 2016",
      "degree": "Bachelor of Science",
      "majors": ["Computer Science"],
      "degree dates": "August 2016",
      "url": "http://oregonstate.edu"
    },
    {
      "name": "Scripps College",
      "location": "Claremont, CA, US",
      "dates": "December 2012",
      "degree": "Bachelor of Arts",
      "majors": ["Latin American Studies"],
      "degree dates": "December 2012",
      "url": "http://scrippscollege.edu"
    }],

  "onlineCourses": [{
    "title": "Programming Foundations with Python",
    "school": "Udacity",
    "dates": "2016",
    "url": "https://www.udacity.com/course/programming-foundations-with-python--ud036"
  },
  {
    "title": "Full Stack Foundations",
    "school": "Udacity",
    "dates": "2016",
    "url": "https://www.udacity.com/course/full-stack-foundations--ud088"
  },
  {
    "title": "JavaScript Basics",
    "school": "Udacity",
    "dates": "2016",
    "url": "https://www.udacity.com/course/javascript-basics--ud804"
  }]
}

education.display = function(){
   

  education.schools.forEach(function(element){
    var schoolDegree = HTMLschoolName.replace("%data%", element.name) + HTMLschoolDegree.replace("%data%", element.degree)
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(schoolDegree);
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", element.dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", element.location));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", element.majors));

  }, this);

  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(element){
    var classSchool = HTMLonlineTitle.replace("%data%", element.title) + HTMLonlineSchool.replace("%data%", element.school);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(classSchool);
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", element.dates));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", element.url));
  })
}

education.display();


var work = {
  "jobs": [{
    "employer": "Microsoft",
    "title": "Program Manager, Bing Ads",
    "location": "Seattle, WA, US",
    "dates": "July 2013 — November 2014",
    "description": "Led editorial operations for Latin America. Influenced marketplace policy changes for Bing Ads in Mexico and Brazil."
  },
  {
    "employer": "Microsoft",
    "title": "Operations Specialist, Bing Ads",
    "location": "Seattle, WA, US",
    "dates": "January 2013 — June 2013",
    "description": "blah blah blah"
  },
  {
    "employer": "Google",
    "title": "Intern, AdWords",
    "location": "Mountain View, CA, US",
    "dates": "June 2012 — August 2012",
    "description": "blah blah blah"
  },
  {
    "employer": "Google",
    "title": "Intern, DoubleClick",
    "location": "San Francisco, CA, US",
    "dates": "June 2011 — August 2011",
    "description": "blah blah blah"
  },
   {
    "employer": "The Floridian",
    "title": "Intern, AdWords",
    "location": "Miami Beach, FL, US",
    "dates": "June 2012 — August 2012",
    "description": "blah blah blah"
  }]
}

work.display = function(){

  if(work.jobs.length > 0){
    work.jobs.forEach(function(element){
      $("#workExperience").append(HTMLworkStart);
      var formatEmployer = HTMLworkEmployer.replace("%data%", element.employer);
      var formatTitle = HTMLworkTitle.replace("%data%", element.title);
      $(".work-entry:last").append(formatEmployer + formatTitle);
      var workDates = HTMLworkDates.replace("%data%", element.dates);
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", element.location));
      $(".work-entry:last").append(workDates);
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", element.description));
      
    }, this);
  }
}
work.display();

var projects = {
  "projects": [{
    "title": "Traveling Salesman Heuristic Algorithms",
    "dates": "2016",
    "description": "blah blah",
    "images": 
    ["images/197x148.gif", "images/197x148.gif"]
  },
  {
    "title": "Graphical Web Crawler",
    "dates": "2016",
    "description": "blah blah",
    "images": 
    ["images/197x148.gif", "images/197x148.gif"]
  },
  {
    "title": "Command Line Shell",
    "dates": "2016",
    "description": "blah blah",
    "images": 
    ["images/197x148.gif", "images/197x148.gif"]
  },
  {
    "title": "IRC Channel",
    "dates": "2016",
    "description": "blah blah",
    "images": 
   ["images/197x148.gif", "images/197x148.gif"]
  },
  {
    "title": "MyVino",
    "dates": "2016",
    "description": "blah blah",
    "images": 
    ["images/197x148.gif", "images/197x148.gif"]
  },
  {
    "title": "Literacy",
    "dates": "2016",
    "description": "blah blah",
    "images": 
    ["images/197x148.gif", "images/197x148.gif"]
  },
  {
    "title": "Parks and Recreation Console Game",
    "dates": "2015",
    "description": "blah blah",
    "images": 
    ["images/197x148.gif", "images/197x148.gif"]

  }]
  
}

projects.display = function(){
  // Encapsulation to hold the display function inside projects object

  if (projects.projects.length > 0){

    projects.projects.forEach(function (element){
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", element.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", element.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", element.description));
      element.images.forEach(function(imgElement){
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", imgElement));      

      }, this);
    }, this);
  }
}



$(document).click(function(loc){
  logClicks(loc.pageX, loc.pageY);
});



function inName(nameStr){
  nameStr = nameStr.trim();
  var names = nameStr.split(" ");
  console.log(names);
  if (names.length == 2){
    names[1] = names[1].toUpperCase();
  }
  else if (names.length == 3){
    names[2] = names[2].toUpperCase();
  }
  names[0] = names[0].slice(0,1).toUpperCase()+names[0].slice(1).toLowerCase();
  var finalName = names.join(" ");
  console.log(finalName);
  return finalName;
}


projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);