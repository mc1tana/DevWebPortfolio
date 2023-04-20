const projetInfo = document.querySelector('.infoProject')
const maitriseLanguage=[
    {name:"HTML", LearnTaux:95},
    {name:"JavaScript", LearnTaux:85},
    {name:"CSS", LearnTaux:85},
    {name:"PHP", LearnTaux:60},
    {name:"C#", LearnTaux:60}
]
const gestionDonees=[
    {name:"mySQL", LearnTaux:85},
    {name:"SQlite", LearnTaux:85},
    {name:"MongoDB", LearnTaux:75},
    {name:"SQL", LearnTaux:70},
]
const describeProject=[
    {name:"booki", title:"Font end site booki",frame:"Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end.", mission:"Réalisation du front end d'un site de reservation villa et hotel à partir de maquettes." , technique:"Site mobile first responsive, aucune erreur ni alerte au validateur W3C HTML et CSS, site compatible avec les dernières versions de Chrome et Firefox.", techno:["Html","Css"], link:"https://mc1tana.github.io/Booki/",image:"./assets/images/SmartPhone.png"},
    {name:"kasa", title:"Font end site Kasa",frame:"Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end.", mission:"Réalisation du front end d'un site de presentation immobiliére" , technique:"Site mobile first responsive, utilisation de react, integration routeur, page 404", techno:["Html","Css","js","react"], link:"https://mc1tana.github.io/Kasa/",image:"./assets/images/phoneKasa.png"},
    {name:"nina", title:"Font end site Nina + Logique Js",frame:"Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end.", mission:"Création et optimisation SEO et performance d'un site accessible pour une plateforme de photographes à partir de maquettes" , technique:"Optimisation globale du site, tant sur les performances que sur le SEO mettre en place le référencement local en utilisant Schema.org, ajouter les metas pour les réseaux sociaux faire les modifications liées à l’accessibilité du site produire un rapport d’optimisation présentant toutes vos actions et leur impact", techno:["Html","Css","Js","Wave"], link:"https://mc1tana.github.io/SEONina/",image:"./assets/images/phoneNina.png"},
    {name:"sophie", title:"Font end site Sophie + Logique Js",frame:"Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end.", mission:"Réalisation du front end d'un site de presentation architecte avec espace de connection et logique de filtre des travaux" , technique:"Site mobile first responsive, aucune erreur ni alerte au validateur W3C HTML et CSS, site compatible avec les dernières versions de Chrome et Firefox.", techno:["Html","Css","js"], link:"https://mc1tana.github.io/Portfolio-architecte-sophie-bluel/", image:"./assets/images/ordiSophie.png"}
]
function simuleClick(e){
    e.preventDefault()
    if(e.target.classList.contains('fa-arrow-right')){
        console.log(e.target.parentNode.parentNode)
        e.target.parentNode.parentNode.click()
    }else
    {e.target.parentNode.click()}
}
function leaveProject(e){
e.target.parentNode.removeChild(document.querySelector('infoProject'))
}
function overProject(e){
   const parent =e.target.parentNode
   const info=`<div class="infoProject" onclick='clickProject(event)' data-name-project="${e.target.dataset.nameProject}">
                    <h4 onclick="simuleClick(event)">${e.target.dataset.nameProject}</h4>
                    <p onclick="simuleClick(event)">En voir plus <i class="fa-solid fa-arrow-right fa-beat-fade"></i></p>
                </div>`;
    parent.innerHTML +=info
    document.querySelector(".infoProject").style.boxShadow = " 2px 4px 9px black";
     parent.addEventListener('mouseleave',()=>{
        if(document.querySelector(".infoProject"))
        {
            parent.removeChild(document.querySelector(".infoProject"));
            parent.style.transform='translateY(0px)'
        }
     })
}
function clickProject(e){
    describeProject.forEach((elt)=>{
      
        if(elt.name==e.target.dataset.nameProject){
            e.target.parentNode.parentNode.parentNode.innerHTML+= `<div class="modal" onclick='modalLeave(event)'>
                                                                        <section class="modalProject"> 
                                                                                    <div class="phone">
                                                                                        <img class="${elt.name}-display" src=${elt.image}>                                                          
                                                                                    </div>
                                                                                    <article>
                                                                                        <h4>${elt.title}</h4>
                                                                                        <p>${elt.frame}</p>
                                                                                        <h5>Mission</h5>
                                                                                        <p>${elt.mission}</p>
                                                                                        <h5>Technologies utilisées</h5>
                                                                                        <p class="techno" ></p>
                                                                                        <a href="${elt.link}" target="_blank"><button name="btnModal">Visiter le site</button></a>
                                                                                    </article>
                                                                                    <i class="fa-solid fa-xmark" onclick='modalLeave(event)'></i>
                                                                        </section>
                                                                    </div>`
        elt.techno.forEach((tech)=>{
            document.querySelector('.techno').innerHTML+=`<span class="technoUse">${tech}</span>`
        })
        }
    })
  if(document.querySelector(".infoProject"))
    {document.querySelector(".infoProject").parentNode.removeChild(document.querySelector(".infoProject"))}
}

function modalLeave(e){
   if(e.target.classList.contains('modal')){
        e.target.parentNode.removeChild(document.querySelector(".modal"))
   }else if(e.target.classList.contains('fa-xmark')  && document.querySelector(".modal")){
    document.querySelector("#project").removeChild(document.querySelector(".modal"))
   }
}

window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    if(document.querySelector('#about').offsetTop-scrollY<0){
        document.querySelector('nav').style.backgroundColor="#4283b8";
        Array.from(document.querySelectorAll('nav a')).forEach((lien)=>{
            lien.style.color="white";
        })
    }else{
        document.querySelector('nav').style.backgroundColor="white";
        Array.from(document.querySelectorAll('nav a')).forEach((lien)=>{
            lien.style.color="#4283b8";
        })
    }
    fillOnGoodOffset(document.querySelector(".webdev"),document.querySelectorAll(".webdev .fillJauge"))
    fillOnGoodOffset(document.querySelector(".dataManagement"),document.querySelectorAll(".dataManagement .fillJauge"))
});
function structureOfFillJauge(tbLearnThing, parentElt){
    tbLearnThing.forEach((lang)=>{
        parentElt.innerHTML+=`
                                                <li>
                                                        <div class="idSkill">
                                                              <p>${lang.name}</p>
                                                              <p>${lang.LearnTaux}%</p>
                                                        </div>
                                                        <div class="jauge">
                                                            <div class="fillJauge" data-learn=${lang.LearnTaux}></div>
                                                        </div>         
                                                </li>`
    })
}
function fillOnGoodOffset(parentJauge,fillJauge){
    if((parentJauge.offsetTop)-(scrollY)<70 && fillJauge[0].clientWidth==0){
        fillJauge.forEach((jauge)=>{
            
            const fillJaugeFrame = new KeyframeEffect(
                jauge, // element to animate
                [
                  { width: "0" }, // keyframe
                  { width: jauge.dataset.learn+"%" }, // keyframe
                ],
                { duration: 2500, fill: "forwards",easing:'ease' } // keyframe options
              );     
              const fillJaugeAnim = new Animation(
                  fillJaugeFrame,
                document.timeline
              ); 
              // Play rabbit animation
              fillJaugeAnim.play();
        })
    }
}
window.addEventListener('load',()=>{
    structureOfFillJauge(maitriseLanguage,document.querySelector("#skill .webdev ul"))
    structureOfFillJauge(gestionDonees,document.querySelector("#skill .dataManagement ul"))
})
