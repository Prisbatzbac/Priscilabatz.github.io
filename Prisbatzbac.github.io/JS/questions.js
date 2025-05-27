(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)
    
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');            
            question.children[0].classList.toggle('questions__arrow--rotate');

            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }
 
            answer.style.height = `${height}px`;
        });
    });
})();



const modal = document.getElementById('modal-hover');

document.querySelectorAll('.foto img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    modal.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    modal.style.display = 'flex';

    // Esperar a que el modal se cargue antes de agregarle el listener
    setTimeout(() => {
      modal.addEventListener('mouseleave', () => {
        modal.style.display = 'none';
        modal.innerHTML = '';
      });
    }, 100);
  });
});
