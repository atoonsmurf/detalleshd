

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector('#menu');

btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
   
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i<subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener("click",function(){
        if(window.innerWidth<1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;
            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            }else{

               
            subMenu.classList.add("desplegar");
            subMenu.style.height = height + "px";
            }
        }
    })
};

window.addEventListener("load", function(){

    this.document.getElementById("loader").classList.toggle("loader-2");
    $("body").removeClass('hidden');
});

$(document).ready(function(){
    $(window).scroll(function(){ 
        //scroll-up
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        });
        
    });
    //slider del dedo
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })

    

window.addEventListener('scroll', mostrarScroll);   
  
const $product = document.querySelector('.product');
$template = document.getElementById('template-product').content;
$fragment = document.createDocumentFragment();
cardContent = [
    {
        img :"img/prueba.png", 
        h3:"Torta Aniversario",
        span:"S/.270.00",
    },
{
    img :"img/prueba.png", 
    h3:"Torta Aniversario",
    span:"S/.270.00",
},
{
    img :"img/prueba.png", 
    h3:"Torta Aniversario",
    span:"S/.270.00",
},
{
    img :"img/prueba.png", 
    h3:"Torta Aniversario",
    span:"S/.270.00",
},
{
    img :"img/prueba.png", 
    h3:"Torta Aniversario",
    span:"S/.270.00",
},
{
    img :"img/prueba.png", 
    h3:"Torta Aniversario",
    span:"S/.270.00",
},
{
    img :"img/prueba.png", 
    h3:"Torta Aniversario",
    span:"S/.270.00",
},
{
    img :"img/prueba.png", 
    h3:"Torta Aniversario",
    span:"S/.270.00",   
},
{
    img :"img/prueba.png", 
    h3:"Torta Aniversario",
    span:"S/.270.00",
},
{
    img :"img/prueba.png", 
    h3:"Torta Aniversario",
    span:"S/.270.00",
},
{
    img :"img/prueba.png", 
    h3:"Torta Aniversario",
    span:"S/.270.00",
},
{
    img :"img/prueba.png", 
    h3:"Torta Aniversario",
    span:"S/.270.00",
},
];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute('src',el.img);
    $template.querySelector('h3').textContent =el.h3;
    $template.querySelector('span').textContent =el.span;

    let $clone= document.importNode($template,true);
    $fragment.appendChild($clone);
});

$product.appendChild($fragment);



