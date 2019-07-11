
questNum = 0;
bonus = 14;
Mytime = 40;         /* time to question */
shortTimeNum = 5000; /* time waiting for checking */
answ = "";
rightansw = "";
blueGradient = 'radial-gradient(ellipse at center, #2226a3 7%,#060a6d 100%)';
redGradient = 'radial-gradient(ellipse at center, #ff3236 2%,#8e0000 100%)';
qreenGradient = 'radial-gradient(ellipse at center, #34db34 1%,#079900 100%)';


var quests = ['Almanyanın paytaxtı hansı şəhərdir?',
			  'Aşağıdakı kompüter hissələrindən əməli yaddaş qurğusu deyilən hansıdır?',
			  'Apple şirkətinin qurucusu kimdir?',
			  'Mayeyə batırılmış cisim onun çıxardığı mayenin çəkisinə bərabər qüvvə ilə mayedən itələnir - bu qanun kimə aiddir?',
			  'Canlıların təkamül əsasında bir-birindən törədiklərini və insanların meymunlarla eyni nəsildən gəldiyini söyləyən alim kimdir?',
			  'bu sistemlərdən hansı mobil telefon əməliyyat sistemi deyil?',
			  'Bunlardan hansı 7 dünya möcüzəsindən biri sayılmır?',
			  'Botsvana‎ ölkəsi hansı materikdə yerləşir?',
			  'η (eta) bu hərf hansı ölkənin əlifbasınnandır?',
			  'Məişət texnikası istehsalı ilə məşğul olan VİTEK hansı ölkənin brendidir?',
			  'Internet Explorer brauzeri ilk dəfə hansı brauzerə rəqib olaraq yaradılmışdır?',
			  'Hal hazırda dünyanın ən uzun insanı kimdir?',
			  'Azərbaycanın dahi alimi Lütfi A Zadə neçənci ildə bakıya gəlmişdir?',
			 ];

var answers = [['Erfurt','Bremen','Berlin','Münhen'],
			   ['RAM','HDD','SSD','ROM'],
			   ['Tim Kuk','Steve Wozniak','Steve Jobs','Bill Gates'],
			   ['İsaak Nyuton','Arximed','Albert Eynşteyn','Xristian Hügens'],
			   ['Anton van Levenhuk','Aleksandr Alfonsoviç','Çarlz Darvin','Karl Linney'],
			   ['Android','Macintosh','Windows','Sybmian'],
			   ['Misir piramidalari','Niaqara şəlaləsi','Semiramidanın asma bağları','Olimpdə Zevsin heykəli'],
			   ['Afrika','Avrasiya','Cənubi Amerika','Avstraliya'],
			   ['İsrail','Yunanstan','Hindistan','Ermənistan'],
			   ['Almanya','İsrail','Rusya','Çin'],
			   ['Google Chrome','Netscape','Onion Browser','Mozilla'],
			   ['Sultan Kösen.','Sultan Ahmet','Sultan Selim','Sultan Akif'],
			   ['2000','2003','2011','2008'],
			   			   
			   ];


var rightvariant = ['C','A','C','B','C','B','B','A','B','C','B','A','D'];


var FriendMinds = [['0','Salam necəsən?) <br>Bağışla bu sualın cavabını dəqiq deyə bilməyəcəm ama,<br> məncə cavab: '],
				   ['1','Salam xoş gördük! :) <br>oyun çox maraqlı keçir izləyirəm <br> sual elə də çətin gəlmir mənə.<br> :) düşünürəm sualın cavab: '],
				   ['1','Salam dost necəsən? </br> oyunun maraqlı yerindəsən :) <br> bu mövzunu bilirəm az-çox )) <br> bu sualın cavabı: '],
				   ['0','Salam necəsən? buyur.. <br> Hmm.. çətin suala bənzəyir.. <br> dəqiq bir fikrim yoxdur ama fikrimcə cavab: '],
				   ['0','Salam! necə gedir oyun?! <br> bilirdim mənə zəng eliyəcəksən elə ) <br> vallah dəqiq bilmirəm <br> ama varianlar içində məntiqli cavab: '],
				   ['0','Salam.. baxıram oyununa.. <br> maraqlı sualdır.. bilirdim yadımnan çıxıb e.. <br> səhv etmirəmsə cavab: '],
				   ['1','Xoş gördük! necəsən ? <br> maraqlı sualdır ama elə də çətin deyil :) <br> cavab dəqiq: '],
				   ['1','Salam əziz dostum necəsən? <br> oyun çox maraqlı keçir )) <br> bir komək də məndən gəlsin ) cavab: '],
				   ['1','Salam! xoş gördük <br> Sual maraqlı sualdır :) <br> uduzmağını istəməzdim sualın cavabı: ']];

