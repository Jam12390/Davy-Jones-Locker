const supabaseq = supabase.createClient("https://ianimjsvtbggesdvqlnx.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhbmltanN2dGJnZ2VzZHZxbG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNjMyMTQsImV4cCI6MjA1MzYzOTIxNH0.cQ2ijTsFX0zaNwpe5XYj2erFzBltdb6iXpiJXA1X44k")

async function getMyProjects(){
    let {data, error} = await supabaseq.from('projects').select('*');
    if(error) console.log(error);
    else console.log(data);
}