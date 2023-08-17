$(function() {
	///////-------location variables-------///////
		var leafContX;
		var cactusBaseY;
		var leafNum;
		//location plant
		var plantTop;
		var plantLeft;

		//location statue of liberty
		var statueOfLibertyTop;
		var statueOfLibertyLeft;
		var statueOfLibertyBodyTop
		//location palm trees
		var palmTreeLeft;
		var palmTreeTop
		//make shape variables
		var numberShapes;
		var numberOfContainers;

		setPositions();
		drawAll();

	function setPositions(){
		 leafContX = $(window).width()/2+180;
		 cactusBaseY = $(window).height()-200;
		 leafNum = 0;
		 var twoThirdsOfScreen = $(window).width()/3 *2 
		//location plant
		 plantTop = $(window).height() - 115;
		 plantLeft = twoThirdsOfScreen;
		//location statue of liberty
		 statueOfLibertyTop = $(window).height() - 540;
		 statueOfLibertyLeft = twoThirdsOfScreen - 100 ;

		 statueOfLibertyBodyTop = statueOfLibertyTop - 130;
		//location palm trees
		 palmTreeLeft = $(window).width()/2 - 150;
		 palmTreeTop = 0;
		//make shape variables
		 numberShapes = 325;
		 numberOfContainers = 9;

		 //mobile location 
		if($(window).width()<500){
			leafContX = 150;
			cactusBaseY = 700;
			statueOfLibertyTop = $(window).height() - 350;
		 	statueOfLibertyLeft = $(window).width()/2 - 180 ;
			statueOfLibertyBodyTop = statueOfLibertyTop - 130;
			palmTreeLeft = $(window).width()/2 - 205;
		 	palmTreeTop = 400;
		 	$(".name-color").addClass("name-color-mobile");
		}
	}


	$( window ).resize(function() {
		setPositions();
	});

	///////-------make the html containers, divs, and attach them to the html -------///////
	makeShapes(numberShapes,numberOfContainers);

	/// (creating the css styles and appending them to the html) ///
	function drawAll(){
		makeCactus(leafContX);
		makeProjectPlant(plantLeft, plantTop);
		//statue of liberty//
		makeBuilding0(statueOfLibertyLeft-83,statueOfLibertyTop+630,2,0,1,60); //slanted left
		makeBuilding1(statueOfLibertyLeft+266,statueOfLibertyTop+506,0,0,1,40); //twisty one
		makeBuilding2(statueOfLibertyLeft+320,statueOfLibertyTop+500,8,0,1,60); //slanted right
		makeBuilding3(statueOfLibertyLeft+390,statueOfLibertyTop+520,3,0,1,40); //bigger horizontal
		makeBuilding4(statueOfLibertyLeft+40,statueOfLibertyTop+220,4,0,1,40); //triangular
		makeBuilding5(statueOfLibertyLeft-40,statueOfLibertyTop+530,5,0,1,20); //small horiz
		makeStatueOfLiberty_body(statueOfLibertyLeft+100,statueOfLibertyTop,6,0,1,0) //(leafContX, leafContY, leafNum,addRotation, scale, barkSize)
		makeStatueOfLiberty_staff(statueOfLibertyLeft+100,statueOfLibertyBodyTop,7,0,1,0); //
		makeStatueOfLiberty_crown(statueOfLibertyLeft+100,statueOfLibertyTop,1,0,1,0);
		
		//palm tree //
		makePalmTreeTopHalf   (palmTreeLeft+320,palmTreeTop+302,0,0,1,40); //(leafContX, leafContY, leafNum,addRotation, scale, barkSize)

		makePalmTreeTopHalf   (palmTreeLeft+158,palmTreeTop+142,2,0,.9,40);
		makePalmTreeBottomHalf(palmTreeLeft+158,palmTreeTop+398,1,0,.9,40);

		makePalmTreeTopHalf   (palmTreeLeft+50,palmTreeTop+272,4,0,.6,40);
		makePalmTreeBottomHalf(palmTreeLeft+50,palmTreeTop+442,3,0,.6,40);

		makePalmTreeBottomHalf(palmTreeLeft+200,palmTreeTop+700,5,0,.8,40);
		makePalmTreeTopHalf   (palmTreeLeft+200,palmTreeTop+472,6,0,.8,40);
		

		makePalmTreeBottomHalf(palmTreeLeft+20,palmTreeTop+923,7,0,1, 40);	
		makePalmTreeTopHalf   (palmTreeLeft+20,palmTreeTop+672,8,0,1, 40);
	};
	
	
	///////-------functions-------///////

	//cactus//
	function makeCactus(leafContX){
		
		makeLeaves(leafContX-42, cactusBaseY-369, leafNum+0, -24, .8);
		makeLeaves(leafContX-11, cactusBaseY-308, leafNum+4, 7, 1.1);
		makeLeaves(leafContX-30, cactusBaseY-150, leafNum+5, -14, 1.4);
		makeLeaves(leafContX+111, cactusBaseY-155, leafNum+3, 31 , 1.3);
		makeLeaves(leafContX+53, cactusBaseY-139, leafNum+1, 131 , 1.2);
		makeLeaves(leafContX+160, cactusBaseY-250, leafNum+2, 18, 1);
		makeLeaves(leafContX+50, cactusBaseY-40, leafNum+6, 16 , 1);
		makeLeaves(leafContX-78, cactusBaseY, leafNum+7, -42 , 1.1);
		makeLeaves(leafContX, cactusBaseY, leafNum+8, 8, 1.5);
	}
	
	//plant//
	function makeProjectPlant(plantLeft, plantTop){
		//leafContX, leafContY, leafNum,addRotation, scale
		var leavesStart = plantTop - 233;
		var leavesStartLeft = plantLeft - 13;
		//each one of these callings is a leaf(container)

		
		//makeProjectPlantLeaves(leafContX, leafContY, leafNum,addRotation, scale)
		makeProjectPlantLeaves(leavesStartLeft-276, leavesStart+13, 2, 19, 1.5); //top: 321px;left: 131px;transform: rotate(19deg)scale(1.5);
		makeProjectPlantLeaves(leavesStartLeft-258, leavesStart+40, 1, -9, 1.2)

		  makeProjectPlantLeaves(leavesStartLeft-89, leavesStart-182, 3, 52, 1.2);

		makeProjectPlantLeaves(leavesStartLeft-259, leavesStart+259, 4, -21, 1.3);

		 makeProjectPlantLeaves(leavesStartLeft-197, leavesStart-240, 5, -322, 1); 

		 makeProjectPlantLeaves(leavesStartLeft-85, leavesStart-120, 6, 64, 1.2);

		 makeProjectPlantLeaves(leavesStartLeft-170, leavesStart-38, 7, 40, 1);

		  makeProjectPlantLeaves(leavesStartLeft+19, leavesStart+12-100, 8, 72, 1);

		  makeProjectPlantBase(plantLeft, plantTop, 0, 0, 1)
		  //top: 384px;
    //left: 347px;

    

		
	}
// 234 shapes (26*9) //9 containers //numberShapes this variable isnt being used
	function makeShapes(numberShapes, numContainers){ 
		var transitionDurationMax = 1;
		var transitionDelay = 0;
		var transitionDelayMax = .2;
		var transitionDuration;
		for( var leafNum=0; leafNum< numContainers ; leafNum++){
			var newLeafContainer = "<div class='leafContainer lf" +leafNum+ "'></div>";
			$('#drawing').append(newLeafContainer);
			var baseNum = leafNum*26;
			var numberToDivide = leafNum; //cant divide by 0;
			// timing for leafcontainer 
			// var style = ".leafContainer.lf"+leafNum+"{transition-delay:"+ transitionDelay + "s; }";
			$('style').append(style);


			for (var i = 0; i<26; i++){
				var num = i+ baseNum;
				var shape = "<div class='shape st" +num+ "'></div>";
				$('.lf'+leafNum).append(shape);

				//middle ones moving
					//transitionDuration = transitionDurationMax - Math.cos((num * Math.PI) / 2); 
					//transitionDelay = .05 - Math.cos((num * Math.PI) / 2);
				// key***//d = durationMax b = 0 (beggining value), t = num, c = change in value

				//random ones start first
					//transitionDuration = .00002 * (num /= transitionDurationMax) * num + 0;  

				//ease out quart
				   //transitionDuration =  .5 - Math.pow(1 - num, -4);
				   //transitionDelay = .1 - Math.pow(1 - num, -4);

				//bounces out first but has twist effect
					 // transitionDuration = Math.sqrt(1 - Math.pow(num - 1, -2));
					 // transitionDelay = Math.sqrt(.05 - Math.pow(num - 1, -2)); 

				// made this one up
				 transitionDuration = (16 - Math.sqrt(num) )/9;
					transitionDelay = (16 - Math.sqrt(num))/30; 


				// timing for each shape
				var style = ".shape.st"+num+"{transition: transform "+ transitionDuration + "s " + transitionDelay + "s cubic-bezier(0.62, 0.02, 0.34, 1), background var(--color-change-timing), border-color var(--color-change-timing)}"; 
				// cubic-bezier(0.62, 0.02, 0.34, 1)
				$('style').append(style);
				
				
			}	
		}
	}


	function makeLeaves(leafContX, leafContY, leafNum,addRotation, scale){
			startingTop = 0; //where the leaves start
			startingLeft = 0;
			var baseSize = 94; //94
			var startingRotation = 45;
			var baseNum = leafNum*26;

			var style = ".cactus.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);
	

			//big base
			var style = ".cactus.st"+baseNum+"{width:"+baseSize+"px; height:"+baseSize+"px; border-radius: 0px "+baseSize+"px;top:"+startingTop+"px;left:"+startingLeft+"px; transform: rotate("+startingRotation+"deg); }";
			$('style').append(style);
			
			

			//----- little one on top
			var smallSize = baseSize/10;
			var num = baseNum +1;
			var style = ".cactus.st"+num+"{width:"+smallSize+"px; height:"+smallSize+"px; border-radius: 0px "+smallSize+"px;left:"+(startingLeft+42)+ "px;"+"top:"+(startingTop-20)+"px; transform: rotate("+startingRotation+"deg);}";
			$('style').append(style);

			var row;
			var nextRowPos;
			var rotation;
			var nextLeft;

			//------ second row
			for( var s=2; s<4 ; s++){
				row=2
				nextRowPos = startingTop -10;
				var num = s+baseNum;
				if(s==2){rotation= -8; nextLeft = startingLeft+28}else{rotation= 90; nextLeft = startingLeft+56};
				var style = ".cactus.st"+num+"{width:"+smallSize+"px; height:"+smallSize+"px; border-radius: 0px "+smallSize+"px;left:"+nextLeft+ "px;"+"top:"+nextRowPos+"px;transform: rotate("+rotation+"deg);}";
				$('style').append(style);
				
			}
			//third row
			for( var s=4; s<7 ; s++){
				row = 3;
				nextRowPos = startingTop + 5;
				var num = s+baseNum;
				if(s==4){rotation= -8; nextLeft = startingLeft+20}
				else if(s==5){
					rotation= startingRotation; nextLeft = (startingLeft+42);
				}
				else{rotation= 90; nextLeft = startingLeft+64};
				var style = ".cactus.st"+num+"{width:"+smallSize+"px; height:"+smallSize+"px; border-radius: 0px "+smallSize+"px;left:"+nextLeft+ "px;"+"top:"+nextRowPos+"px;transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
			//fourth row
			for( var s=7; s<11 ; s++){
				row = 4;
				nextRowPos = startingTop + 22;
				var num = s+baseNum;
				if(s==7){rotation= -8; nextLeft = startingLeft+15}
				else if(s==8){
					rotation= 18; nextLeft = (startingLeft+32);
				}
				else if(s==9){
					rotation= 76; nextLeft = (startingLeft+52);
				}
				else{rotation= 90; nextLeft = startingLeft+69};
				var style = ".cactus.st"+num+"{width:"+smallSize+"px; height:"+smallSize+"px; border-radius: 0px "+smallSize+"px;left:"+nextLeft+ "px;"+"top:"+nextRowPos+"px;transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
			//fifth row middle
			for( var s=11; s<16 ; s++){
				row = 5;
				nextRowPos = startingTop + 41;
				var num = s+baseNum;
				if(s==11){rotation =-8; nextLeft = startingLeft+12}
				else if(s==12){
					rotation = 11; nextLeft = (startingLeft+27);
				}
				else if(s==13){
					rotation = startingRotation; nextLeft = (startingLeft+42);
				}
				else if(s==14){
					rotation = 78; nextLeft = (startingLeft+57);
				}
				else{rotation = 90; nextLeft = startingLeft+72};
				var style = ".cactus.st"+num+"{width:"+smallSize+"px; height:"+smallSize+"px; border-radius: 0px "+smallSize+"px;left:"+nextLeft+ "px;"+"top:"+nextRowPos+"px;transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
			//sixth row (4 bottom)
			for( var s=16; s<20 ; s++){
				row = 6;
				nextRowPos = startingTop + 61;
				var num = s+baseNum;
				if(s==16){rotation = 84; nextLeft = startingLeft+15}
				else if(s==17){
					rotation = 70; nextLeft = (startingLeft+32);
				}
				else if(s==18){
					rotation = 210; nextLeft = (startingLeft+52);
				}
				else{rotation = 170; nextLeft = startingLeft+69};
				var style = ".cactus.st"+num+"{width:"+smallSize+"px; height:"+smallSize+"px; border-radius: 0px "+smallSize+"px;left:"+nextLeft+ "px;"+"top:"+nextRowPos+"px;transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
			//seventh row (3 bottom)
			for( var s=20; s<23 ; s++){
				row = 7;
				nextRowPos = startingTop + 78;
				var num = s+baseNum;
				if(s==20){rotation= 83; nextLeft = startingLeft+20}
				else if(s==21){
					rotation= startingRotation; nextLeft = (startingLeft+42);
				}
				else{rotation= 170; nextLeft = startingLeft+64};
				var style = ".cactus.st"+num+"{width:"+smallSize+"px; height:"+smallSize+"px; border-radius: 0px "+smallSize+"px;left:"+nextLeft+ "px;"+"top:"+nextRowPos+"px;transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
			//eigth row (2 bottom)
			for( var s=23; s<25 ; s++){
				row=8;
				nextRowPos = startingTop + 92;
				var num = s+baseNum;
				if(s==23){rotation= -99; nextLeft = startingLeft+30}else{rotation= 8; nextLeft = startingLeft+54};
				var style = ".cactus.st"+num+"{width:"+smallSize+"px; height:"+smallSize+"px; border-radius: 0px "+smallSize+"px;left:"+nextLeft+ "px;"+"top:"+nextRowPos+"px;transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
			//ninth row (1 bottom)
			for( var s=25; s<26 ; s++){
				row=9;
				nextRowPos = startingTop + 105;
				var num = s+baseNum;
				rotation= startingRotation; 
				nextLeft = startingLeft+42;
				var style = ".cactus.st"+num+"{width:"+smallSize+"px; height:"+smallSize+"px; border-radius: 0px "+smallSize+"px;left:"+nextLeft+ "px;"+"top:"+nextRowPos+"px;transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}

	}//end makeleaves
	
	//make the palm trees and attach for now, but later just use css classes and same elements
	//25 pieces bark //18 pieces bark // 7pieces leaves
	 
	
	function makePalmTreeBottomHalf(leafContX, leafContY, leafNum,addRotation, scale, barkSize){
			startingTop = 0; //where the leaves start
			startingLeft = 0;
			var startingRotation = 45;
			var baseNum = leafNum*26;
			var style = ".palmtree.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);	

			//change the whole container
			//make bark
			for( var s=0; s<25 ; s++){
				var num = s+baseNum;
				var nextRowPos = startingTop - (s*(barkSize/3.5));
				var rotation = 135;
				var style = ".palmtree.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px; left:0px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
	}//end makePalmTreeBottomHalf
	function makePalmTreeTopHalf(leafContX, leafContY, leafNum,addRotation, scale, barkSize){
			startingTop = 0; //where the leaves start
			startingLeft = 0;
			var startingRotation = 45;
			var baseNum = leafNum*26;
			var style = ".palmtree.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);
			var lastRowPos;
			//make bark
			for( var s=0; s<19 ; s++){
				var num = s+baseNum;
				var nextRowPos = startingTop - (s*(barkSize/3.5));
				var rotation = 135;
				var style = ".palmtree.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px; left:0px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);
				if(s==18){
					lastRowPos = nextRowPos;
				}
			}
			//leaf0
			var num = baseNum +19;
			var leafSize = 160; // barkSize + 120; //160
			var rotation = 160;
			var style = ".palmtree.st"+num+"{width:"+leafSize+"px; height:"+leafSize+"px; border-radius: 0px "+leafSize+"px; top:"+(lastRowPos-105)+"px;left: 43px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			//leaf1
			var num = baseNum +20;
			var leafSize = 120; //barkSize+ 80; //120
			var rotation = 100;
			var style = ".palmtree.st"+num+"{width:"+leafSize+"px; height:"+leafSize+"px; border-radius: 0px "+leafSize+"px; top:"+ (lastRowPos-173)+"px; left: 25px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			//leaf1
			var rotation = 177;
			var num = baseNum +21; 
			var style = ".palmtree.st"+num+"{width:"+leafSize+"px; height:"+leafSize+"px; border-radius: 0px "+leafSize+"px; top:"+(lastRowPos-184)+"px; left: -95px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			//leaf2
			var rotation = 100;
			var num = baseNum +22;
			var leafSize = 140 ;// barkSize + 100; //140
			var style = ".palmtree.st"+num+"{width:"+leafSize+"px; height:"+leafSize+"px; border-radius: 0px "+leafSize+"px; top:"+(lastRowPos-94)+"px; left: -125px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			//leaf3
			var rotation = 70;
			var num = baseNum +23;
			var leafSize = 154 //barkSize + 114; //154
			var style = ".palmtree.st"+num+"{width:"+leafSize+"px; height:"+leafSize+"px; border-radius: 0px "+leafSize+"px; top:"+(lastRowPos-60)+"px; left: -93px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			//leaf5
			var rotation = 9;
			var num = baseNum +24;
			var leafSize = 120 //barkSize+80; //120
			var style = ".palmtree.st"+num+"{width:"+leafSize+"px; height:"+leafSize+"px; border-radius: 0px "+leafSize+"px; top:"+(lastRowPos-57)+"px; left: 33px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			//leaf4
			var rotation = 31;
			var num = baseNum +25;
			var leafSize = 130; //barkSize + 90; //130
			var style = ".palmtree.st"+num+"{width:"+leafSize+"px; height:"+leafSize+"px; border-radius: 0px "+leafSize+"px; top:"+(lastRowPos-71)+"px; left: -18px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			
	}
	function makeBuilding0(leafContX, leafContY, leafNum,addRotation, scale, barkSize){
			startingTop = 0; //where the leaves start
			startingLeft = 0;
			var startingRotation = 45;
			var baseNum = leafNum*26;
			var style = ".liberty.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);
			

			//make statue of liberty hand
			for( var s=0; s<25 ; s++){
				var num = s+baseNum;
				var nextRowPos = startingTop - (s*(barkSize/4.5));
				var rotation = 0;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px; left:0px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			}
	}//end makeBuilding1	
	function makeBuilding1(leafContX, leafContY, leafNum,addRotation, scale, barkSize){
			startingTop = 0; //where the leaves start
			startingLeft = 0;
			var baseNum = leafNum*26;
			var rotation = 100;
			barkSize += 30;
			var style = ".liberty.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);

			//make statue of liberty hand
			for( var s=0; s<25 ; s++){
				var num = s+baseNum;
				var nextRowPos = startingTop - (s*(barkSize/4.5));
				barkSize -= .6;
				var rotation = rotation + 10;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px; left:0px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
	}//end makeBuilding1
	function makeBuilding2(leafContX, leafContY, leafNum,addRotation, scale, barkSize){
			startingTop = 0; //where the leaves start
			startingLeft = 0;
			var baseNum = leafNum*26;
			var rotation = 74;
			barkSize+=20;
			var style = ".liberty.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);

			//make statue of liberty hand
			for( var s=0; s<25 ; s++){
				var num = s+baseNum;
				var nextRowPos = startingTop - (s*(barkSize/9));
				// barkSize -= 10;
				var rotation = rotation;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px; left:0px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
	}//end makeBuilding1	
	function makeBuilding3(leafContX, leafContY, leafNum,addRotation, scale, barkSize){
			startingTop = 0; //where the leaves start
			startingLeft = 0;
			var baseNum = leafNum*26;
			var rotation = 132;
			barkSize+=20;
			var style = ".liberty.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);

			//make statue of liberty hand
			for( var s=0; s<25 ; s++){
				var num = s+baseNum;
				var nextRowPos = startingTop - (s*(barkSize/10));
				// barkSize -= 10;
				var rotation = rotation;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px; left:0px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			}
	}//end makeBuilding1	
	function makeBuilding4(leafContX, leafContY, leafNum,addRotation, scale, barkSize){
			startingTop = 0; //where the leaves start
			var left = 0;
			var baseNum = leafNum*26;
			var rotation = 45;
			barkSize = 10;
			var style = ".liberty.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);

			//make statue of liberty hand
			for( var s=0; s<25 ; s++){
				var num = s+baseNum;
				var nextRowPos = startingTop + (s*(barkSize/7));
				 barkSize += 20;
				var rotation = rotation;
				left -= 10;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px; left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
	}//end makeBuilding1	
	function makeBuilding5(leafContX, leafContY, leafNum,addRotation, scale, barkSize){
			startingTop = 0; //where the leaves start
			startingLeft = 0;
			var baseNum = leafNum*26;
			var rotation = 132;
			barkSize+=20;
			var style = ".liberty.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);

			//make statue of liberty hand
			for( var s=0; s<25 ; s++){
				var num = s+baseNum;
				var nextRowPos = startingTop - (s*(barkSize/9));
				// barkSize -= 10;
				var rotation = rotation;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px; left:0px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
	}//end makeBuilding1		
	function makeStatueOfLiberty_staff(leafContX, leafContY, leafNum,addRotation, scale, barkSize){
			startingTop = 24; //where the leaves start
			startingLeft = 0;
			var startingRotation = 45;
			var baseNum = leafNum*26;
			var style = ".liberty.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);

			
			var initialBarkSize = barkSize + 16;
			var nextRowPos;
			//top one
			barkSize = initialBarkSize + 30;
			var num = 0+baseNum;
			var rotation  = 45;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+startingTop+"px;left:"+startingLeft+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			barkSize = initialBarkSize + 20;
			for( var s=1; s<5 ; s++){
				var num = s+baseNum;
				var nextNextRowPos = startingTop + 35 + (s*(barkSize/7.5));
				var rotation = 135;
				var left= startingLeft + 4;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextNextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			}
			barkSize = initialBarkSize + 4;
			for( var s=5; s<9 ; s++){
				var num = s+baseNum;
				var nextNextRowPos = startingTop + 50 + (s*(barkSize/5.5));
				var rotation = 135;
				var left= startingLeft + 12;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextNextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			}
			//extra num 9
			var num = 9 + baseNum;
			barkSize = 0;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; opacity:0; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextNextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			barkSize = initialBarkSize;
			for( var s=10; s<20 ; s++){
				var num = s+baseNum;
				nextRowPos = startingTop + 46 + (s*(barkSize/4));
				var rotation = 135;
				var left = startingLeft+14;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			}
			barkSize = initialBarkSize +6;
			for( var s=20; s<25 ; s++){
				var num = s+baseNum;
				nextRowPos = startingTop + 25 + (s*5);
				var rotation = 135;
				barkSize -= 4;
				var left = startingLeft+11+(s*2)-38;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			}

			//extra num 25
			var num = 25 + baseNum;
			barkSize = 0;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; opacity:0; border-radius: 0px "+barkSize+"px; top:"+nextNextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			
			
			
	}//end 
	function makeStatueOfLiberty_body(leafContX, leafContY, leafNum,addRotation, scale, barkSize){
			startingTop = 0; //where the leaves start
			startingLeft = 0;
			var startingRotation = 45;
			var baseNum = leafNum*26;
			var style = ".liberty.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);
			var newLeafContainer = "<div class='leafContainer liberty lf" +leafNum+ "'></div>";
			$("#cactus").append(newLeafContainer);
			var initialBarkSize = barkSize + 16;
			var nextRowPos;

			//neck
			var num = 0+baseNum;
			nextRowPos = startingTop+94;
			var rotation = 45;
			var left = startingLeft+46;
			barkSize = initialBarkSize + 54; //70
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);


			//arm
			barkSize = initialBarkSize +20;
			for( var s=1; s<6 ; s++){
				var num = s+baseNum;
				nextRowPos = startingTop + (s*25);
				var rotation = 70;
				var left = startingLeft+2;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			}
			//sleeve
			barkSize = initialBarkSize +60;
			for( var s=6; s<10 ; s++){
				var num = s+baseNum;
				nextRowPos = startingTop+40 + (s*15);
				var rotation = 80-(s*3);
				var left = startingLeft-10;
				barkSize += (s*2);
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}

			//dress bigggest
			var num = 10+baseNum;
			nextRowPos = startingTop+220;
			var rotation = 56;
			var left = startingLeft-101;
			barkSize = initialBarkSize + 290;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);


			//dress 2
			var num = 11+baseNum;
			nextRowPos = startingTop+211;
			var rotation = 56;
			var left = startingLeft-69;
			barkSize = initialBarkSize + 240;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			//dress 3
			var num = 12+baseNum;
			nextRowPos = startingTop+193;
			var rotation = 64;
			var left = startingLeft-46;
			barkSize = initialBarkSize + 175;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);


			//dress 4
			var num = 13+baseNum;
			nextRowPos = startingTop+182;
			var rotation = 37;
			var left = startingLeft+53;
			barkSize = initialBarkSize + 85;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);


			//face cheek
			var num = 14+baseNum;
			nextRowPos = startingTop+103;
			var rotation = 9;
			var left = startingLeft+50;
			barkSize = initialBarkSize + 20;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);


			//face cheek
			var num = 15+baseNum;
			nextRowPos = startingTop+103;
			var rotation = 82;
			var left = startingLeft+81;
			barkSize = initialBarkSize + 20;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			//face cheek hair left
			var num = 16+baseNum;
			nextRowPos = startingTop+72;
			var rotation = 83;
			var left = startingLeft+50;
			barkSize = initialBarkSize + 20;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);


			//face cheek hair right
			var num = 17+baseNum;
			nextRowPos = startingTop+72;
			var rotation = 188;
			var left = startingLeft+81;
			barkSize = initialBarkSize + 20;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);


			//face cheek
			var num = 18+baseNum;
			nextRowPos = startingTop+72;
			var rotation = 83;
			var left = startingLeft+50;
			barkSize = initialBarkSize + 20;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);


			//mouth
			var num = 19+baseNum;
			nextRowPos = startingTop+127;
			var rotation = 130;
			var left = startingLeft+80;
			barkSize = initialBarkSize - 10;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);


			//eyes
			var num = 20+baseNum;
			nextRowPos = startingTop+107;
			var rotation = 130;
			var left = startingLeft+70;
			barkSize = initialBarkSize - 10;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			//eyes
			var num = 21+baseNum;
			nextRowPos = startingTop+107;
			var rotation = 130;
			var left = startingLeft+91;
			barkSize = initialBarkSize - 10;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			//extra shapes 0 opacity
			barkSize = initialBarkSize +20;
			for( var s=22; s<26 ; s++){
				var num = s+baseNum;
				nextRowPos = startingTop+40 + (s*15);
				var rotation = 70-(s*3);
				var left = startingLeft-10;
				barkSize = 0;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; opacity: 0; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			}
	}//end 

	function makeStatueOfLiberty_crown(leafContX, leafContY, leafNum,addRotation, scale, barkSize){
			startingTop = 0; //where the leaves start
			startingLeft = 0;
			var baseNum = leafNum*26;
			var style = ".liberty.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);
			var nextRowPos;

			
			//crown small ones
			barkSize = 2;
			var rotation = -36;
			var originY = startingTop +99;
			var originX = 81.4;
			var angle;
			var nextRowPos;
			var left;
			var radius = 33;
			var rotationAmt = 8.4;
			var startingAngle = 105.3;
				// X := originX + cos(angle)*radius;
				// Y := originY + sin(angle)*radius;
			for( var s=0; s<10 ; s++){
				var num = s+baseNum;
				 barkSize += 1;
				 rotation += rotationAmt;
				angle = startingAngle-(s*.18)
				nextRowPos = originY + Math.cos(angle)*radius;
				left = originX + Math.sin(angle)*radius;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			}
	
			for( var s=10; s<20 ; s++){
				var num = s+baseNum;
				 barkSize -= 1;
				 rotation += rotationAmt;
				angle = startingAngle-(s*.18)
				nextRowPos = originY + Math.cos(angle)*radius;
				left = originX + Math.sin(angle)*radius;
				var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			}
			barkSize = 25; //70
			//top crown 1
			var num = 19+baseNum;
			nextRowPos = startingTop+59;
			var rotation = -19;
			var left = startingLeft+19;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			//top crown 2
			var num = 20+baseNum;
			nextRowPos = startingTop+38;
			var rotation = 4;
			var left = startingLeft+39;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);


			//tip top crown 
			var num = 21+baseNum;
			nextRowPos = startingTop+28;
			var rotation = 45;
			var left = startingLeft+71;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);


			//top crown 1
			var num = 22+baseNum;
			nextRowPos = startingTop+59;
			var rotation = 109;
			var left = startingLeft+125;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			//top crown 2
			var num = 23+baseNum;
			nextRowPos = startingTop+36;
			var rotation = 86;
			var left = startingLeft+106;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			//extras
			var num = 24+baseNum;
			barkSize = 0;
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; opacity:0; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);

			var num = 25+baseNum;
			barkSize = 0;
			console.log('num crown statuse of liberty' + num);
			var style = ".liberty.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; opacity:0; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			
	}//end 
	

	function makeProjectPlantLeaves(leafContX, leafContY, leafNum,addRotation, scale){
			startingTop = 0; //where the leaves start
			startingLeft = 0;
			var baseSize = 100;
			var startingRotation = 45;
			var baseNum = leafNum*26; //there are 26 shapes in a container
			var style = ".project-plant.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);

			var leafStartTop = startingTop -188;
			var leafStartLeft = startingLeft + 142;

			//stem
			barkSize = 14;
			var incNum = 0;
			for(var i = baseNum; i < 18+baseNum; i++){
				var stemTop = startingTop ;
				var stemLeft = startingLeft +230;
				var num = i;
				incNum += 1
				var nextRowPos = stemTop - (incNum*(barkSize/2));
				var left = stemLeft;
				startingLeft -= 2;
				 barkSize -= .2;
				var rotation = 0;
				var style = ".project-plant.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px; left:"+left+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}

			//big base
			var style = ".project-plant.st"+ (baseNum+18) +"{width:"+baseSize+"px; height:"+baseSize+"px; border-radius: 0px "+baseSize+"px;left:"+leafStartLeft+ "px;"+"top:"+leafStartTop+"px; transform: rotate("+startingRotation+"deg);}";
			$('style').append(style);


			//----- little one on top
			var smallSize = 18;
			var num = 19+ baseNum;
			var style = ".project-plant.st"+num+"{width:"+smallSize+"px; height:"+smallSize+"px; border-radius: 0px "+smallSize+"px;left:"+(leafStartLeft+41)+ "px;"+"top:"+(leafStartTop-2)+"px; transform: rotate("+startingRotation+"deg);}";
			$('style').append(style);

			//top 2
			var barkSize = 20;
			var num = 20+baseNum;
			nextRowPos = leafStartTop+22;
			var rotation = 10;
			var left = leafStartLeft+29;
			var style = ".project-plant.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			barkSize = 20;
			var num = 21+baseNum;
			nextRowPos = leafStartTop+22;
			var rotation = 76;
			var left = leafStartLeft+52;
			var style = ".project-plant.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			//second to lowest two
			barkSize = 22;
			var num = 22+baseNum;
			nextRowPos = leafStartTop+48;
			var rotation = 7;
			var left = leafStartLeft+27;
			var style = ".project-plant.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			barkSize = 22;
			var num = 23+baseNum;
			nextRowPos = leafStartTop+48;
			var rotation = -99;
			var left = leafStartLeft+52;
			var style = ".project-plant.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			//lowest two
			barkSize = 17;
			var num = 24+baseNum;
			nextRowPos = leafStartTop+78; //81
			var rotation = 9;
			var left = leafStartLeft+31;//29
			var style = ".project-plant.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			barkSize = 17;
			var num = 25+baseNum;
			nextRowPos = leafStartTop+78;
			var rotation = 82;
			var left = leafStartLeft+52;
			var style = ".project-plant.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px;left:"+left+"px; transform: rotate("+rotation+"deg);}";
			$('style').append(style);

			
			

	}//end makeleaves	

	function makeProjectPlantBase(leafContX, leafContY, leafNum,addRotation, scale){
			startingTop = 0; //where the leaves start
			startingLeft = 0;
			var baseSize = 55;
			 //var baseNum = leafNum*8;
			var baseNum = 0;
			var style = ".project-plant.lf"+leafNum+"{top:"+leafContY+"px ;left:"+leafContX+"px; transform: rotate("+addRotation+"deg)scale("+scale+");}";
			$('style').append(style);

			barkSize = baseSize;
			//botom part of base
			for( var s=0; s<18 ; s++){
				var num = s+baseNum;
				startingTop -=6;
				var nextRowPos = startingTop;
				barkSize += 2;
				startingLeft -=1;
				var rotation = 135;
				var style = ".project-plant.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px; left:"+startingLeft+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
			//top part of base
			barkSize = barkSize + 20;
			startingTop = -110;
			for( var s=18; s<26 ; s++){
				var num = s+baseNum;
				startingTop -=4;
				var nextRowPos = startingTop;
				
				var rotation = 135;
				startingLeft = -28;
				var style = ".project-plant.st"+num+"{width:"+barkSize+"px; height:"+barkSize+"px; border-radius: 0px "+barkSize+"px; top:"+nextRowPos+"px; left:"+startingLeft+"px; transform: rotate("+rotation+"deg);}";
				$('style').append(style);
			}
	}//end makeprojectplantbase




	/////// -------------- scroll magic & page triggers --------------------- //////

	// var interval = 300;
// var hiTrigger = 0;
// var SanDiegoTrigger = hiTrigger + interval;
// var NewYorkTrigger = SanDiegoTrigger + interval;
// var TelAvivTrigger = NewYorkTrigger + interval;
// var projectsTrigger = TelAvivTrigger +interval;

$( ".contact" ).on( "click", function() {
  $("#contact-page").toggleClass('display');
  $(".img-container").toggleClass('active');
  $(".top-bar").addClass("contact");
  $(".top-link-color").addClass("blue");
});

$("#contact-page:not(a)").on('click', function(){
 	$("#contact-page").toggleClass('display');
	$(".img-container").toggleClass('active');
  	$(".top-links").toggleClass('contact-links');
  	$(".top-bar").removeClass("contact");
  	$(".top-link-color").removeClass("blue");
})

$(".shape").addClass("project-plant")
$(".leafContainer").addClass("project-plant");
// init controller
var controller = new ScrollMagic.Controller();
var peach = "#FFE0CE";
$("#tlv").hover(function() {
	$(".shape").addClass("cactus");
	$(".leafContainer").addClass("cactus");
	$(".leafContainer").removeClass("project-plant liberty palmtree");
	$(".shape").removeClass("project-plant liberty palmtree");
	$(".char").addClass('tlv');
	$(".char").removeClass('ny');
	var styles = {
      left : leafContX - 120,
      bottom: cactusBaseY
    };
	$(".animated-text").css(styles);
	// $("html").attr("style","--background-color:var(--peach); --border-shapes:var(--darker-peach); --text-color:var(--electric-blue2); --link-color:var(--dark-blue2)");
});

$("#ny").hover(function() {
	$(".shape").addClass("liberty");
	$(".leafContainer").addClass("liberty");
	$(".leafContainer").removeClass("project-plant cactus palmtree");
	$(".shape").removeClass("project-plant cactus palmtree");
	$(".char").addClass('ny');
	$(".char").removeClass('tlv');
	var styles = {
      left : statueOfLibertyLeft - 120,
      top: statueOfLibertyTop,
      bottom: 0
    };
	$(".animated-text").css(styles);
	// $("html").attr("style","--background-color:var(--dark-blue); --border-shapes:var(--electric-blue); --text-color:#fff; --link-color:var(--peach2)");

});

$("#sd").hover(function() {
	$(".shape").addClass("palmtree");
	$(".leafContainer").addClass("palmtree");
	$(".leafContainer").removeClass("project-plant cactus liberty");
	$(".shape").removeClass("project-plant cactus liberty");
});

$(".plant").hover(function() {
	$(".shape").addClass("project-plant");
	$(".leafContainer").addClass("project-plant");
	$(".leafContainer").removeClass("palmtree cactus liberty");
	$(".shape").removeClass("palmtree cactus liberty");
});

Splitting({
	whitespace: true
})

$(".menu-icon").mousedown(function(){
	$("#mySidenav").css("width", "140px");
});

var closeNav = function(){
	$("#mySidenav").css("width", "0px");
}

$(".closebtn").mousedown(function(){
	closeNav();
});

$(".stuff").children().mousedown(function(){
	closeNav();
})





//store all items that are projects in an array taking the data-title and data-href from the objects
var projectArray = $('.project');
var projectObject;
var project = {}; // my object
var projects =  []; // my array

//create an array of project objects with three values, title, href, imgsrc
// $('.project').each(function (index, item) {
//     var title = $(item).data('title');
//     var href= $(item).data('href')
//     var imgSrc = $(item).data('hero_img')
//     project = {
//         "title": title, 
//         "href": href,
//         "img":imgSrc
//     }
//     projects.push(project);
// });

//read from text and not data-src
//$('.project-title', $('.project')).each(function (index,item) {
// $('.project-title', $('.project')).each(function (index,item) {
// 	var title = $(item).text();
//     project = {
//         "title": title, 
//     }
    
//     var imgSrc = $(item).parent().siblings().find(".project-img").attr("src");
//     console.log(imgSrc);
//     //console.log(imgSrc);
//     $(project).extend({
//     	"img": imgSrc
//     }) 


// 	projects.push(project);
// });


console.log(projects);



//.setItem('projects', JSON.stringify(projects));


// var scene = new ScrollMagic.Scene({triggerElement: "#hi-trigger", triggerHook: 0, duration: 200})
// 				.on("enter", function () {
// 					$("#hi-container").addClass('show');
// 					$("#home-anchor").addClass('active');
// 					$(".name-small").removeClass('show');
// 					//change shape
// 					$(".leafContainer").addClass("project-plant");
// 					$(".shape").addClass("project-plant");
					
// 				})
// 				.on("leave", function () {
// 					$(".name-small").addClass('show');
// 					$("#home-anchor").removeClass('active');
// 					$("#hi-container").removeClass('show');
// 					//hide plant
// 					$(".leafContainer").removeClass("project-plant");
// 					$(".shape").removeClass("project-plant");
// 				})
// 				.setTween("#hi-line", 0.5, {height: 20})
// 				 //.addIndicators({name:'hi-trigger'})
				 
// 				.addTo(controller);

// var scene = new ScrollMagic.Scene({triggerElement: "#tel-aviv-trigger", triggerHook: 0, duration: 200})
// 				.on("enter", function () {
// 					$(".leafContainer").addClass("cactus");
// 					$(".shape").addClass("cactus");
// 					$("[data-aos-anchor='#tel-aviv-trigger']").addClass('active');
// 					$("#tel-aviv-anchor").addClass('active');
// 				;
// 				})
// 				.on("leave", function () {
// 					$("[data-aos-anchor='#tel-aviv-trigger']").removeClass('active');
// 					$("#tel-aviv-anchor").removeClass('active');
// 				})
// 				.setTween("#hi-line", 0.5, {height: 0})
// 				.setTween("#tel-aviv-line", 0.5, {height: 20})
// 				//.addIndicators({name: "tel-aviv"})
// 				.addTo(controller);

// var scene = new ScrollMagic.Scene({triggerElement: "#new-york-trigger", triggerHook: 0, duration: 200})
// 				.on("enter", function () {
// 					$(".leafContainer").addClass("liberty");
// 					$(".shape").addClass("liberty");
// 					$("[data-aos-anchor='#new-york-trigger']").addClass('active');
// 					$("#new-york-anchor").addClass('active');
// 					$("[data-aos-anchor='#tel-aviv-trigger']").removeClass('active');
// 					$("#tel-aviv-anchor").removeClass('active');
// 					console.log('new york');
					
// 							})
// 				.on("leave", function () {
// 					$(".leafContainer").removeClass("liberty");
// 					$(".shape").removeClass("liberty");
// 					$("[data-aos-anchor='#new-york-trigger']").removeClass('active');
// 					$("#new-york-anchor").removeClass('active');
// 				})
// 				.setTween("#new-york-line", 0.5, {height: 20})
// 				//.addIndicators({name:'new-york-trigger'})
// 				.addTo(controller);

// var scene = new ScrollMagic.Scene({triggerElement: "#san-diego-trigger", triggerHook: 0, duration: 200})
// 				.on("enter", function () {
// 					$(".leafContainer").addClass("palmtree");
// 					$(".shape").addClass("palmtree");
// 					$("[data-aos-anchor='#san-diego-trigger']").addClass('active');
// 					$("#san-diego-anchor").addClass('active');
// 					$("#intro").addClass('palmtree');
					
// 							})
// 				.on("leave", function () {
// 					$(".leafContainer").removeClass("palmtree");
// 					$(".shape").removeClass("palmtree");
// 					$("[data-aos-anchor='#san-diego-trigger']").removeClass('active');
// 					$("#san-diego-anchor").removeClass('active');
// 					$("#intro").removeClass('palmtree');
// 				})
				
// 				 //.addIndicators({name:'san-diego-trigger'})
// 				.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#projects-trigger", triggerHook: 0})
				.on("enter", function () {
					$('#intro').addClass('transition');
					setTimeout(function () {
						$('#intro').hide();
					}, 400);
					$(".top-bar").addClass("projects");

					// $("html").attr("style","--link-color:var(--electric-blue);--link-color-hover:var(--dark-blue)");
					var colors =  {
						"--link-color" : "var(--electric-blue)",
						"--link-color-hover" : "var(--dark-blue)"
					}
					$("body.homepage").css(colors)
					$(".top-link-color").addClass("blue");
					$(".name-color-mobile").css("fill", "var(--dark-blue)")

					setTimeout(function () {
						$(".top-bar::before").css("background-color","white")
					}, 500);

					
				})
				.on("leave", function () {
					$('#intro').show();
					$('#intro').removeClass('transition');
					$("#san-diego-anchor").addClass('active');
					$(".top-bar").removeClass("projects");
				
					// $("html").attr("style","--link-color:var(--peach2); --top-bar-background: none; --link-color-hover:var(--pink)");

					var colors =  {
						"--link-color" : "var(--peach2)",
						"--link-color-hover" : "var(--pink)"
					}
					$("body.homepage").css(colors)
					$(".top-link-color").removeClass("blue");
					$(".name-color-mobile").css("fill", "white")
					
				})
				// .addIndicators({name: "projects"})
				.addTo(controller);



		


});

	