var correctFriendMinds = [];
var incorrectFriendMinds = [];



/* ------------------------------------------ when page loading to browser ----------------------------- */

function videoStop(){ backVideo.pause(); }



function init(event){

		backVideo = document.getElementById('myVideo');
		setTimeout(videoStop,4000);
		

		music = document.getElementById("iframeAudio");   /* Play background music  */  
		myAudio = new Audio(); 
		questMusic(); 

		bonusdivs = document.getElementById("rightDiv");
		bonuses = bonusdivs.children;

			/* ------------------------------------------------- for audience vote intervals ---------------- */
		  intervalA = document.getElementById("intervalA"); 
		  intervalB = document.getElementById("intervalB");
		  intervalC = document.getElementById("intervalC");
		  intervalD = document.getElementById("intervalD");
			/* ------------------------------------------------- for audience vote intervals ---------------- */

		  startDiv = document.getElementById('startDiv');
		  resultDiv =  document.getElementById('resultDiv');

          /* ------------------------------------------------- hide or show start div elements ---------------- */
		  document.getElementById('LeftDiv').style.display = 'block';
		  bonusdivs.style.display = 'block';
		  startDiv.style.display = "none";
		  resultDiv.style.display = "none";
		  startDiv.style.display = 'none';
		  document.querySelector('.friendDiv').style.display = 'none';  /* close the hepl friend window */ 
		  document.querySelector('#auditoriaDiv').style.display = 'none'; /* close the audience vote window */ 
    

		  								/* Set timer for question  */
       longTimer = setInterval(Mytimer,1000);
        var questDiv = document.getElementById('question');
	      variant = document.getElementById('variants').children;
       Mytimer();

 
		if( questNum < quests.length){

				for(var i = 0; i < 4; i++){

					variant[i].innerHTML = answers[questNum][i];       //adding variants to question variable i is a number of question
					variant[i].addEventListener("click",selected);    //adding function click to variants with function selected *
					variant[i].style.backgroundImage = blueGradient;    // changing background color of variants to default 'blue color'
					variant[i].style.opacity = '1';    // changing background opacity of variants to 1'

				}	

				questDiv.textContent = quests[questNum];              // adding question in div
		 		helpIcons = document.getElementById('helpDiv').children;     // adding click functions to help icons if not used
				 
				for(var t=0; t< 3; t++){                  // adding click function to icons if it not used
					 var title = helpIcons[t].getAttribute('title');

					if(title != 'used'){
					          helpIcons[t].addEventListener('click',friendCall);
				         }
				}


		}
		else {
			 win();                   
		}

       
		
}



/* ------------------------------------------ when user select any variant ----------------------------- */



function selected(event){

		activeVariant = event.target;
		music.removeAttribute("src");
		myAudio.src = "music/answer.mp3"
		myAudio.play();

		new removeClick().variantclick();     // removing click function from variants
		new removeClick().helpIconClick();   // removing click function from help icon buttons
		 

		clearInterval(longTimer);
		event.target.style.backgroundImage = "radial-gradient(ellipse at center, #eaa338 2%,#c48900 100%)";
	    rightansw = rightvariant[questNum];
		answ = event.target.id;
		setTimeout(check,shortTimeNum); /* vaiting some moment for checking question */


}




/* -----------------------------------------  checking the selected question ------------------------------ */


function check(){

		if(answ == rightansw){  

			 myAudio.src = "music/correct.mp3" 
			 activeVariant.style.backgroundImage = qreenGradient;
		     myAudio.play();
			 questNum++;
			 bonus--; 
			 Mytime = 40;

			 bonuses[bonus].style.backgroundImage = redGradient;
	         
	         setTimeout(init,4000);
		     
			}

        else{ 

        	myAudio.src = "music/wrong.mp3"
		    myAudio.play();
		    activeVariant.style.backgroundImage = redGradient;
        	questNum = 0;
        	clearInterval(longTimer);
        	setTimeout(lose,3000);    // calling lose function
        }

}

