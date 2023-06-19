
const botaoMenuAbrir = document.querySelector('.menu'); 
const botaoMenuFechar = document.querySelector('.menu-fechar'); 


document.addEventListener('click', (e) => {

    const elemento = e.target; 

    if(elemento.classList.contains('menu')){
        setTimeout(function () {
            botaoMenuAbrir.style.display = 'none'; 
            botaoMenuFechar.style.display = 'block';
        }, 420)
    }else if (elemento.classList.contains('menu-fechar')) {
        setTimeout(function () {
            botaoMenuAbrir.style.display = 'block'; 
            botaoMenuFechar.style.display = 'none';
        }, 420)
    }else{
        return
    }

})

