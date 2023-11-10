var cardsDuvidas = document.querySelectorAll('.card');

cardsDuvidas.forEach(
    function (card) {
        card.addEventListener('click', function (){
            card.classList.toggle('ativa');
        })
    }
)


