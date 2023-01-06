

// //Fetch request for all animals

// document.addEventListener("DOMContentLoaded", () => {
  //   getFish();
// })
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1899fde54bmsh5de83a52e80fa69p1b73ccjsn1a72bda5310e',
// 		'X-RapidAPI-Host': 'fish-species.p.rapidapi.com'
// 	}
// };

// function getFish(){
// fetch('https://fish-species.p.rapidapi.com/fish_api/group?meta_property=scientific_classification&property_value=actinopterygii&meta_property_attribute=class', options)
// 	.then(response => response.json())
// 	.then(response => {displayFish(response)})
// 	.catch(err => console.error(err));  

// }
// //Initializing the rendering process
// //Getting the fish data and rendering the fish to the DOM

// function displayFish(fish) {
//   fish.forEach((fish) => {
//     const fishContainer = document.getElementById("fish-container")
//     const fishDiv = document.createElement("div")
//     fishDiv.className = "fish"

//     // Creating a like button for each fish
//     const likeButton = document.createElement("button")
//     likeButton.innerHTML = "Like"

//     let likeCount = 0
//     likeButton.addEventListener("click", () => {
//       likeCount++
//       console.log(`Like count: ${likeCount}`)
//       likeButton.innerHTML = `Like (${likeCount})`
//     })

//     // Creating a comment button for each fish
//     const commentButton = document.createElement("button")
//     commentButton.innerHTML = "Comment"
//     const commentsList = document.createElement("ul")
//     commentButton.addEventListener("click", () => {
//       const comment = prompt("Enter your comment:")
//       if (comment) {
//         const commentItem = document.createElement("li")
//         commentItem.innerHTML = comment
//         commentsList.appendChild(commentItem)
//       }
//     })

//     fishDiv.innerHTML = `
//       <img src="${fish.img_src_set["2x"]}" alt="fish">
//       <h3> Name: ${fish.name}</h3>
//       <h4> Binomial Name: ${fish.meta.binomial_name}
//       <h4> Class:${fish.meta.scientific_classification.class}
//       <h4> Family: ${fish.meta.scientific_classification.family}
//       <h4> Phylum: ${fish.meta.scientific_classification.phylum}
//       `
//     // Appending the like button, comment button, and comments list to the fishDiv
    
//     fishDiv.appendChild(likeButton)
//     fishDiv.appendChild(commentButton)
//     fishDiv.appendChild(commentsList)

//     fishContainer.appendChild(fishDiv)
//   })

// //Working on the search button
// const btn = document.getElementById("search-button")
//     btn.addEventListener("click", () => {
//         const input = document.getElementById("search-input")
//         const fishContainer = document.getElementById("fish-container")
//         fishContainer.innerHTML = ""
//         const fishFilter = fish.filter(fish => fish.name.toLowerCase().includes(input.value.toLowerCase()))
//         displayFish(fishFilter)
//     }
//     )}
document.addEventListener("DOMContentLoaded", () => {
  getEmoji();
})
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '75d6874b30msh3b5b6e19641f906p120342jsnaf1bb02f39a6',
		'X-RapidAPI-Host': 'funny-emojis.p.rapidapi.com'
    }
  };
  function getEmoji() {
    fetch('https://funny-emojis.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  }
  function displayEmoji(emoji){
    emoji.forEach(emoji => {
        const emojiContainer = document.getElementById("emoji-container")
        const emojiDiv = document.createElement("div")
        emojiDiv.className = "emoji"
        emojiDiv.innerHTML = `

       <h3>${emoji.category}</h3>
       <h3>${emoji.category_name}</h3>
       <img src="${emoji.url}" alt="emoji">
        `
        emojiContainer.appendChild(emojiDiv)
})

  }
