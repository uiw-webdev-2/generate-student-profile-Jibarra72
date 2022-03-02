const Me = {
    fname: "Joshua",  
    lname: "Ibarra",
    Email: "jjibarr@student.uiwtx.edu",
    PIDM: 1110710,
    School: "University of the Incarnate Word",
    Gradelv: "Senior",
    Image: "apple.jpg",
    ImageAlt: "orange.jpg",
  };


const content =   `
    <main>
        <article>
            <h1>Me</h1>
            <ul>
                <li>First Name: ${Me.fname}</li>
                <li>Last Name: ${Me.lname}</li>
                <li>Email: ${Me.Email}</li>
                <li>PIDM: ${Me.PIDM}</li>
                <li>School: ${Me.School}</li>
            </ul>
      <article>
    <main>  
    `;

const createProfile = (profile) =>
{
  let newprofile = document.createElement("article");
  newprofile.innerHTML = content;
  newprofile.prepend(createImage(profile))
  return newprofile;
    }

const createImage = (dataObj) =>
{
  let newapple = document.createElement("img");
  newapple.setAttribute("src", dataObj.Image );
  newapple.setAttribute("alt", dataObj.ImageAlt );
  return newapple;
}

document.querySelector("main").append(createProfile(Me))