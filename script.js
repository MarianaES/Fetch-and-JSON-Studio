// TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {
            const div = document.getElementById("container");
            // Bonus Mission
            // Display the astronauts sorted from most to least time in space.
            json.sort(function(a,b) {return (b.hoursInSpace - a.hoursInSpace)});
            // Add a count of astronauts to the page.
            
            // Other options:
            // for (astronaut of json)
            // json.forEach()
            for (let i=0; i<json.length; i++) {
                // Make the "Active: true" text green, for astronauts that are still active (active is true).
                let activeLine = "";
                if (json[i].active === true){
                    activeLine = `<font color="green">Active: ${json[i].active}</font>`    
                } else {
                    activeLine = `<font color="red">Active: ${json[i].active}</font>` 
                } 

                div.innerHTML += `
                    <div class="astronaut">
                    <div class="bio">
                    <h3>${i+1+"." } ${json[i].firstName} ${json[i].lastName} </h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>${activeLine}</li>
                        <li>Skills: ${json[i].skills.join(", ")}</li>
                    </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                    </div>    
                    `;       
            };
        });
    });
});


