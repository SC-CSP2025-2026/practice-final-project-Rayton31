# Final Project Template [Replace with your project name]


## Overview
This guide will help you complete your final project using the API proxy I've set up. You'll learn how to access various APIs, manage your budget, and build an awesome project!

---

## Part I - Choose Your API

### Using the API Proxy

I've set up a special API proxy that gives you access to many APIs without needing to sign up for each one individually. Here's what you need to know:

**What You Get:**
- **Your API Key** - A unique code just for you (I'll give this to you)
- **The Proxy URL** - `https://student-api-proxy.onrender.com`
- **$5.00 Budget** - For making API calls
- **No Credit Card Required** - Everything is pre-configured!

**Keep your API key safe!** Don't share it with other students.

### Available APIs

Check what APIs are available to you:
```
https://student-api-proxy.onrender.com/apis
```

Open this URL in your browser to see the full list with costs per call!

### Recommended Free/Cheap APIs on RapidAPI

Here are some great APIs I can add for you (just ask!):

**Entertainment & Fun:**
- **Dad Jokes** (`dad-jokes.p.rapidapi.com`) - Random dad jokes - FREE
- **JokeAPI** (`jokeapi-v2.p.rapidapi.com`) - Various joke types - FREE
- **Anime Quotes** (`animechan.p.rapidapi.com`) - Anime character quotes - FREE
- **Chuck Norris Jokes** (`matchilling-chuck-norris-jokes-v1.p.rapidapi.com`) - FREE
- **Random User Generator** (`random-user-generator-api.p.rapidapi.com`) - Fake user profiles - FREE

**Information & Data:**
- **Weather API** (`weatherapi-com.p.rapidapi.com`) - Current weather & forecasts - FREE tier
- **Country Info** (`restcountries-v1.p.rapidapi.com`) - Country data - FREE
- **Dictionary** (`dictionary-by-api-ninjas.p.rapidapi.com`) - Word definitions - FREE
- **Numbers Trivia** (`numbersapi.p.rapidapi.com`) - Fun number facts - FREE
- **IP Geolocation** (`ip-geolocation-ipwhois-io.p.rapidapi.com`) - Location by IP - FREE

**Movies & TV:**
- **IMDB** (`imdb236.p.rapidapi.com`) - Movie data - ~$0.01/call
- **Movies Database** (`moviesdatabase.p.rapidapi.com`) - Movie info - FREE tier

**Animals:**
- **Dog Facts** (`dog-facts2.p.rapidapi.com`) - Random dog facts - FREE
- **Cat Facts** (`cat-fact.p.rapidapi.com`) - Random cat facts - FREE
- **Dog API** (`dog-api2.p.rapidapi.com`) - Random dog images - FREE

**Other Cool APIs:**
- **Quotes** (`quotes15.p.rapidapi.com`) - Inspirational quotes - FREE
- **COVID-19 Data** (`covid-193.p.rapidapi.com`) - COVID statistics - FREE
- **NBA Stats** (`api-nba-v1.p.rapidapi.com`) - Basketball stats - FREE tier

### Want an API That's Not Listed?

**How to Request a New API:**

1. **Find the API on RapidAPI** (https://rapidapi.com)
2. **Get the API Host** - Look in the code examples for `X-RapidAPI-Host`
   - Example: `dog-facts2.p.rapidapi.com`
3. **Send me this information:**
   - API Name (e.g., "Dog Facts")
   - API Host (e.g., "dog-facts2.p.rapidapi.com")
   - Link to the RapidAPI page
   - What you want to use it for

**Example Request:**
```
Hey! Can you add this API?

API Name: Dog Facts
API Host: dog-facts2.p.rapidapi.com
Link: https://rapidapi.com/api/dog-facts2
Purpose: I want to build a random dog facts app for my project
```

I'll review it and add it if it's appropriate for the class!

### Testing Your API

Once I've confirmed your API is available, test it with this code:

```javascript
const url = 'https://student-api-proxy.onrender.com/api/API-HOST/ENDPOINT';
const options = {
  method: "GET",
  headers: {
    'X-API-Key': 'YOUR-API-KEY-HERE'
  }
};

fetch(url, options)
  .then((response) =>
    response.json().then((result) => {
      console.log(result.data); // Your API data
      console.log(`Cost: $${result.meta.cost}`);
      console.log(`Remaining: $${result.meta.remaining_budget}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });
