"use strict";

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
    "biopic": "https://i.imgur.com/HJV93Qi.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    $("#header").prepend(formattedPic);
    $("#header").append(formattedMessage);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLmobile.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    
    var contactAreas = [$("#topContacts"), $("#footerContacts")];
    function addContactInfo(area) {
        area.append(formattedMobile);
        area.append(formattedEmail);
        area.append(formattedTwitter);
        area.append(formattedGithub);
        area.append(formattedLocation);
    }
    contactAreas.forEach(addContactInfo);
    
    $("#header").append(HTMLskillsStart);
    // Display skills to screen
  function addSkill(skill) {
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills:last").append(formattedSkill);
  }
  bio.skills.forEach(addSkill);
};


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
            "url": "http://cs.utexas.edu"
        }
    ]
};

education.display = function() {
    function addSchool(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName
            .replace("%data%", school.name)
            .replace('#', school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedLocation = HTMLschoolLocation.replace(
            "%data%", school.location);       
        var schoolDescription = formattedSchool + formattedDegree + formattedLocation;
        $(".education-entry:last").append(schoolDescription);
        function addMajor(major) {
            var formattedMajor = HTMLskills.replace("%data%", major);
            $("#education-entry:last").append(formattedMajor);
        }
        school.majors.forEach(addMajor);
    }
    education.schools.forEach(addSchool);    
};

var work = {
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

work.display = function() {
  function addJob(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        
        var employerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDescription;
        $(".work-entry:last").append(employerTitle);
    }
    work.jobs.forEach(addJob);
};

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

projects.display = function() {
    function addProject(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDate = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        
        var employerTitle = formattedTitle + formattedDate + formattedDescription;
        $(".project-entry:last").append(employerTitle);
    }
  projects.projects.forEach(addProject);
};

projects.display();
bio.display();
work.display();
education.display();
$("#mapDiv").append(googleMap);