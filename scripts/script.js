const formulario = document.getElementById("form-cadastro");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
      nome,
      email,
    }
    let convertData = JSON.stringify(data);

    if(localStorage.getItem(email) === null){
      localStorage.setItem(email, convertData);
      alert('Sucesso! As informações foram cadastradas.');
    } else{
      alert('Erro! As informações já foram cadastradas antes.');
    } 
});
