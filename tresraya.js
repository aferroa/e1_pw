let board;
function createBoard(numRows, numCols) {
    const rows = []

    for (let i = 0; i < numRows; i++) {
        const casillas = []
        for (let j = 0; j < numCols; j++) {
            casillas.push({
                seMuestra : false,
                texto : ""
                

            })
        }

        rows.push(casillas)
    }

    return rows
}

function printBoard(board) {
    for (let row of board) {
        let rowStr = ""
        for (let casilla of row) {
            rowStr = rowStr + casilla + " "
        }
        console.log(rowStr)
    }
}

function setValue(board, row, col, value) {
    board[row][col] = value
}
 
//function getValue(board, row, col) {
const getValue = (board, row, col) => {
    return board[row][col]
}
 
  
const btn = document.getElementById('0_0');
btn.addEventListener('click', function(){
const myInsertText = 'O';
btn.innerHTML = myInsertText;})



function SiGano(board) {
    for (let i = 0; i < board.length; i++) {
        const casillas = board[i]
        for (let j=0; j < casillas.length; j++) {
            const butCasilla = document.getElementById(`${i}_${j}`).disabled = true;
            
        }}

const main = () => {
    board = createBoard(3, 3) 
    renderizarBoard(board)

    setValue(board, 1, 2, {
        seMuestra : false,
        emoji : "X"
    })
    console.log()
    renderizarBoard(board)

}
main()
