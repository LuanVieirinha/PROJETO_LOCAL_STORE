const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(e){
   // previne a ação padrao do submit
    e.preventDefault();


   // console.log(e);
   // console.log(formulario.evento.value);

   adicionarEvento();
});


function adicionarEvento(){
//buscar os dados do local storage
const eventos = JSON.parse(localStorage.getItem('eventos')) || [];


    //buscar os dados do form
const nomeEvento = formulario.evento.value;
const dataEvento = formulario.dataEvento.value;

    //adiciona o evento na lista de eventos

    eventos.push({
       nomeEvento,
       dataEvento

    });

    //guarda a lista atualizada no local storage
    localStorage.setItem('eventos', JSON.stringify(eventos));
}
