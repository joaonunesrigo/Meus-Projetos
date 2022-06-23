var totalslides = document.querySelectorAll('.slider-item').length; /*Criação da var totalslides */

document.querySelector('.slider--width').style.width = 
`calc(100vw * ${totalslides})`;/*Seleção do slider--width e formatação de sua
largura, multiplicando a largura total da tela pela quantidade de slides(3)*/



document.querySelector('.slider-controls').style.height = 
`${document.querySelector(".slider").clientHeight}px`; /*Para a centralização dos botões
apliquei a altura dos sliders sobre eles.*/






var currentslide = 0 /*Criação da var currentslide de valor 0*/


function goback(){ /*Function goback para retornar os slides*/
    currentslide--;
    if(currentslide < 0){                  /* Se a var currentslide for menor que 0 
                                                   currentslide vai ser igual a totalslides -1
                                                (último slide do loop)*/
        currentslide = totalslides -1
    }
    marginupdate()

}


function gonext(){
    currentslide++
    if(currentslide >(totalslides -1)){    /*Se currentslide(0) > totalslides -1, volta pro 0 */
        currentslide = 0
    }
    marginupdate()

    


}
function marginupdate(){    /* função marginupdate para diminuir a largura total da tela e mudar de slide*/
    var sliderwidth = document.querySelector('.slider-item').clientWidth
    var marginnew = (currentslide * document.body.clientWidth) /*currentslide vezes a largura da tela*/
   
    document.querySelector('.slider--width').style.marginLeft = `-${marginnew}px`


}

setInterval(gonext, 5000)


