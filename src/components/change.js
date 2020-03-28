import React from 'react'

function Change(id,color) {
    let param =document.getElementById(id);
    param.style.transition = "background 1.0s linear 0s";
    param.style.background = color;
}

export default Change;