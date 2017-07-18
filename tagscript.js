var tags = {};
tags["interactive"] = 0;
tags["unity"] = 0;
tags["personal"] = 0;
tags["kinect"] = 1;
tags["computervision"] = 0;
tags["faceosc"] = 0;
tags["sculptural"] = 0; 
tags["installation"] = 0; 
tags["drawing"] = 0; 
tags["painting"] = 0; 
tags["timebased"] = 0; 
tags["maya"] = 0; 
tags["motioncapture"] = 0; 
tags["of"] = 0; 
tags["processing"] = 0; 
tags["javascript"] = 0; 
tags["videogames"] = 0; 
tags["robotics"] = 0; 
tags["mobiledev"] = 0; 
tags["design"] = 0; 
tags["vr"] = 0; 
tags["oculus"] = 0; 
tags["photography"] = 0; 


window.onload = function setup(){
  for (var id in tags){
    var button = document.getElementById(id);
    var projects = document.getElementsByClassName(id);
    var grey = "tags/" + id +".png";
    var black = "tags/" + id +"_sel.png";

    if (tags[id] == 1){// "active--->inactive"
      button.src = black;
      show(projects);
    } else { //"inactive--->active"
      button.src = grey;
      hide(projects, id);
    }
  }
}

function toggle(id){

  //document.getElementsByClassName(id) : gets the projects which are labeled with that class id
  //document.getElementById(id) : gets the tag button that controls that id
  
  var button = document.getElementById(id);
  var projects = document.getElementsByClassName(id);

  var grey = "tags/" + id +".png";
  var black = "tags/" + id +"_sel.png";

  if (tags[id] == 1){// "active--->inactive"
    tags[id] = 0;
    button.src = grey;
    hide(projects, id);
  } else { //"inactive--->active"
    tags[id] = 1;
    button.src = black;
    show(projects);
  }
}

function show(projList){
  for (var i = 0; i < projList.length; i++){
    projList[i].style.display = "block";
  }
}

function hide(projList, id){
  for (var i = 0; i < projList.length; i++){
    var classList = projList[i].className.split(' ')
    for (var j = 0; j < classList.length; j++){
      if ((tags[classList[j]] == 1)){
        projList[i].style.display = "block";
        break;
      } else {
        projList[i].style.display = "none";        
      }
    }
  }
}

// function displayPage(id){
//   var contentDiv = document.getElementById("contentFrame");
//   contentDiv.src = "content/" + id + ".html";
// }
function displayProject(id){
  var allDiv = document.getElementsByClassName("scroll");
  var contentDiv = document.getElementById("contentFrame");
  contentDiv.src = "projects/" + id + ".html";
  var projectDiv = document.getElementById("project");
  projectDiv.style.display = "block";
  allDiv[0].style.display = "none";
}

function displayAllProjs(){
  var allDiv = document.getElementsByClassName("scroll");
  var projectDiv = document.getElementById("project");
  projectDiv.style.display = "none";
  allDiv[0].style.display = "block";
}

function next(i){
  var introduction = document.getElementById(i);
  var next = (parseInt(i)+1)%4
  introduction.src = "images/intro_" + next + ".png";
  introduction.id = next;
}

// function nextIntro(){
//   var introduction = document.getElementsByClassName("introduction")[0];
//   var i = introduction.id;
//   var next = (parseInt(i)+1)%4;
//   var introslide = document.getElementById(i);
//   introslide.src = "images/intro_" + next + ".png";
//   introslide.id = next;
// }

// function backIntro(){
//   var introduction = document.getElementsByClassName("introduction")[0];
//   var i = introduction.id;
//   var prev = (((parseInt(i)-1)%4)+4)%4;
//   console.log(prev);
//   var introslide = document.getElementById(i);
//   introslide.src = "images/intro_" + prev + ".png";
//   introslide.id = prev;
// }