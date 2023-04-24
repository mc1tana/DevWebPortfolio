const planeteOne = document.querySelector('.planeteOne img')
let rotation=0

    setInterval(() => {
        rotation+=2
        planeteOne.style.transform=`rotate(${rotation}deg)`
    }, 20);


