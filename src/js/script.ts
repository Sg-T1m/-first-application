const modal_meny:Element  = document.querySelector('.Nav_modal_open')
const modal:Element = document.querySelector('.Modal_meny_content')
function modal_open(){
    modal?.classList.add("open")
};
function modal_close(){
    modal?.classList.remove("open")
}
modal_meny?.addEventListener("click", ()=>{
    const modal = document.querySelector('.Modal_meny_content')
if(modal.classList.contains('open')){
    
    modal_close()
}else{
    modal_open()
}
});
