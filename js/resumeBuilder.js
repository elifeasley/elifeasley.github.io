var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';



var formattedName = HTMLheaderName.replace("%data%","eli feasley");
var formattedRole = HTMLheaderRole.replace("%data%", "data scientist");

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
var bio =  {
    "name": "eli feasley",
    "role": "\"data\" \"scientist\"",
    "contacts": {
        "mobile": "917-647-8930",
        "email": "e.feasley@gmail.com",
        "github": "github.com/elifeasley",
        "twitter": "eli_awry",
        "location": "around"
    },
    "welcomeMessage": "in which a hard-crafted sense of identity is unicoded",
    "skills": [
        "retrospecting",
        "introspecting",
        "regretting",
        "python"
    ],
    "biopic": "https://drive.google.com/file/d/1oSmMed5nJVm_rjDstOdyd5rTvr4Nif_SlQ/view?usp=sharing"
};

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)

$("#main").append(formattedMobile);


var education = {
    "schools": [
        {
            "name": "UT Austin",
            "location": "Austin, TX",
            "degree": "dropped out of phd program",
            "majors": [
                "machine learning"
            ],
            "dates": 0,
            "url": "cs.utexas.edu"
        }
    ]
};
// education contains:

//     schools: array of objects with
//          name: string
//          location: string
//          degree: string
//          majors: array of strings
//          dates: integer (graduation date)
//          url: string
//     onlineCourses: array with
//          title: string
//          school: string
//          date: integer (date finished)
//          url: string
//     display: function taking no parameters
// work contains
var jobs = {
    "jobs": [
        {
            "employer": "khan academy",
            "title": "data scientist",
            "location": "california",
            "description": "learning about human learning"
        },
        {
            "employer": "ut austin",
            "title": "researcher",
            "location": "texas",
            "description": "learning about deep learning"
        },
        {
            "employer": "umbc",
            "title": "cs tutor",
            "location": "maryland",
            "description": "learning about teaching"
        }
    ]
};

for (var job in jobs["jobs"]) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", jobs.jobs[job].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", jobs.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", jobs.jobs[job].description);
    
    var employerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDescription;
    $(".work-entry:last").append(employerTitle);

}
//     jobs: array of objects with
//          employer: string 
//          title: string 
//          location: string 
//          dates: string (works with a hyphen between them)
//          description: string 
//     display: function taking no parameters

var projects = {
    "projects": [
        {
            "title": "playing to program",
            "dates": "2012-2013",
            "description": "wrote an intelligent RURPLEy tutor for python",
            "images": "http://ebiquity.umbc.edu/_file_directory_/papers/562.pdf"
        },
        {
            "title": "cs tutor",
            "dates": "2012-2013",
            "description": "taught programming to like all kinds of folks",
        }
        ]
};
// projects contains:

//     projects: array of objects with
//           title: string 
//           dates: string (works with a hyphen between them)
//           description: string
//           images: array with string urls
//     display: function taking no parameters

// Iterate through each JSON and append its information to index.html in the correct section.
// First off, you’ll be using jQuery’s selector.append() and selector.prepend() functions to modify index.html. selector.append() makes an element appear at the end of a selected section. selector.prepend() makes an element appear at the beginning of a selected section.
// Pay close attention to the ids of the <div>s in index.html and the HTML snippets in helper.js. They’ll be very useful as jQuery selectors for selector.append() and selector.prepend()
// You’ll also be using the JavaScript method string.replace(old, new) to swap out all the placeholder text (e.g. %data%) for data from your resume JSONs.
// Here’s an example of some code that would add the location of one your companies to the page:
// var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
// $(".work-entry:last").append(formattedLocation);
// Use the mockup at the page of this document as a guide for the order in which you should append elements to the page.
// The resume includes an interactive map. To add it, append the googleMap string to <div id=”mapDiv”>.
// All of your code for adding elements to the resume should be within functions. And all of your functions should be encapsulated within the same objects containing your resume data. For instance, your functions for appending work experience elements to the page should be found within the same object containing data about your work experience.
// Your resume should also console.log() information about click locations. On line 90 in helper.js, you’ll find a jQuery onclick handler that you’ll need to modify to work with the logClicks(x,y) function above it.
// It’s possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API to get started