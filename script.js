const container=document.querySelector("#container");

const button=document.querySelector('#button');
button.addEventListener("click",()=>
{
    container.innerHTML="";

    const input=prompt("Enter the size of the grid");

    if (input>100){
        alert("Maximum size is 100");
        return;
    }

    for(let row=0;row<input;row++){
const rowDiv=document.createElement("div");
rowDiv.classList.add("row");
for(let col=0;col<input;col++){
    const square=document.createElement("div");
    square.style.width=(960/input)+"px";
    square.style.height=(960/input)+"px";
    square.dataset.opacity=0;
    square.addEventListener("mouseover",()=>
{
    let opacity=Number(square.dataset.opacity);

    opacity+=0.1;

    if(opacity>1){
        opacity=1;
    }

    square.dataset.opacity=opacity;

    square.style.backgroundColor=`rgba(0,0,0, ${opacity})`;

    /*const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);

    square.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;*/
}
);

    rowDiv.appendChild(square);
    square.classList.add("square");
}

container.appendChild(rowDiv);
}
});