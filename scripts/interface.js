/*
document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {


    let square = event.target;
    let postion = square.id;

    if (handleMove(postion)) {

        setTimeout(() => {
            alert(" O Jogo Acabou - O Vencedor foi " + playerTime);
        }, 10);

    };
    updateSquare(postion);
}

function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })

}
*/

// Fazer com seja capaz de executar a ação de click do usuario...

document.addEventListener("DOMContentLoaded",() => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click',handleClick);
    })
})

function handleClick(event) {
    // console.log(event.target)
    let square = event.target
    let position = square.id

    if(handleMove(position)){
        setTimeout(() => {
             alert('o jogo acabou!')
            
        },10)
       
    }
    updateSquares();
}

function updatesquare(position){
    let square = document.getElementById(position.toString())
}

function  updateSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let position =square.id
        let simbol = board[position]
        if(simbol != ''){
            square.innerHTML = `<dic class='${simbol}'></div>`
        }
    })
}