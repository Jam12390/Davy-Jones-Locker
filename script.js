const supabaseq = supabase.createClient("https://ianimjsvtbggesdvqlnx.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhbmltanN2dGJnZ2VzZHZxbG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNjMyMTQsImV4cCI6MjA1MzYzOTIxNH0.cQ2ijTsFX0zaNwpe5XYj2erFzBltdb6iXpiJXA1X44k")

async function getMyProjects(){
    let {data, error} = await supabaseq.from('projects').select('*').lte('id', 5);
    myCards = document.getElementsByClassName('sunken-card');
    if(error) console.log(error);
    let counter = 1;
    data.forEach(
        (element) => {
            console.log(element);
            document.getElementById("t"+counter.toString()).innerHTML = element.title;
            document.getElementById("ib"+counter.toString()).innerHTML = "placeholder";
            document.getElementById("ls"+counter.toString()).innerHTML = element.created_at + "-" + element.time_it_died;
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