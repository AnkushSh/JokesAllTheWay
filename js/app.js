
try
{
    document.getElementById("dadJokeBtn").addEventListener("click", getDadJoke);
}
catch(e){}

try
{
    document.getElementById("chuckJokeBtn").addEventListener("click", getChuckJoke);
}
catch(e){}

try
{
    document.getElementById("indexJokeBtn").addEventListener("click", getIndexJoke);
}
catch(e){}

function getIndexJoke()
{
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("indexJokeSetup").classList.add("hidden");
    document.getElementById("indexJokePunch").classList.add("hidden");

    var xhr = new XMLHttpRequest();
    
    xhr.responseType = "json"; // xhr.response will be parsed into a JSON object
    xhr.open('GET', "https://official-joke-api.appspot.com/random_joke", true);
    xhr.send();
 
    xhr.onreadystatechange = processRequest;
 
    function processRequest(e) 
    {
       
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            document.getElementById("indexJokeSetup").textContent = xhr.response.setup;
            document.getElementById("indexJokePunch").textContent = xhr.response.punchline;

            document.getElementById("loader").classList.add("hidden");
            document.getElementById("indexJokeSetup").classList.remove("hidden");
            document.getElementById("indexJokePunch").classList.remove("hidden");
        }
    }
}

function getDadJoke()
{
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("dadJoke").classList.add("hidden");

    var xhr = new XMLHttpRequest();
    
    xhr.responseType = "json"; // xhr.response will be parsed into a JSON object
    xhr.open('GET', "https://icanhazdadjoke.com/", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.send();
 
    xhr.onreadystatechange = processRequest;
 
    function processRequest(e) 
    {
       
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            document.getElementById("dadJoke").textContent = xhr.response.joke;
            document.getElementById("loader").classList.add("hidden");
            document.getElementById("dadJoke").classList.remove("hidden");
        }
    }
}

function getChuckJoke()
{
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("chuckJoke").classList.add("hidden");

    var xhr = new XMLHttpRequest();
    
    xhr.responseType = "json"; // xhr.response will be parsed into a JSON object
    xhr.open('GET', "https://api.chucknorris.io/jokes/random", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.send();
 
    xhr.onreadystatechange = processRequest;
 
    function processRequest(e) 
    {
       
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            document.getElementById("chuckJoke").textContent = xhr.response.value;
            document.getElementById("loader").classList.add("hidden");
            document.getElementById("chuckJoke").classList.remove("hidden");
        }
    }
}