var modal = document.getElementById('modal-container');
var text=document.getElementById('text');
var closeBtn=document.getElementById('closeBtn');
var takeNotes=document.getElementById('takeNotes')


text.addEventListener('click',closeText);
function closeText(){
    text.style.display='none';
}

text.addEventListener('click',openModal);
function openModal(){
    modal.style.display='block';
}

closeBtn.addEventListener('click',closeModal);
function closeModal(){
    modal.style.display='none';
}

window.addEventListener('click',outsideClick);
function outsideClick(e){
    if(e.target === modal){
    modal.style.display='none';
    }
}
// window.onclick = function(e){
//     if(e.target == modal){
//         modal.style.display='none';
//     }
// }

closeBtn.addEventListener('click',openText);
function openText(){
    text.style.display='block';
}