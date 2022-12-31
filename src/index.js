let characterForm = document.getElementById('search-form');
let searchInput = document.getElementById('fname');




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


function showCharacter(submitedCharacter) {  
  fetch('https://rickandmortyapi.com/api/character/?name='+ submitedCharacter)
  .then(res => res.json())
  .then(data => renderCharacter(data))   
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
  </div>
 

  </div>`
  
document.getElementById('search-form').appendChild(displayCharacter)
 
   
}