```

### Your Chosen API
[Replace this with your chosen API name and host]

**Example:**
- API Name: Dad Jokes
- API Host: `dad-jokes.p.rapidapi.com`
- Endpoints I'll use: `/random/joke`, `/random/jokes/5`

---

## Part II - Flush Out Requirements

Now that you've chosen your API, make sure you have a plan to meet the requirements. Answer the following questions in the README:

**1. What is going to be your list?**
(e.g., jokes from Dad Jokes API, weather forecasts from Weather API, movie results from IMDB API)

[Your answer here]

**2. What is going to be your function with a parameter?**
(e.g., `loadJokesByCategory` with the parameter `category`, `getWeatherByCity` with the parameter `cityName`)

Describe how you are going to use the parameter in your code:

[Your answer here]

**3. What is going to be your loop?**
(e.g., loop to display jokes, loop to display forecast days, loop to display movie results)

[Your answer here]

---

## How To Use the API Proxy

### The Basic Pattern

**Using the Proxy (what you'll do):**
```javascript
const url = 'https://student-api-proxy.onrender.com/api/dad-jokes.p.rapidapi.com/random/joke';
const options = { 
  method: "GET",
  headers: { 'X-API-Key': 'YOUR-API-KEY-HERE' }
};
const response = await fetch(url, options);
const result = await response.json();
const data = result.data; // Your API response
```

**Key Changes from Regular APIs:**
1. URL becomes: `https://student-api-proxy.onrender.com/api/[API-HOST]/[ENDPOINT]`
2. Add your API key in headers: `'X-API-Key': 'your-key'`
3. Data is in `result.data`, cost info is in `result.meta`

### Complete Examples

#### Example 1: Simple Button Click (Dad Jokes)

```javascript
const jokeButton = document.querySelector("#joke-btn");
const jokeDisplay = document.querySelector(".joke-display");

const loadJoke = async () => {
  const url = 'https://student-api-proxy.onrender.com/api/dad-jokes.p.rapidapi.com/random/joke';
  
  const options = {
    method: "GET",
    headers: { 'X-API-Key': 'YOUR-API-KEY-HERE' }
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const joke = result.data;
  
  jokeDisplay.innerHTML = `
    <p><strong>Setup:</strong> ${joke.setup}</p>
    <p><strong>Punchline:</strong> ${joke.punchline}</p>
  `;
};

jokeButton.addEventListener("click", loadJoke);
```

#### Example 2: Multiple Buttons with Parameters (Weather)

```javascript
const cityButtons = document.querySelectorAll(".city-btn");
const weatherDisplay = document.querySelector(".weather-display");

const loadWeather = async (event) => {
  event.preventDefault();
  
  const city = event.currentTarget.cityName;
  if (!city) {
    alert("City not set properly");
    return;
  }
  
  // Notice how we add the city parameter
  const url = `https://student-api-proxy.onrender.com/api/weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
  
  const options = {
    method: "GET",
    headers: { 'X-API-Key': 'YOUR-API-KEY-HERE' }
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const weather = result.data;
  
  weatherDisplay.innerHTML = `
    <h3>${weather.location.name}, ${weather.location.country}</h3>
    <p>Temperature: ${weather.current.temp_f}°F</p>
    <p>Condition: ${weather.current.condition.text}</p>
  `;
};

// Set up multiple city buttons
cityButtons.forEach(button => {
  button.addEventListener("click", loadWeather);
});

// Assign city names to buttons
document.querySelector("#nyc-btn").cityName = "New York";
document.querySelector("#la-btn").cityName = "Los Angeles";
document.querySelector("#chicago-btn").cityName = "Chicago";
```

#### Example 3: User Input with Search (Movies)

```javascript
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-btn");
const resultsDisplay = document.querySelector(".results");