/* ------------------------------------------ pressing any help icon ----------------------------- */


function friendCall(event){

		helpIconId = event.target.getAttribute('id');

		

			if (helpIconId == 'friend') {


					  
					 // music.setAttribute("src","music/phone.mp3");
					  clearInterval(longTimer); 
		              document.querySelector('#auditoriaDiv').style.display = 'none'; /* close the audience vote window if it open */ 

					  helpIcons[2].removeEventListener('click',friendCall);
					  helpIcons[2].setAttribute('title','used');

					  friend = document.querySelector(".friendMind");
			          helpDiv = document.querySelector('.friendDiv');
					  helpDiv.style.display = 'flex';
					  friend.innerHTML = "Dostunuza zəng edilir...";


					for(var i=0; i < FriendMinds.length; i++){                                      //take correct and incorrect friend minds 

						if(FriendMinds[i][0] == 1){ correctFriendMinds.push(FriendMinds[i][1]); }
					    else { incorrectFriendMinds.push(FriendMinds[i][1]); }
					}

					 randCorrect = Math.round(Math.random()*(correctFriendMinds.length-1));
					 randInCorrect = Math.round(Math.random()*(incorrectFriendMinds.length-1));
					 randomMind = Math.round(Math.random()*(FriendMinds.length-1));
					 randfriendImg  = Math.round(Math.random()*(6-1)+1);

					 setTimeout(friendAnswerCheck,4000);
			}

			else if(helpIconId == 'fifti'){
						
						clearInterval(longTimer);
						helpIcons[1].removeEventListener('click',friendCall)
						helpIcons[1].style.backgroundImage = redGradient;
						helpIcons[1].setAttribute('title','used');
					    music.removeAttribute("src");
					    myAudio.src = "music/answer.mp3"
						myAudio.play();
						
                        setTimeout(fiftifunc, 3000 )

	        }

	        else if(helpIconId == 'auditoria'){
	        			
	        			document.querySelector('#auditoriaDiv').style.display = 'block'; /* close the audience vote window */ 
	        			document.querySelector('.friendDiv').style.display = 'none';  /* close the hepl friend window */ 
		 
	        			clearInterval(longTimer);
	        			helpIcons[0].removeEventListener('click',friendCall)
						helpIcons[0].style.backgroundImage = redGradient;
						helpIcons[0].setAttribute('title','used');
						music.removeAttribute("src");
						auditoria();

	        			
	        }



}

/* ------------------------------------------ auditoria function ----------------------------- */

function auditoria(){

p1 = 0; p2 = 0; p3 = 0; p4 = 0; 

var x = 100;
 ran1 = 0;
 ran2 = 0;
 ran3 = 0;
 ran4 = 0;
 
ran1 = anyRandom(0,100); // -----------  find 4 random numbers / 4 part of 100
   if((x - ran1) > 1){

				var ranA = anyRandom(1,100);
                while(ranA < (x - ran1)){

		   		    ranA = anyRandom(1,100);
		   		    if(ranA < (x - ran1) && ranA > 0){ ran2 = ranA; }

			    } // while closed

			        if((x -ran1 - ran2) >0){

					  		var ranB = anyRandom(1,100);
					        while(ranB < (x - ran1 - ran2)){

				   		        var ranB = anyRandom(1,100);

				   		        if(ranB < (x - ran1 - ran2)){ ran3 = ranB; }
					        } // while closed
			  } // second if closed
		 else { ran3 = 0; }                  
} // first if closed
else { ran2 = 0; ran3 = 0;}

ran4 = x - ran1 - ran2 - ran3;
bigRand = largestNum(ran1,ran2,ran3,ran4); // Function find largest number between randoms its our correct answers prosent

var incorrectVariants = ['A','B','C','D']

                                                  
 	 

                                   //  selecting the biggest prosent and giving it to correct variant
	for(var i=0; i<4; i++){
		         
		         if(incorrectVariants[i] == rightvariant[questNum]){ 
	                  correctVariantNum = 'ran' + (i+1);

	                   if(correctVariantNum == 'ran1'){
	                   			 
	                   			     if(ran2 == bigRand){ ran1 = [ran2 , ran2 = ran1][0]; break;}
	                   			     if(ran3 == bigRand){ ran1 = [ran3 , ran3 = ran1][0]; break; }
	                   			     if(ran4 == bigRand){ ran1 = [ran4 , ran4 = ran1][0]; break; }
	                   }  
	                          if(correctVariantNum == 'ran2'){

	                   			     if(ran1 == bigRand){ ran2 = [ran1 , ran1 = ran2][0]; break; }
	                   			     if(ran3 == bigRand){ ran2 = [ran3 , ran3 = ran2][0]; break; }
	                   			     if(ran4 == bigRand){ ran2 = [ran4 , ran4 = ran2][0]; break; }
	                   			     
	                   } 
	                          if(correctVariantNum == 'ran3'){
	                   	 
	                                 if(ran1 == bigRand){ ran3 = [ran1 , ran1 = ran3][0]; break;}
	                   			     if(ran2 == bigRand){ ran3 = [ran2 , ran2 = ran3][0]; break; }
	                   			     if(ran4 == bigRand){ ran3 = [ran4 , ran4 = ran3][0]; break; }
	                   } 
	                         if(correctVariantNum == 'ran4'){
	                   			     if(ran1 == bigRand){ ran4 = [ran1 , ran1 = ran4][0]; break; }
	                   			     if(ran2 == bigRand){ ran4 = [ran2 , ran2 = ran4][0]; break; }
	                   			     if(ran3 == bigRand){ ran4 = [ran3 , ran3 = ran4][0]; break; }
	                          }       	     
		               } // if closed
	          } // for closed
 	 


	 setInterval(prosentA,100);
	 setInterval(prosentB,100);
	 setInterval(prosentC,100);
	 setInterval(prosentD,100);



}


		


