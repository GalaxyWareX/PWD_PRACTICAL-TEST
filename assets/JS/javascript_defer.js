/* Add support on mobile */
var navList = document.getElementById("nav-lists");
function Show() {
navList.classList.add("showMenus");
}

function Hide(){
navList.classList.remove("showMenus");
}

/*  service modal */

const modalViews = document.querySelectorAll('.services-modal'),
      modalBtns = document.querySelectorAll('.services-button'),
      modalCloses = document.querySelectorAll('.services-modal--close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i)  => {
  modalBtn.addEventListener('click',()  => {
    modal(i)
  })
})

modalCloses.forEach((modalClose)  => {
  modalClose.addEventListener('click',()  => {
    modalViews.forEach((modalView) =>{
      modalView.classList.remove('active-modal')
    })
  })
})
