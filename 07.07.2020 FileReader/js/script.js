let upload=document.getElementById("upload");
let table=document.querySelector(".table");
let remove=document.getElementById("remove");
let area=document.querySelector(".item");

area.ondragover=function(ev){
    ev.preventDefault();
}

area.ondrop=function(ev){
    ev.preventDefault();
    Upload(ev.dataTransfer.files);
}

remove.onclick=()=>{
    table.lastElementChild.innerHTML="";
    remove.classList.remove("show");
    table.classList.remove("show");
}

upload.onclick=function(){
    this.nextElementSibling.click();
}

upload.nextElementSibling.onchange=function(ev){
    Upload(ev.target.files);
    this.value="";
}

function Upload(files){
    for (const file of files) {
        const reader=new FileReader();
        
        reader.onloadend=function(ev){
            let tr=document.createElement("tr");

            let tdImg=document.createElement("td");
            let img=document.createElement("img");
            img.setAttribute("src",ev.target.result);
            tdImg.appendChild(img);

            let tdName=document.createElement("td");
            tdName.innerText=file.name;

            let tdSize=document.createElement("td");
            tdSize.innerText=file.size;

            tr.append(tdImg,tdName,tdSize);
            table.lastElementChild.append(tr);
        }
        reader.readAsDataURL(file);
    }
    remove.classList.add("show");
    table.classList.add("show");
}