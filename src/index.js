let characterForm = document.getElementById('search-form');
let searchInput = document.getElementById('fname');
let createCharacterForm = document.getElementById('create-character-form');




characterForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let submitedCharacter = searchInput.value
    if(submitedCharacter === "") {
      alert("Enter Valid Character")
    } else {
      showCharacter(submitedCharacter)
      
      

    }
    
    

    characterForm.reset();
    
})

createCharacterForm.addEventListener('submit', function(event){
  event.preventDefault()
  let characterObject = {
    image : event.target.character-image.value,
    name : event.target.charactername.value,
    status : event.target.status.value,
    origin : event.target.originname.value,
    species : event.target.species.value

  }
  
  showCharacter(characterObject)
  updateCharacter(characterObject)
  

  
  createCharacterForm.reset()
})


function showCharacter(submitedCharacter) {  
  fetch('https://rickandmortyapi.com/api/character/?name='+ submitedCharacter)
  .then(res => res.json())
  .then(data => renderCharacter(data))   
}

function updateCharacter(characterObject) {
  fetch('http://localhost:3000/results',{
    method: "POST",
    headers : {
      'Content-type' : 'application/json'
    },
    body:JSON.stringify(characterObject)
  })
  .then(res => res.json)
  .then(data => console.log(data))
}

function renderCharacter(data) {
  let displayCharacter = document.createElement('li');
  displayCharacter.innerHTML = `
  <div class="DisplayCharacter">
  <div class="Character-image"><img src="${data.results[0].image}" height="400px" width="400px"></div>
  <div class="character-info">
  <p> Character Name: ${data.results[0].name}</p>
  <p> Status: ${data.results[0].status}</p>
  <p> Species: ${data.results[0].species}</p>
  <p> Origin: ${data.results[0].origin.name}</p>
  <div>  <button type="button" id="like">Like </button><span id="like-result">0</span></div>

  <button type="button">Delete</button>
  </div>
 

  </div>`
  
document.getElementById('search-form').appendChild(displayCharacter)
displayCharacter.addEventListener('click',function() {
  let initialLike = 0;
  let likes = displayCharacter.querySelector("#like-result");
  likes.innerHTML =`${initialLike + 1 }` 
} )
 
   
}