const searchMovies = async () => {
  const searchTerm = searchInput.value.trim();
  if (!searchTerm) {
    alert("Please enter a movie title");
    return;
  }
  
  const url = `https://student-api-proxy.onrender.com/api/imdb236.p.rapidapi.com/imdb-search?query=${searchTerm}`;
  
  const options = {
    method: "GET",
    headers: { 'X-API-Key': 'YOUR-API-KEY-HERE' }
  };

  resultsDisplay.innerHTML = "Loading...";
  
  const response = await fetch(url, options);
  const result = await response.json();
  const movies = result.data;
  
  resultsDisplay.innerHTML = "";
  movies.forEach((movie) => {
    const movieCard = `
      <div class="movie-card">
        <h4>${movie.title}</h4>
        <p>Year: ${movie.year}</p>
        <p>Rating: ${movie.rating}/10</p>
      </div>
    `;
    resultsDisplay.insertAdjacentHTML("beforeend", movieCard);
  });
};

searchButton.addEventListener("click", searchMovies);

// Also search when pressing Enter
searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchMovies();
  }
});
```

#### Example 4: Category Selection (Joke Categories)

```javascript
const funnyButton = document.querySelector("#funny-btn");
const dadButton = document.querySelector("#dad-btn");
const punchlineButton = document.querySelector("#punchline-btn");
const jokesList = document.querySelector(".jokes-list");

