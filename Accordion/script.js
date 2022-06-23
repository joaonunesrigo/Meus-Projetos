var accordionquestion = document.querySelectorAll('.accordion-item-question')
/*Criação da var accordionquestion*/



accordionquestion.forEach(accordionquestion => {  /*Para cada accordionquestion ao clicar - active*/
    accordionquestion.addEventListener('click',()=> { 
        accordionquestion.classList.toggle('active')
    
        
        var accordionbody = accordionquestion.nextElementSibling; /* Criação da var accordionbody e 
        sua condição de igual para accordionquestion com aplicação de nextElementSibling*/
        
    
        if(accordionquestion.classList.contains('active')){
        accordionbody.style.maxHeight = accordionbody.scrollHeight + "px"
        }
        else{
        accordionbody.style.maxHeight = 0
        }
    })
})