try{const checkBtn = document.getElementById('check-btn'),
    modalBlock = document.querySelector('.successent'),
    modalContent = document.querySelector('.successent-bg__content');

  checkBtn.addEventListener('click', addModal);
    function addModal(e){
        e.preventDefault();
        modalBlock.classList.add('_show')
        modalBlock.style.opacity = 1;

        setTimeout(addContent, 200)
        setTimeout(delContent, 4300)
        setTimeout(delModal, 5000)
    }
    function addContent(){
        modalContent.classList.add('_show')
    }
    function delContent(){
        modalContent.classList.remove('_show')
    }
    function delModal(){
        modalBlock.classList.remove('_show')
        modalBlock.style.opacity = 1;

    }
}catch(e){
    console.log('2');
}