# Fish-finder-application

****

## Project Description

"This application will display different types of fish species  and show it's specific info including English name and and  scientific names by consuming data from a public api." The user will be able to see the fish details and have the ability to search any specific fish displaying it's image, binomial classification

****

## Technologies Used

1. HTML
2. CSS
3. JavaScript

****

## Project set up

After identifying the appropriate api for our project, we start by creating a private repository in Github. In this case I used an api () from _rapidapi.com_ Clone the repository to the local folder and using _touch_ , create a README.md, index.js, index.html and style.css file. Another option is creating the files from the VS Code. Once we are done creating tyhe files, we run _code ._ in the terminal to open in VS Code. Our main concentrating is on the index.js file as it is the one that bears alot of work here.

****

## Project Handling

Our project is now set up and we have all the files needed, First we start by fetching the data from the api. Using fetch method we will extract the data from the public api.

The code used for this section was:

```javascript
const options = {

	method: 'GET',

	headers:_ {

		'X-RapidAPI-Key': '75d6874b30msh3b5b6e19641f906p120342jsnaf1bb02f39a6',

		'X-RapidAPI-Host': 'funny-emojis.p.rapidapi.com'
    }
 };
  function getEmoji() {

    fetch('https://funny-emojis.p.rapidapi.com/', options)

	.then(response => response.json())

	.then(response => console.log(response))

	.catch(err => console.error(err));
    
    }```

###