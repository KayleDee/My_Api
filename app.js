document.getElementById('btn').addEventListener('click', generateJoke);
generateJoke();

async function generateJoke() {
    const jokeRes = await fetch('https://icanhazdadjoke.com/', 
    {
        headers: {
            accept: 'application/json'
        }
    });
   

    const joke = await jokeRes.json();
    console.log(joke);
    document.getElementById("content").innerHTML = joke.joke;
}
