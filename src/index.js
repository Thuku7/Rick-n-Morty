let characterForm = document.getElementById('search-form');
let searchInput = document.getElementById('fname');




characterForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let submitedCharacter = searchInput.value
    showCharacter(submitedCharacter)
    
})


function showCharacter(submitedCharacter) {  
  fetch('https://rickandmortyapi.com/api/character/?name='+ submitedCharacter)
  .then(res => res.json())
  .then(data => renderCharacter(data))   
}

function renderCharacter(data) {
  let displayCharacter = document.createElement('li')
}