function prosentA(){

	p1++;
	if(p1 <= ran1){ intervalA.style.height = 2.3 * p1 + 'px'; document.getElementById('prosentNA').innerHTML = p1 + '%';  }
	else{ clearInterval(prosentA);	}

}
function prosentB(){

	p2++;

	if(p2 <= ran2){ intervalB.style.height = 2.3*p2 + 'px'; document.getElementById('prosentNB').innerHTML = p2 + '%';    }
	else{ clearInterval(prosentB);	}
	 

}
function prosentC(){ 
	p3++;

	if(p3 <= ran3){ intervalC.style.height = 2.3*p3 + 'px'; document.getElementById('prosentNC').innerHTML = p3 + '%';    }
	else{ clearInterval(prosentC);	}

}
function prosentD(){
	p4++;

	if(p4 <= ran4){ intervalD.style.height = 2.3*p4 + 'px'; document.getElementById('prosentND').innerHTML = p4 + '%';    }
	else{ clearInterval(prosentD);	}

}





function fiftifunc(){           //  deleting two incorrect variant

		myAudio.src = "music/50-50.mp3"
		myAudio.play();

		
		helpIcons[1].setAttribute('title','used');

		allVariants = ['A','B','C','D'];
		var x = allVariants.indexOf(rightvariant[questNum]);   // finding index of correct variant
        allVariants.splice(x,1);		       /* deleting correct variant from all variants */
        var randnum  = anyRandom(0,2);
        allVariants.splice(randnum,1);        // deleting one random incorrect variant for two incorrect variant result

        for(var i =0; i<4; i++){

        	   var y = variant[i].getAttribute('id');
        	   if(y == allVariants[0]){ 
        	   	                 variant[i].style.opacity = '0.3'; 
        	   	                 variant[i].style.backgroundImage = redGradient; 
        	   	                 variant[i].removeEventListener('click',selected); 
        	   	               }

         	   if(y == allVariants[1]){ 
				                variant[i].style.opacity = '0.3'; 
				                variant[i].style.backgroundImage = redGradient;
				                variant[i].removeEventListener('click',selected); 
				            }
        }



        questMusic(); 

}



/* ------------------------------------------ checking friend answer ----------------------------- */



