
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

function getDadJoke()
{
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
        }
    }
}

function getChuckJoke()
{
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
            debugger;
            document.getElementById("chuckJoke").textContent = xhr.response.value;
        }
    }
}