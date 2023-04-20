const ratio=0.3
const options = {
    root:null,
    rootMargin: '0px',
    threshold: ratio //intervient quand 100% du  composent est visible  si a 1
  }
  const intersect=(entries, observer)=>{
    entries.forEach(entry => {
        if(entry.intersectionRatio>ratio){
            entry.target.classList.add('revealVisible')
            observer.unobserve(entry.target)
        }
    });

  }

 const observer = new IntersectionObserver(intersect, options);
 document.querySelectorAll('[class*="reveal-"]').forEach((elt)=>{
        observer.observe(elt)
 })