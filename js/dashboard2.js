    //   recupera o valor salvo em local storage e insere no HTML da pagina
const storedName = localStorage.getItem('username');
document.getElementById("nomeUser").innerHTML=storedName;
console.log(storedName);