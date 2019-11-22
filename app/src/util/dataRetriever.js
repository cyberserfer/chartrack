// Async/Await approach https://tutorialzine.com/2017/07/javascript-async-await-explained

// The async keyword will automatically create a new Promise and return it.
async function getJSONAsync() {

    // The await keyword saves us from having to write a .then() block.
    let json = await axios.get('https://tutorialzine.com/misc/files/example.json');

    // The result of the GET request is available in the json variable.
    // We return it just like in a regular synchronous function.
    return json;
}

//We can call our async function like this:

getJSONAsync().then(function (result) {
    // Do something with result.
});