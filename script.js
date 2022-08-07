function changeGroomName(e,className){
    let name = e.target.value;
    let element = document.querySelector(`.${className}`);
    element.innerText = name;

}

function changeDesign(e){

    let designName = e.target.value;
    let designHolder = document.querySelector('.commonDesign');
    designHolder.setAttribute('class', `commonDesign ${designName}`)

}