const loadJokesByCategory = async (event) => {
  event.preventDefault();
  
  const category = event.currentTarget.category;
  if (!category) {
    alert("Category not set properly");
    return;
  }
  
  const url = `https://student-api-proxy.onrender.com/api/dad-jokes.p.rapidapi.com/jokes/search?term=${category}`;
  
  const options = {
    method: "GET",
    headers: { 'X-API-Key': 'YOUR-API-KEY-HERE' }
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const jokes = result.data;
  
  jokesList.innerHTML = "";
  jokes.forEach((joke) => {
    const listItem = `
      <li class="list-group-item">
        ${joke.setup} - ${joke.punchline}
      </li>
    `;
    jokesList.insertAdjacentHTML("beforeend", listItem);
  });
};

funnyButton.addEventListener("click", loadJokesByCategory);
funnyButton.category = "funny";

dadButton.addEventListener("click", loadJokesByCategory);
dadButton.category = "dad";

punchlineButton.addEventListener("click", loadJokesByCategory);
punchlineButton.category = "punchline";
```

#### Example 5: Getting Multiple Items (With Limit)

```javascript
const get5JokesBtn = document.querySelector("#get-5-jokes");
const get10JokesBtn = document.querySelector("#get-10-jokes");
const jokesList = document.querySelector(".jokes-list");

const loadMultipleJokes = async (event) => {
  const limit = event.currentTarget.limit;
  
  const url = `https://student-api-proxy.onrender.com/api/dad-jokes.p.rapidapi.com/random/jokes/${limit}`;
  
  const options = {
    method: "GET",
    headers: { 'X-API-Key': 'YOUR-API-KEY-HERE' }
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const jokes = result.data;
  
  jokesList.innerHTML = "";
  jokes.forEach((joke) => {
    const listItem = `
      <li class="list-group-item">
        ${joke.setup}<br>
        <em>${joke.punchline}</em>
      </li>
    `;
    jokesList.insertAdjacentHTML("beforeend", listItem);
  });
};

get5JokesBtn.addEventListener("click", loadMultipleJokes);
get5JokesBtn.limit = 5;

get10JokesBtn.addEventListener("click", loadMultipleJokes);
get10JokesBtn.limit = 10;
```

### Understanding URL Structure

When you see an API endpoint on RapidAPI like:
```
https://dad-jokes.p.rapidapi.com/random/joke
```

Change it to:
```
https://student-api-proxy.onrender.com/api/dad-jokes.p.rapidapi.com/random/joke
```

**Pattern:**
```
https://student-api-proxy.onrender.com/api/[API-HOST]/[ENDPOINT]?[PARAMETERS]
```

---

## Part III - Design HTML

Use [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) to design your HTML. Make sure it is visually appealing. Use dummy images and [Lorem Ipsum](https://loremipsum.io/) if needed as placeholders.

---

## Part IV - Code Up App

Finish coding up the app. **DO NOT** use generative AI. Look at previous projects for examples on how to meet the requirements. If you use any other resources please cite them below.

Remember to run your project first run the command:
```
npm install
```
then:
```
node server.js
```

### Pro Tips for Your Project

#### 1. Check Your Budget

Use this command in your terminal to check your remaining budget:

```bash
curl https://student-api-proxy.onrender.com/my/usage \
  -H "X-API-Key: YOUR-API-KEY-HERE"
```

Response:
```json
{
  "name": "Your Name",
  "budget": 5.00,
  "spent": 0.15,
  "remaining": 4.85,
  "recent_calls": [...]
}
```

#### 2. Don't Spam the API

**Bad - Making calls too fast:**
```javascript
// DON'T DO THIS - Will hit rate limit!
for (let i = 0; i < 20; i++) {
  await fetch(url, options); // Too many calls at once!
}
```

**Good - Using delays in a loop:**
```javascript
// Add a delay between calls
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

for (let i = 0; i < 20; i++) {
  await fetch(url, options);
  await delay(1000); // Wait 1 second between calls
}
```

**Better - Cache results to avoid repeat calls:**
```javascript
// Store results so you don't call the API again
let cachedJokes = null;

const loadJokes = async () => {
  // Check if we already have the data
  if (cachedJokes) {
    console.log("Using cached data!");
    displayJokes(cachedJokes);
    return;
  }
  
  // Only call API if we don't have cached data
  const response = await fetch(url, options);
  const result = await response.json();
  cachedJokes = result.data; // Save for next time
  
  displayJokes(cachedJokes);
};

// First click: calls API
// Second click: uses cached data (no API call!)
```

#### 3. Understanding the Response

All responses include your cost and remaining budget:

```javascript
const response = await fetch(url, options);
const result = await response.json();

// The actual API data is in result.data
const apiData = result.data;

// Your cost info is in result.meta
console.log(`This call cost: $${result.meta.cost}`);
console.log(`Remaining: $${result.meta.remaining_budget}`);
```

### Common Errors & Solutions

#### "Invalid API key"
- ✅ Check you're using the correct API key I gave you
- ✅ Make sure you included the `X-API-Key` header
- ✅ Check for typos in your key

#### "API not approved"
- ✅ This API hasn't been added yet
- ✅ Ask me to add it
- ✅ Check the available APIs: `https://student-api-proxy.onrender.com/apis`

#### "Budget exceeded"
- ✅ You've spent your entire $5 budget
- ✅ Ask me to reset your budget
- ✅ Be more efficient with your API calls

#### "Rate limit exceeded"
- ✅ You made too many requests too quickly (max 100 per 15 minutes)
- ✅ Wait 15 minutes and try again
- ✅ Don't make API calls in tight loops

### External Resources
[List any external resources you used here]

---

## Part V - Complete Google Doc

Complete Google Doc about your project:
[Google Doc Template](https://docs.google.com/document/d/13qV28dQQ1foELBEA7lA9Imha7U4v1BoypI4pZIlsH-A/edit?tab=t.0)

Make a copy, fill it out, and paste the link below:

[Replace with your Google Doc link]

---

## Quick Reference

**Your Essentials:**
- **Proxy URL:** `https://student-api-proxy.onrender.com/api/[API-HOST]/[ENDPOINT]`
- **Your API Key:** `[I'll give you this]`
- **Header Required:** `'X-API-Key': 'your-key-here'`
- **Check Budget:** `https://student-api-proxy.onrender.com/my/usage`
- **See Available APIs:** `https://student-api-proxy.onrender.com/apis`

**Code Template:**
```javascript
const url = 'https://student-api-proxy.onrender.com/api/API-HOST/ENDPOINT?PARAMETERS';
const options = {
  method: "GET",
  headers: { 'X-API-Key': 'YOUR-KEY' }
};
const response = await fetch(url, options);
const result = await response.json();
const data = result.data;
```

---

## Need Help?

1. Check the available APIs first
2. Make sure your API key is correct
3. Check your budget hasn't run out
4. Ask me for help!

Happy coding! 🚀
