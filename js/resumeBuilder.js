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
    
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedRole);
    
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    $("#header").prepend(formattedPic);
    $("#header").append(formattedMessage);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLmobile.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
    
    $("#header").append(HTMLskillsStart);
    // Display skills to screen
    for (var skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills:last").append(formattedSkill);
    }
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
    for (var school in education.schools) {
        school = education.schools[school];
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName
            .replace("%data%", school.name)
            .replace('#', school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedLocation = HTMLschoolLocation.replace(
            "%data%", school.location);
        majors = "";
        for (major in school.major){
            majors += HTMLschoolMajor.replace("%data%", school.major[major]);
        }
        
        var schoolDescription = formattedSchool + formattedDegree + formattedLocation + majors;
        $(".education-entry:last").append(schoolDescription);
    }    
}

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
    for (var job in work["jobs"]) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        
        var employerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDescription;
        $(".work-entry:last").append(employerTitle);
    }
}

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
    for (var job in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[job].title);
        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[job].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[job].description);
        
        var employerTitle = formattedTitle + formattedDate + formattedDescription;
        $(".project-entry:last").append(employerTitle);
    }
}

projects.display()
bio.display();
work.display();
education.display();
$("#mapDiv").append(googleMap);