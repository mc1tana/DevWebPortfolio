let title = document.querySelector(".writing");
 	var mouve=0;
	var dataText = ["Bonjour !" ,"Je suis Michel Cardon" ,"développeur Web" ];
	
	function typeWriter(currentText, line , j, tt, nb, i) {

		if (j < currentText.length) {
            // console.log(currentText)
			line.innerHTML += currentText[j];
			// wait for a while and call this function again for next character
			setTimeout(function() {
			  typeWriter(currentText, line , j + 1, tt, nb, i)
				}, 40);
		  }
		if(j == currentText.length) {
			i ++;
			setTimeout(function() {
                // line.innerHTML="";
				if(tt.classList.contains('writingMouve') && i<dataText.length){
					mouve+=15
					tt.style.transform=`translateY(-${mouve}px)`
				}
				StartTextAnimation(i,tt,nb)
			}, 100);
			
		}
	}
		
	function StartTextAnimation(i , tt, nb) {
		if(i < dataText.length && i<1 ) {
			let line = document.createElement("p");
			line.classList.add(`h${nb}-content`);
			tt.appendChild(line);
			let currentText = dataText[i];
			j = 0;
			typeWriter(currentText ,line, j, tt, nb, i)
		}
		else if(i < dataText.length){
			let line = document.createElement("p");
			line.classList.add(`h${nb}-content`);
			tt.appendChild(line);
			// line.style.transform="translateY(-10px)"
			let currentText = dataText[i];
			j = 0;
			typeWriter(currentText ,line, j, tt, nb, i)
        }
	}	
 
	 StartTextAnimation(0,document.querySelector(".writingMouve"),1);
	 StartTextAnimation(0, document.querySelector(".writingTallerSrceen"),2);