function friendAnswerCheck(){

	    var path = 'friends/img'+ randfriendImg + '.png';
		var friendImg = document.getElementById('friendImg');
		friendImg.setAttribute('src',path);

		Mytime = 40;
		longTimer = setInterval(Mytimer,1000);
		
		helpIcons[2].style.backgroundImage = redGradient;
		helpIcons[2].setAttribute('title','used');




		  if( bonus >= 9){ /* if question is easy than answer 100% right */
                         
		  				friend.innerHTML =	correctFriendMinds[randCorrect] + rightvariant[questNum];
		  				 
		  }
		  else if( bonus < 9 && FriendMinds[randomMind][0] == 1){                                  /* if friend knows the answer than answer 100% right */
 
		  		 friend.innerHTML = correctFriendMinds[randCorrect] + rightvariant[questNum];

		  }
		 else if( bonus < 9 && FriendMinds[randomMind][0] == 0){                                   /* if friend not knows the answer than answer 40% right */
		 		    var notAccurate = anyRandom(1,7);;                                      /* random number between 7 and 1 */

		 			if(notAccurate==1 || notAccurate== 3){            /*  this block if answers correct 20% */

		 						friend.innerHTML = correctFriendMinds[randCorrect] + rightvariant[questNum];
		 			}
		 			else{                                                                                 /*  this else answers incorrect 80% */
		 						var incorrectVariants = ['A','B','C','D']
		 		    			var x = incorrectVariants.indexOf(rightvariant[questNum]);
		 		                incorrectVariants.splice(x,1);		       /* deleting correct variant from variants */
		 		                var randnum  = anyRandom(0,2);;

		 		               friend.innerHTML = incorrectFriendMinds[randInCorrect] +  incorrectVariants[randnum];
		 			    }
		 }
}



/* ------------------------------------------ function when user is lose ----------------------------- */


function lose(){

		// backVideo.currenttime = 0;
		// backVideo.play();
		// backVideo.currenttime = 0;
		//setTimeout(videoStop,4000);
		document.getElementById('LeftDiv').style.display = 'none';
		document.getElementById('rightDiv').style.display = 'none';
		startDiv.style.display = "block";
		
		resultDiv.style.display = "block";
		document.querySelector("#resultDiv span").innerHTML = "Uduzdunuz! qazanılan məbləq 1000 AZN <br> Bir daha sınayın "; // if user is win we are show him money
		 
}

/* ------------------------------------------ function when user is win ----------------------------- */



function win(){

		document.getElementById('LeftDiv').style.display = 'none';
		document.getElementById('rightDiv').style.display = 'none';
		startDiv.style.display = "block";
		resultDiv.style.display = "block";
		document.querySelector("#resultDiv span").textContent = "Təbriklər! siz qazandız! məbləq "; 
		document.querySelector("#resultDiv label").textContent = bonuses[bonus].innerHTML + " AZN"; // if user  win we are show him money

}


/* ------------------------------------------ calculate Time ----------------------------- */

function Mytimer(){

    document.querySelector("#questTimer").innerHTML = Mytime;
   
	if(Mytime == 0){

		clearInterval(longTimer);
		lose();
	}

	Mytime --;
    
}

/* ------------------------------------------ select music to questions ----------------------------- */


function questMusic(){

		  if(bonus >= 9){

		  	          music.setAttribute("src","music/1001000.mp3");
		  }
		  else if(bonus == 8 || bonus == 7){ 
		  		      
		  		      music.setAttribute("src","music/5000000.mp3");
		  }
		  else if(bonus == 6 || bonus == 5){ 
		  		      
		              music.setAttribute("src","music/64000.mp3");
		  }
		  else if(bonus == 4 || bonus == 3){ 
		  		      
		              music.setAttribute("src","music/125000250000.mp3");
		  }
		  else if(bonus == 2){ 
		  		      
		              music.setAttribute("src","music/200032000.mp3");
		  }
		  else if(bonus == 1){ 
		  		      
		           music.setAttribute("src","music/1000000.mp3");
		  }
}


/* ------------------------------------------ the function recives arguments and returns largest one----------------------------- */



function largestNum(){

	var big = 0;
	  for(var i =0; i < arguments.length; i++){

	 		if( arguments[i] > big){ big =  arguments[i]; }
	  }
	 return big;
}

/* ------------------------------------------ find any random number between a and b  ----------------------------- */


function anyRandom(a,b){

	if(a>b){
		return Math.round(Math.random()*(a-b)+b);
	}
  else{ return Math.round(Math.random()*(b-a)+a); }

}


/* ------------------------------------------ remove click from variants if selected any variant ----------------------------- */

var removeClick = function cls(){

		this.variantclick = function(){	for(var i = 0; i < 4; i++){  variant[i].removeEventListener("click",selected);  } }				 
		this.helpIconClick = function(){	for(var i = 0; i < 3; i++){  helpIcons[i].removeEventListener("click",friendCall);  } }				 
                                   
}

