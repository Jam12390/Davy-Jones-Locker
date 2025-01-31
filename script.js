const supabaseq = supabase.createClient("https://ianimjsvtbggesdvqlnx.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhbmltanN2dGJnZ2VzZHZxbG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNjMyMTQsImV4cCI6MjA1MzYzOTIxNH0.cQ2ijTsFX0zaNwpe5XYj2erFzBltdb6iXpiJXA1X44k")
let sliderElement = document.getElementById("slider");
let position = 0;

sliderElement.style.left = "-1000px";

async function getMyProjects(){
    let {data, error} = await supabaseq.from('MyProjects').select('*').lte('id', 5);
    myCards = document.getElementsByClassName('sunken-card');
    if(error) console.log(error);
    let counter = 1;
    data.forEach(
        (element) => {
            console.log(element);
            //todo: add link to github in title
            document.getElementById("t"+counter.toString()).innerHTML = element.title;
            document.getElementById("ib"+counter.toString()).innerHTML = "Idea By:" + "placeholder";
            document.getElementById("ls"+counter.toString()).innerHTML = "Lifespan: " + element.created_at + "-" + element.time_it_died;
            document.getElementById("d"+counter.toString()).innerHTML = element.description;
            counter += 1;
        }
    );
    // else{
    //     for(let x=0; x < data.length; x++){
    //         myCards[x].array.forEach(element => {
    //             console.log(element)
    //         });
    //     }
    // }
}

async function getAllProjects(){
    let {data, error} = await supabaseq.from('AllProjects').select();
    mainArea = document.getElementById("main-area");
    console.log(data)
    if (!error){
        data.forEach(
            (element) => {
                console.log(element);
                newProjectTitle = document.createElement("a");
                newProjectAuthor = document.createElement("h6");
                newProjectLifeSpan = document.createElement("h6");
                newProjectTitle.innerHTML = element.title;
                newProjectAuthor.innerHTML = "Idea By:" + element.author;
                newProjectLifeSpan.innerHTML = "Lifespan: " + element.created_at + "-" + element.time_it_died;
                mainArea.appendChild(newProjectTitle);
                mainArea.appendChild(newProjectAuthor);
                mainArea.appendChild(newProjectLifeSpan);
            }
        );
    }
}

let directionLeft = true;

function slider(){
    if (directionLeft){
        transform = -2;
    } 
    else{
        transform = 2;
    }
    sliderElement.style.left = position + "px";
    console.log(sliderElement.style.left);
    if (position+transform >= 0 || position+transform <= -1000){
        directionLeft = !directionLeft;
    }
    else{
        position += transform;
    }
}

interval = setInterval(slider, 2);

getMyProjects();
getAllProjects();