$(function () {
    $('.hamburger').on('click', function () {
        $('.showNav').toggleClass('show');
    });

    $('.exitResponsive').on('click', function () {
        $('.showNav').toggleClass('show');
    });


    //this is what I have for my attempts at making this thing work
    const projects = [
        {
            projectNumber: "project1",
            url: "assets/project3.png",
            projectText: "Interactive slide puzzle, allows the user to mix up the tiles and slide them back into place until the puzzle matches the example image.",
            skills:"jQuery | gitHub",
            liveLink: "https://jenniferpike.github.io/jennifer-pike-project-3/",
            githubLink: "https://github.com/JenniferPike/jennifer-pike-project-3"
        }
        {
            projectNumber:"project2",
            url: "assets/project2.png",
            projectText: "Muli - page PSD Conversion project.Taking a PSD and turning it into a accessible, live and responsive site.",
            skills: "HTML | CSS | Responsive",
            liveLink:"https://jenniferpike.github.io/jenniferPikeProject02/",
            githubLink: "https://github.com/JenniferPike/jenniferPikeProject02"
        }
        {
            projectNumber: "project3",
            url: "assets/project4.png",
            projectText: "Search the API for a random recipe based on a user keyword. Select your favourite and check out the Recipe.",
            skills: "Pair programming | API | jQuery | HTML | CSS",
            liveLink: "https://cianoruanaidhtalitapeneluppijenpike.github.io/project-4-hungry/",
            githubLink: "https://github.com/cianoruanaidhtalitapeneluppijenpike/project-4-hungry",
        }
        {
            projectNumber: "project4",
            url: "assets/project5.png",
            projectText: "Add movies to your list of have seen or must see's using Firebase and React.",
            skills:"HTML | CSS | React | Firebase",
            liveLink: "https://jen-pike-project-5.firebaseapp.com",
            githubLink: "https://github.com/JenniferPike/jenPikeProject05"
        }
        {
            projectNumber: "project5",
            url: "assets/project6.png",
            projectText: "Using the Yelp API search the app for restaurant choices to take your friends or family out for dinner. For the indecisive human the app will pick a restaurant for you.",
            skills:"Group React Project | Pair Programming | API | React | Firebase",
            liveLink: "https://gift-decider.firebaseapp.com",
            githubLink: "https://github.com/gift-giver/gifty"
        }
    ]

    const projectNumber = ${projectNumber};
    const url = ${url};
    const projectText = ${projectText};
    const skills = ${skills};
    const liveLink = ${liveLink};
    const gitHubLink = ${gitHubLink};
     
    $('.right').on('click', function(){
        
    })

    $('.left').on('click', function(){
        console.log('click');
    })


});
