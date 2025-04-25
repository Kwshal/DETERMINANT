let counter = document.getElementById("counter");
let determinant = document.getElementById("determinant");
// let yourMatrix = document.getElementById("your-matrix");


let matrix = document.getElementById("matrix");
let matrixInp = document.querySelector('#matrix-inp');


matrixInp.addEventListener('input', () => {
     let matrixValue = matrixInp.value;
     let matrixArray = matrixValue.split(',').map(Number);
     let [a1, a2, a3, b1, b2, b3, c1, c2, c3] = matrixArray;
     matrix.innerHTML = `\\[
    
    \\text{det}(A) = \\left| A \\right| =  \\begin{bmatrix}
     ${a1 || "a_{1}"} & ${a2 || "a_{2}"} & ${a3 || "a_{3}"} \\\\
     ${b1 || "b_{1}"} & ${b2 || "b_{2}"} & ${b3 || "b_{3}"} \\\\
     ${c1 || "c_{1}"} & ${c2 || "c_{2}"} & ${c3 || "c_{3}"}
    \\end{bmatrix} 
    \\]
`
     //? matrixArray.length == 9 && matrixArray.every(Number) ? (determinant.style.display = "block") : (determinant.style.display = "none");

     MathJax.typeset();
});



// let matrixArray = matrix.value.split(',').map(Number);