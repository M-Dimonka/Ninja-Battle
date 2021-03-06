var keys = {
	"37": false, //left
	"38": false, //up
	"39": false, //right
	"40": false, //down
	"69": false, //e - take damage
	"82": false, //r - attack
	"68": false, //d - teleport
	"81": false, //q - knockout
	"87": false, //w - knockdown
	// "70": false //f - attackUp
	"49": false //1 - throw weapon(kunai)
};

var sasuke = {
	index: 0,
	attackIndex: 0,
	jumpIndex: -1,
	negativeFlag: false,
	clientWidth: document.documentElement.clientWidth,
	currentType: "",

	pressedKey: "",
	heroKeys: ["37", "38", '39', "82", "68", "50", "69", "81", "87", "70", "49", "65"],
	keyCount: 0,

	name: "Sasuke",
	heroAbilities: ["chidoriNagashi", "chidoriRun", "fireBall"],

	characterBlock: document.getElementsByClassName("character-Sasuke")[0],

	aCrop: document.getElementsByClassName("character-Sasuke__ability-crop ability-crop")[0],
	aGallery: document.getElementsByClassName("ability-crop__gallery gallery")[0],

	hCrop: document.getElementsByClassName("character-Sasuke__Sasuke-crop Sasuke-crop")[0],
	hGallery: document.getElementsByClassName("Sasuke-crop__gallery gallery")[0],

	// startingPointX: 200,

	moveValueX: 0,
	moveValueY: 0,

	moveAGallery: 0,
	moveHGallery: 0,

	imageAbilityPrev: 0,
	imageAbilityNext: 1,

	valuesStanceWidth: [24, 24, 24, 24, 24, 24],
	valuesStanceHeight: [44, 45, 45, 45, 44, 44],

	valuesRunWidth: [39, 32, 36, 38, 32, 37],
	valuesRunHeight: [29, 29, 29, 29, 29, 29],

	valuesJumpWidth: [24, 27, 27, 27, 30, 30, 30, 23],
	valuesJumpHeight: [44, 41, 40, 40, 43, 43, 43, 28],

	valuesTeleportWidth: [25, 24, 24, 24, 24, 24, 24, 24, 25],
	valuesTeleportHeight: [39, 38, 40, 41, 41, 41, 40, 38, 39],

	valuesDamagedWidth: [24, 27, 30],
	valuesDamagedHeight: [44, 37, 35],

	valuesKnockoutWidth: [30, 30, 42, 42, 44],
	valuesKnockoutHeight: [35, 31, 24, 23, 16],

	// ... - оператор расширения; здесь: все содержимое массива valuesKnockoutWidth добавляется в valuesKnockedDownWidth
	valuesKnockedDownWidth: [30, 30, 42, 42, 44, 25],
	valuesKnockedDownHeight: [35, 31, 24, 23, 16, 32],

	valuesAttack1Width: [25, 47, 20],
	valuesAttack1Height: [43, 42, 43],

	valuesAttack2Width: [21, 34, 32, 55, 44],
	valuesAttack2Height: [41, 40, 39, 41, 41],

	valuesAttack3Width: [27, 28, 34, 48, 62, 41, 32, 27],
	valuesAttack3Height: [38, 39, 43, 43, 40, 35, 40, 43],

	valuesAttackUpWidth: [26, 26, 32, 40, 58, 52],
	valuesAttackUpHeight: [43, 39, 28, 27, 48, 48],

	valuesAttackRunWidth: [32, 49, 71, 64, 34, 27],
	valuesAttackRunHeight: [29, 28, 27, 27, 40, 43],

	valuesAttackJumpWidth: [22, 22, 42, 30, 32],
	valuesAttackJumpHeight: [41, 42, 40, 33, 31],

	valuesWeaponThrowWidth: [28, 30, 28, 29],
	valuesWeaponThrowHeight: [41, 41, 43, 43],

	valuesWeaponThrowJumpWidth: [27, 30, 28, 29],
	valuesWeaponThrowJumpHeight: [42, 41, 44, 44],

	valuesWinWidth: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
	valuesWinHeight: [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],

	valuesChidoriNagashiWidth: [27, 26, 26, 26, 26, 26, 26, 26, 26, 26, 36, 35, 35, 35, 32, 28, 28],
	valuesChidoriNagashiHeight: [43, 40, 40, 40, 40, 40, 40, 40, 40, 36, 28, 29, 29, 29, 25, 30, 40],

	abilityChidoriNagashiWidth: [65, 65, 95, 95, 91, 97, 97, 95, 253, 274, 252, 245, 253, 274, 252, 245],
	abilityChidoriNagashiHeight: [6, 6, 8, 8, 17, 24, 23, 24, 188, 152, 164, 152, 188, 152, 164, 152],

	valuesChidoriRunWidth: [26, 27, 28, 29, 28, 28, 28, 32, 38, 38, 44, 44, 44, 44, 23],
	valuesChidoriRunHeight: [43, 43, 40, 35, 35, 35, 35, 28, 26, 26, 27, 26, 26, 26, 34],

	abilityChidoriRunWidth: [21, 21, 34, 40, 40, 38, 38, 40, 86, 80, 75, 75, 91, 89, 86, 80, 75, 75, 91, 89],
	abilityChidoriRunHeight: [15, 15, 23, 24, 27, 31, 28, 27, 41, 51, 47, 47, 48, 39, 41, 51, 47, 47, 48, 39],

	valuesFireballWidth: [25, 26, 25, 25, 27, 27, 27, 26, 29, 29],
	valuesFireballHeight: [40, 40, 40, 40, 42, 40, 41, 35, 34, 34],

	abilityFireBallWidth: [10, 10, 16, 32, 44, 56, 59, 57, 59, 56, 59, 58, 59, 57, 59, 56, 59, 58],
	abilityFireBallHeight: [6, 6, 10, 20, 30, 35, 39, 41, 39, 38, 36, 37, 39, 41, 39, 38, 36, 37],

	sasukeStance: function(way){
		animateMovement(this.valuesStanceWidth, this.valuesStanceHeight, this, "Sasuke", "stance", way, 150);
	},

	sasukeRun: function(way){
		animateMovement(this.valuesRunWidth, this.valuesRunHeight, this, "Sasuke", "run", way, 100);
	},
	moveRun: function(way, imageCount){
		this.getBlockCoords();
		
		if(this.characterRight > this.clientWidth - 50){
			if(imageCount == 0 || imageCount == 3){
				this.moveValueX -= 40;
			}
			else{
				this.moveValueX -= 30;
			}
		}
		else if(this.characterLeft < 50){
			// console.log(this.characterLeft);
			if(imageCount == 0 || imageCount == 3){
				this.moveValueX += 40;
			}
			else{
				this.moveValueX += 30;
			}
		}
		
		if(way == "right"){
			// console.log("bounding left: " + this.characterLeft);
			// console.log("leftCoord: " + parseInt(window.getComputedStyle(this.characterBlock).left));

			if(this.negativeFlag){
				this.characterBlock.style.alignSelf = "flex-start";
				this.moveValueX = (document.documentElement.clientWidth + this.moveValueX) - 100;
				this.negativeFlag = false;
			}
			else{
				if(imageCount == 0 || imageCount == 3){
					this.moveValueX += 40;
				}
				else{
					this.moveValueX += 30;
				}
			}
		}

		else if(way == "left"){
			if(!this.negativeFlag){
				this.characterBlock.style.alignSelf = "flex-end";
				this.moveValueX = (this.moveValueX - document.documentElement.clientWidth) + 100;
				this.negativeFlag = true;
			}
			else{
				if(imageCount == 0 || imageCount == 3){
					this.moveValueX -= 40;
				}
				else{
					this.moveValueX -= 30;
				}
			}
		}

		// console.log(this.moveValueX);
		this.characterBlock.style.left = this.moveValueX + "px";
	},

	sasukeJump: function(way){
		animateMovement(this.valuesJumpWidth, this.valuesJumpHeight, this, "Sasuke", "jump", way, 100);
	},
	moveJump: function(way, imageCount){
		this.jumpIndex++;
		imageCount = this.jumpIndex;

		// console.log("imageCount: " + imageCount + "\njumpIndex: " + this.jumpIndex);
		this.getBlockCoords();
		
		if(this.characterRight > this.clientWidth - 40){
			this.moveValueX -= 45;
		}
		else if(this.characterLeft < 40){
			this.moveValueX += 45;
		}

		if(this.jumpIndex >= 0 && this.jumpIndex <= 2){
			this.moveValueY -= 60;
			if(keys[39]){
				this.moveValueX += 45;			
			}
			else if(keys[37]){
				this.moveValueX -= 45;
			}
		}
		else if(this.jumpIndex >= 3 && this.jumpIndex <= 5){
			this.moveValueY += 60;
			if(keys[39]){
				this.moveValueX += 45;			
			}
			else if(keys[37]){
				this.moveValueX -= 45;
			}
		}
		else if(this.jumpIndex == 7){
			this.jumpIndex = -1;
		}
		
		this.characterBlock.style.left = this.moveValueX + "px";
		this.characterBlock.style.top = this.moveValueY + "px";
	},

	sasukeTeleport: function(way){
		animateMovement(this.valuesTeleportWidth, this.valuesTeleportHeight, this, "Sasuke", "teleport", way, 100);
	},
	moveTeleport: function(way, imageCount){
		// this.getBlockCoords();
		var moveValueTP = 500;
		
		if(imageCount == 3){
			if(way == "right"){
				if(this.negativeFlag){
					this.characterBlock.style.alignSelf = "flex-start";
					this.moveValueX = this.clientWidth + this.moveValueX;
					this.negativeFlag = false;
				}

				this.moveValueX += moveValueTP;	
			}
			else if(way == "left"){	
				// console.log("End!");
				if(!this.negativeFlag){
					this.characterBlock.style.alignSelf = "flex-end";
					this.moveValueX = this.moveValueX - this.clientWidth;
					this.negativeFlag = true;
				}

				this.moveValueX -= moveValueTP;
			}

			this.characterBlock.style.left = this.moveValueX + "px";
			this.getBlockCoords();

			constraintTeleport(this);
		}
	},

	sasukeDamaged: function(way){
		animateMovement(this.valuesDamagedWidth, this.valuesDamagedHeight, this, "Sasuke", "damaged", way, 150);
	},
	moveDamaged(way, imageCount){
		console.log(imageCount);
		this.getBlockCoords();
		if(this.characterRight > this.clientWidth - 50){
			if(imageCount == 0){
				this.moveValueX -= 20;
			}
			else if(imageCount == 1){
				this.moveValueX -= 10;
			}
		}
		else if(this.characterLeft < 50){
			if(imageCount == 0){
				this.moveValueX += 20;
			}
			else if(imageCount == 1){
				this.moveValueX += 10;
			}
		}

		if(imageCount == 0 || imageCount == 1){
			if(way == "right"){
				if(imageCount == 0){
					this.moveValueX -= 20;
				}
				else if(imageCount == 1){
					this.moveValueX -= 10;
				}
			}
			else if(way == "left"){
				if(imageCount == 0){
					this.moveValueX += 20;
				}
				else if(imageCount == 1){
					this.moveValueX += 10;
				}
			}
		}
		
		this.characterBlock.style.left = this.moveValueX + "px";
	},

	// knockout - нокаут, поражение
	sasukeKnockout: function(way){
		animateMovement(this.valuesKnockoutWidth, this.valuesKnockoutHeight, this, "Sasuke", "knockout", way, 200);
	},
	moveKnockout(way, imageCount){
		this.getBlockCoords();

		takingDown(this, way, imageCount);

		this.characterBlock.style.left = this.moveValueX + "px";
		this.characterBlock.style.top = this.moveValueY + "px";

		// console.log(imageCount);
	},

	// knocked down - оглушение от сильного удара
	sasukeKnockedDown: function(way){
		animateMovement(this.valuesKnockedDownWidth, this.valuesKnockedDownHeight, this, "Sasuke", "knockedDown", way, 200);
	},
	moveKnockedDown: function(way, imageCount){
		this.getBlockCoords();

		takingDown(this, way, imageCount);

		this.characterBlock.style.left = this.moveValueX + "px";
		this.characterBlock.style.top = this.moveValueY + "px";
	},

	sasukeAttack1: function(way){
		animateMovement(this.valuesAttack1Width, this.valuesAttack1Height, this, "Sasuke", "attack1", way, 150);
	},
	moveAttack1: function(way, imageCount){
		// console.log(imageCount);
		this.getBlockCoords();
		if(this.characterRight > this.clientWidth - 50){
			this.moveValueX -= 10;
		}
		else if(this.characterLeft < 50){
			this.moveValueX += 10;
		}

		if(imageCount == 0){
			if(way == "right"){
				this.moveValueX += 30;
			}
			else if(way == "left"){
				this.moveValueX -= 30;
			}
			this.characterBlock.style.left = this.moveValueX + "px";
		}
	},
	
	sasukeAttack2: function(way){
		animateMovement(this.valuesAttack2Width, this.valuesAttack2Height, this, "Sasuke", "attack2", way, 150);
	},
	moveAttack2: function(way, imageCount){
		// console.log(imageCount);
		this.getBlockCoords();
		if(this.characterRight > this.clientWidth - 50){
				this.moveValueX -= 20;
		}
		else if(this.characterLeft < 50){
			this.moveValueX += 20;
		}

		if(imageCount >= 0 && imageCount <= 3){
			if(way == "right"){
				if(imageCount == 0){
					this.moveValueX -= 40;
				}
				else if(imageCount == 1){
					this.moveValueX += 40;
				}
				else if(imageCount == 2){
					this.moveValueX += 10;
				}
				else if(imageCount == 3){
					this.moveValueX += 20;
				}
			}
			else if(way == "left"){
				if(imageCount == 0){
					this.moveValueX += 50;
				}
				else if(imageCount == 1){
					this.moveValueX -= 30;
				}
				else if(imageCount == 2){
					this.moveValueX -= 15;
				}
				else if(imageCount == 3){
					this.moveValueX -= 20;
				}		
			}
			this.characterBlock.style.left = this.moveValueX + "px";
		}
	},

	sasukeAttack3: function(way){
		animateMovement(this.valuesAttack3Width, this.valuesAttack3Height, this, "Sasuke", "attack3", way, 120);
	},
	moveAttack3: function(way, imageCount){
		// console.log("Move attack3!");
		
		if(imageCount >=1 && imageCount <= 2){
			this.getBlockCoords();
			if(this.characterRight > this.clientWidth - 50){
					this.moveValueX -= 80;
			}
			else if(this.characterLeft < 50){
				this.moveValueX += 80;
			}

			if(way == "left"){
				if(!this.negativeFlag){
					this.characterBlock.style.alignSelf = "flex-end";
					this.moveValueX = this.moveValueX - document.documentElement.clientWidth;
					this.negativeFlag = true;
				}
				else{
					this.moveValueX -= 40;
				}
				
				// console.log("value now is: " + this.moveValueX);
			}
			else if(way == "right"){
				if(this.negativeFlag){
					this.characterBlock.style.alignSelf = "flex-start";
					this.moveValueX = document.documentElement.clientWidth + this.moveValueX;
					this.negativeFlag = false;
				}
				else{
					this.moveValueX += 40;
				}
			}
			this.characterBlock.style.left = this.moveValueX + "px";
		}
	},

	sasukeAttackUp: function(way){
		animateMovement(this.valuesAttackUpWidth, this.valuesAttackUpHeight, this, "Sasuke", "attackUp", way, 120);
	},
	moveAttackUp: function(way, imageCount){
		// console.log(imageCount);
		this.getBlockCoords();

		if(this.characterRight > this.clientWidth - 50){
			this.moveValueX -= 20;
		}
		else if(this.characterLeft < 50){
			this.moveValueX += 20;
		}

		if(way == "right"){
			if(imageCount == 0 ){
				this.moveValueX += 20;
			}
			else if(imageCount == 1){
				this.moveValueX += 15;
			}
		}
		else if(way == "left"){
			if(imageCount == 0 ){
				this.moveValueX -= 20;
			}
			else if(imageCount == 1){
				this.moveValueX -= 15;
			}
		}
		
		this.characterBlock.style.left = this.moveValueX + "px";
	},

	sasukeAttackRun: function(way){
		animateMovement(this.valuesAttackRunWidth, this.valuesAttackRunHeight, this, "Sasuke", "attackRun", way, 120);
	},
	moveAttackRun(way, imageCount){
		// console.log(imageCount);
		this.getBlockCoords();

		if(this.characterRight > this.clientWidth - 50){
			if(imageCount == 0){
				this.moveValueX -= 40;
			}
			else if(imageCount == 1){
				this.moveValueX -= 8;
			}
		}
		else if(this.characterLeft < 50){
			if(imageCount == 0){
				this.moveValueX += 40;
			}
			else if(imageCount == 1){
				this.moveValueX += 8;
			}
		}

		if(way == "right"){
			if(imageCount == 0){
				this.moveValueX += 40;
			}
			else if(imageCount == 1){
				this.moveValueX += 8;
			}
		}
		else if(way == "left"){
			if(imageCount == 0){
				this.moveValueX -= 40;
			}
			else if(imageCount == 1){
				this.moveValueX -= 8;
			}
		}

		this.characterBlock.style.left = this.moveValueX + "px";
	},

	sasukeAttackJump: function(way){
		animateMovement(this.valuesAttackJumpWidth, this.valuesAttackJumpHeight, this, "Sasuke", "attackJump", way, 100);
	},
	moveAttackJump: function(way, imageCount){
		console.log(imageCount);
		
		if(imageCount == -1){
			this.jumpIndex = -1;
		}
		else{
			this.moveJump(way, this.jumpIndex);
		}
	},

	sasukeWeaponThrow: function(way){
		animateMovement(this.valuesWeaponThrowWidth, this.valuesWeaponThrowHeight, this, "Sasuke", "weaponThrow", way, 100);
	},
	moveWeaponThrow: function(way, imageCount){
		// console.log(imageCount);

		if(way == "right"){
			if(imageCount == 1){
				this.moveValueX += 5;
			}
			else if(imageCount == 2){
				this.moveValueX -= 4;
			}
		}
		else if(way == "left"){
			if(imageCount == 1){
				this.moveValueX -= 5;
			}
			else if(imageCount == 2){
				this.moveValueX += 4;
			}
		}

		this.characterBlock.style.left = this.moveValueX + "px";
	},

	sasukeWeaponThrowJump: function(way){
		animateMovement(this.valuesWeaponThrowJumpWidth, this.valuesWeaponThrowJumpHeight, this, "Sasuke", "weaponThrowJump", way, 250);
	},

	sasukeWin: function(way){
		animateMovement(this.valuesWinWidth, this.valuesWinHeight, this, "Sasuke", "win", way, 200);
	},

	sasukeChidoriNagashi: function(way){
		animateMovement(this.valuesChidoriNagashiWidth, this.valuesChidoriNagashiHeight, this, "Sasuke", "chidoriNagashi", way, 300);
	},
	chidoriNagashi: function(way){
		//console.log("chidoriNagashi is called!");
		drawAbility(this.abilityChidoriNagashiWidth, this.abilityChidoriNagashiHeight, this, "Sasuke", "chidoriNagashi", "", 
					"lightning/", "");
	},

	sasukeChidoriRun: function(way){
		animateMovement(this.valuesChidoriRunWidth, this.valuesChidoriRunHeight, this, "Sasuke", "chidoriRun", way, 700);
	},
	chidoriRun: function(way){
		if(way === "right"){
			drawAbility(this.abilityChidoriRunWidth, this.abilityChidoriRunHeight, this, "Sasuke", "chidoriRun", "chidoriRight/", 
						"", "");
		}
		else if(way == "left"){
			drawAbility(this.abilityChidoriRunWidth, this.abilityChidoriRunHeight, this, "Sasuke", "chidoriRun", "chidoriLeft/", 
						"", "");
		}
	},
	moveChidoriRun: function(way, imageCount){
		this.getBlockCoords();
		if(imageCount >= 7 && imageCount <= 13){
			// console.log("End!");
			this.moveValueX += 20;
		}
		this.characterBlock.style.left = this.moveValueX + "px";
	},

	sasukeFireBall: function(way){
		animateMovement(this.valuesFireballWidth, this.valuesFireballHeight, this, "Sasuke", "fireBall", way, 350);
	},

	fireBall: function(way){
		if(way == "right"){
			drawAbility(this.abilityFireBallWidth, this.abilityFireBallHeight, this, "Sasuke", "fireBall", "fireBallRight/", "", "");
		}
		else if(way == "left"){
			drawAbility(this.abilityFireBallWidth, this.abilityFireBallHeight, this, "Sasuke", "fireBall", "fireBallLeft/", "", "");
		}
	},

	getBlockCoords: function(){
		this.characterLeft = this.characterBlock.getBoundingClientRect().left;
		this.characterRight = this.characterBlock.getBoundingClientRect().right;
	}
};

var weapon = {
	clientWidth: document.documentElement.clientWidth,

	wCrop: document.getElementsByClassName("character-Sasuke__weapon-crop weapon-crop")[0],
	wGallery: document.getElementsByClassName("weapon-crop__gallery gallery")[0],

	imageWeaponPrev: 0,
	imageWeaponNext: 1,

	moveWGallery: 0,

	valuesKunaiWidth: [21, 21, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 
	20, 20, 20, 20, 20, 20, 20],
	valuesKunaiHeight: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],

	chooseWeapon: function(way){
		if(keys["49"]){
			// console.log("Pressed 1!");
			drawWeapon(this.valuesKunaiWidth, this.valuesKunaiHeight, this, "kunai", way);
		}
	}
};

// Ф-я "невыхода" за экран при телепорте
function constraintTeleport(hero){
	if(hero.characterRight > hero.clientWidth - 50){
		hero.moveValueX -= (hero.characterRight - (hero.clientWidth - 50));
		hero.characterBlock.style.left = hero.moveValueX + "px";
		// console.log("Greater than clientWidth!");
	}
	else if(hero.characterLeft < 50){
		hero.moveValueX -= hero.characterLeft - 50;		
		hero.characterBlock.style.left = hero.moveValueX + "px";
	}
}

function takingDown(hero, way, imageCount){
	if(hero.characterRight > hero.clientWidth - 50){
		if(imageCount == 0){
			hero.moveValueX -= 50;
		}
		else if(imageCount == 1){
			hero.moveValueX -= 90;
		}
		else if(imageCount == 2){
			hero.moveValueX -= 20;
		}
	}
	else if(hero.characterLeft < 50){
		if(imageCount == 0){
			hero.moveValueX += 50;
		}
		else if(imageCount == 1){
			hero.moveValueX += 90;
		}
		else if(imageCount == 2){
			hero.moveValueX += 20;
		}
	}

	if(way == "right"){
		if(imageCount == 0){
			hero.moveValueX -= 50;
		}
		else if(imageCount == 1){
			hero.moveValueX -= 90;
			hero.moveValueY += 20;
		}
		else if(imageCount == 2){
			hero.moveValueY -= 10;
			hero.moveValueX -= 20;
		}
		else if(imageCount == 3){
			hero.moveValueY -= 10;
		}
		else if(imageCount == 4){
			hero.moveValueX += 60;
		}
	}
	else if(way == "left"){
		if(imageCount == 0){
			hero.moveValueX += 50;
		}
		else if(imageCount == 1){
			hero.moveValueX += 90;
			hero.moveValueY += 20;
		}
		else if(imageCount == 2){
			hero.moveValueY -= 10;
			hero.moveValueX += 20;
		}
		else if(imageCount == 3){
			hero.moveValueY -= 10;
		}
		else if(imageCount == 4){
			hero.moveValueX -= 60;
		}
	}
}

function drawWeapon(widthValues, heightValues, weaponObj, weaponType, way){	
	var crop = weaponObj.wCrop;
	var gallery = weaponObj.wGallery;
	var pixelIndex = 2;

	weaponObj.imageWeaponNext = 1;
	weaponObj.imageWeaponPrev = 0;
	weaponObj.moveWGallery = 0;

	if(gallery.childElementCount != 0){
		while(gallery.childElementCount != 0){
			gallery.removeChild(gallery.children[0]);
		}
	}

	for(var i=0; i<widthValues.length; i++){
		var image = new Image();	
		image.src = "images/Effects/weapons/" + weaponType + "/" + way + "/" + (i+1) + ".png";
		// widthValues приносит готовые значения ширины фреймов
		image.style.width = (widthValues[i] * pixelIndex) + "px";
		image.style.height = (heightValues[i] * pixelIndex) + "px";

		image.alt = weaponType.charAt(0).toUpperCase() + weaponType.slice(1) + (i+1);
		image.className = "character-Sasuke__" + weaponType + " image";
		gallery.appendChild(image);
	}

	crop.style.width = (widthValues[0] * pixelIndex) + "px";
	crop.style.height = (heightValues[0] * pixelIndex) + "px";
	crop.style.marginTop = "-" + parseInt(window.getComputedStyle(crop).height) + "px";
	crop.style.opacity = "0";
	gallery.style.transform = "translateX(-" + weaponObj.moveWGallery + "px)";

	if(way == "right"){
		crop.style.alignSelf = "flex-end";
	}
	else if(way == "left"){
		crop.style.alignSelf = "flex-start";
	}

	if(weaponType == "kunai"){
		weapon.wCrop.style.left = "20px";
		weapon.wCrop.style.top = "-94px";
	}

	weaponObj.wType = weaponType;
}

function chooseWeaponAnimation(way, imageCount, milliseconds){
	if(weapon.wType == "kunai"){
		showKunai(way, imageCount, milliseconds);
	}
}

function showKunai(way, imageCount, milliseconds){
	var k = 0;
	// console.log(imageCount);
	// console.log("imageWeaponNext: " + weapon.imageWeaponNext + "\nimageWeaponPrev: " + weapon.imageWeaponPrev);

	if(imageCount >= 0 && imageCount < 2){
		if(imageCount == 0){
			console.log("starting index: " + "\nimageWeaponNext: " + weapon.imageWeaponNext + "\nimageWeaponPrev: " + 
				weapon.imageWeaponPrev);
		}
		weapon.wCrop.style.opacity = "1";
		drawWeaponFrame();
		// console.log(way);
		if(way == "right"){
			k+=40;
		}
		else if(way == "left"){
			k-=40;
		}
		weapon.wCrop.style.left = (parseInt(window.getComputedStyle(weapon.wCrop).left) + k) + "px";
		k = 0;

		setTimeout(function(){
			drawWeaponFrame();
			if(way == "right"){
				k+=40;
			}
			else if(way == "left"){
				k-=40;
			}
			weapon.wCrop.style.left = (parseInt(window.getComputedStyle(weapon.wCrop).left) + k) + "px";
			k = 0;
		}, milliseconds/2);
	}
	else if(imageCount == 2){
		if(weapon.imageWeaponPrev != 31){
			// console.log("not a 7!");
			drawWeaponFrame();
			if(way == "right"){
				k+=40;
			}
			else if(way == "left"){
				k-=40;
			}

			weapon.wCrop.style.left = (parseInt(window.getComputedStyle(weapon.wCrop).left) + k) + "px";
			k = 0;

			if(weapon.wCrop.getBoundingClientRect().right >= weapon.clientWidth - 50 || weapon.wCrop.getBoundingClientRect().left < 50){
				resetWeaponPosition();
			}
		}
		
		// console.log("imageWeaponNext: " + weapon.imageWeaponNext + "\nimageWeaponPrev: " + weapon.imageWeaponPrev);
		var interval = setInterval(function(){
			if(weapon.imageWeaponPrev == 31){
				console.log("imageWeaponNext: " + weapon.imageWeaponNext + "\nimageWeaponPrev: " + weapon.imageWeaponPrev);
				resetWeaponPosition();

				weapon.wCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(weapon.wCrop).height) + "px";
				clearInterval(interval);
			}
			else{
				drawWeaponFrame();
				if(way == "right"){
					k+=40;
				}
				else if(way == "left"){
					k-=40;
				}

				weapon.wCrop.style.left = (parseInt(window.getComputedStyle(weapon.wCrop).left) + k) + "px";
				k = 0;
				
				if(weapon.wCrop.getBoundingClientRect().right >= weapon.clientWidth - 50 || 
					weapon.wCrop.getBoundingClientRect().left < 50){
					resetWeaponPosition();
					clearInterval(interval);
				}
			}	
		}, milliseconds/2);
	}
	else if(imageCount == -1){
		if(way == "right"){
			k+=20;
		}
		else if(way == "left"){
			k-=20;
		}
		weapon.wCrop.style.left = (parseInt(window.getComputedStyle(weapon.wCrop).left) + k) + "px";
		k = 0;
		
		if(weapon.wCrop.getBoundingClientRect().right >= weapon.clientWidth - 50 || weapon.wCrop.getBoundingClientRect().left < 50){
			resetWeaponPosition();
		}
	}
}

function resetWeaponPosition(){
	console.log("imageWeaponNext: " + weapon.imageWeaponNext + "\nimageWeaponPrev: " + weapon.imageWeaponPrev);
	weapon.wCrop.style.opacity = "0";
	weapon.imageWeaponNext = 1;
	weapon.imageWeaponPrev = 0;
	weapon.moveWGallery = 0;
	weapon.wGallery.style.transform = "translateX(-" + weapon.moveWGallery + "px)";
	weapon.wCrop.style.width = window.getComputedStyle(weapon.wGallery.children[0]).width;
	weapon.wCrop.style.height = window.getComputedStyle(weapon.wGallery.children[0]).height;

	weapon.wCrop.style.left = "20px";
	weapon.wCrop.style.top = "-94px";
}

function drawWeaponFrame(){
	weapon.wCrop.style.width = window.getComputedStyle(weapon.wGallery.children[weapon.imageWeaponNext]).width;
	weapon.wCrop.style.height = window.getComputedStyle(weapon.wGallery.children[weapon.imageWeaponNext]).height;
	// console.log("previousImageWidth: " + window.getComputedStyle(hero.aGallery.children[hero.imageAbilityPrev]).width);
	// console.log("nextImageWidth: " + window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).width);

	weapon.moveWGallery += parseInt(window.getComputedStyle(weapon.wGallery.children[weapon.imageWeaponPrev]).width); 
	weapon.wGallery.style.transform = "translateX(-" + weapon.moveWGallery + "px)";
	
	weapon.imageWeaponNext++;
	weapon.imageWeaponPrev++;
}

// Функция прорисовки умения
function drawAbility(widthValues, heightValues, hero, heroName, type, way, folder1, folder2){
	var crop = hero.aCrop;
	var gallery = hero.aGallery;
	var pixelIndex = 3;

	if(gallery.childElementCount != 0){
		while(gallery.childElementCount != 0){
			gallery.removeChild(gallery.children[0]);
		}
	}
	//console.log("chidoriValues: " + widthValues);

	for(var i=0; i<widthValues.length; i++){
		var image = new Image();	
		image.src = "images/" + heroName + "/" + type + "/" + way + folder1 + folder2 + (i+1) + ".png";
		// widthValues приносит готовые значения ширины фреймов
		image.style.width = (widthValues[i] * pixelIndex) + "px";
		image.style.height = (heightValues[i] * pixelIndex) + "px";

		image.alt = type.charAt(0).toUpperCase() + type.slice(1) + (i+1);
		image.className = "character-Sasuke__" + type + " image";
		gallery.appendChild(image);
	}
	crop.style.width = (widthValues[0] * pixelIndex) + "px";
	crop.style.height = (heightValues[0] * pixelIndex) + "px";
	crop.className = "character-Sasuke__ability-crop character-Sasuke__ability-crop--" + type + " ability-crop";

	if(type === "chidoriNagashi"){
		//console.log("Up!");
		crop.style.marginTop = "-" + ((parseInt(window.getComputedStyle(crop).height)) -4) + "px";
		crop.style.opacity = "0";
	}
	else if(type == "chidoriRun"){
		crop.style.opacity = "0";
		crop.style.margin = "0 auto";
		crop.style.marginTop = "-" + parseInt(window.getComputedStyle(crop).height) + "px";
	}
	else if(type == "fireBall"){
		crop.style.opacity = "0";
		hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
	}
}

function chooseAbility(hero, type, milliseconds, imageCount, imageMoving, way){
	if(type == "chidoriNagashi"){
		//console.log("Holly molly! This is " + type + "!");
		showChidoriNagashi(hero, milliseconds, imageCount, imageMoving);
	}
	else if(type == "chidoriRun"){
		showChidoriRun(hero, milliseconds, imageCount, imageMoving, way);
		//console.log("This is chidori!");
	}
	else if(type == "fireBall"){
		showFireBall(hero, milliseconds, imageCount, imageMoving, way);
		// console.log("A fireBall!");
	}
}

function showFireBall(hero, milliseconds, imageCount, imageMoving, way){
	var p = 0;
	if(imageCount >=6 && imageCount <= 8){
		hero.aCrop.style.opacity = "1";
		drawAbilityFrame(hero);
		hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
		if(imageCount == 6){
			abilityLeftCoord(hero, way, "104px", "-31px");
			hero.aCrop.style.top = "-87px";
		}
		else if(imageCount == 7){
			abilityLeftCoord(hero, way, "116px", "-98px");
			hero.aCrop.style.top = "-60px";
		}
		else if(imageCount == 8){
			abilityLeftCoord(hero, way, "142px", "-142px");
			hero.aCrop.style.top = "-55px";
		}

		if(imageCount != 8){
			setTimeout(function(){
				drawAbilityFrame(hero);
				hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
				if(imageCount == 6){
					abilityLeftCoord(hero, way, "105px", "-48px");
					hero.aCrop.style.top = "-82px";
				}
				else if(imageCount == 7){
					abilityLeftCoord(hero, way, "125px", "-123px");
					hero.aCrop.style.top = "-55px";
				}
			}, milliseconds/2);
		}
		else if(imageCount == 8){
			var interval1 = setInterval(function(){
				if(hero.imageAbilityPrev == 17){
					hero.aCrop.style.opacity = "0";
					hero.imageAbilityNext = 1;
					hero.imageAbilityPrev = 0;
					hero.moveAGallery = 0;
					hero.aGallery.style.transform = "translateX(-" + hero.moveAGallery + "px)";
					hero.aCrop.style.width = window.getComputedStyle(hero.aGallery.children[0]).width;
					hero.aCrop.style.height = window.getComputedStyle(hero.aGallery.children[0]).height;

					hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
					hero.aCrop.style.left = "0px";
					hero.aCrop.style.top = "0px";
					clearInterval(interval1);
				}
				else{
					drawAbilityFrame(hero);
					hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
					if(way == "right"){
						p+=20;
					}
					else if(way == "left"){
						p-=20;		
					}
					hero.aCrop.style.left = (parseInt(window.getComputedStyle(hero.aCrop).left) + p) + "px";
					
					p = 0;
				}
				console.log(hero.imageAbilityPrev);
			}, milliseconds/2);
		}
	}
	console.log(imageCount);
}

// Функция выбирает одну из координат left в зависимости от переданного way
function abilityLeftCoord(hero, way, coordRight, coordLeft){
	if(way == "right"){
		hero.aCrop.style.left = coordRight;
	}
	else if(way == "left"){
		hero.aCrop.style.left = coordLeft;
	}
}

function showChidoriRun(hero, milliseconds, imageCount, imageMoving, way){
	if(imageCount == -1){
		//console.log("Both are 0!");
		hero.imageAbilityPrev = 0;
		hero.imageAbilityNext = 1;
		hero.aCrop.style.width = window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).width;
		hero.aCrop.style.height = window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).height;

		hero.moveAGallery = 0;
		hero.aGallery.style.transform = "translateX(-" + hero.moveAGallery + "px)";
		hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
		hero.aCrop.style.left = "0px";
		hero.aCrop.style.top = "0px";

		//console.log("imageMoving: " + hero.imageAbilityNext + "\nimageCount: " + hero.imageAbilityPrev);
	}

	if(imageCount >= 2 && imageCount <= 12){
		hero.aCrop.style.opacity = "1";

		if(imageCount >= 2 && imageCount <= 5){
			drawAbilityFrame(hero);
			hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";

			hero.aCrop.style.top = "10px";
			abilityLeftCoord(hero, way, "20px", "-20px"); //Для way == right, и way == left
			/*if(way == "right"){
				hero.aCrop.style.left = "20px";
			}
			else if(way == "left"){
				hero.aCrop.style.left = "-20px";
			}*/

			if(imageCount <= 4){
				setTimeout(function(){
					drawAbilityFrame(hero);
					hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
				}, milliseconds/2);
			}

			if(imageCount == 3 || imageCount == 4 || imageCount == 5){
				abilityLeftCoord(hero, way, "10px", "-10px");
			}
		}
		else if(imageCount == 6){
			abilityLeftCoord(hero, way, "-30px", "30px");
		}
		else if(imageCount >= 7 && imageCount <= 12){
			drawAbilityFrame(hero);		
			hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
			// Для молнии сбоку от героя
			if(imageCount == 7 || imageCount == 8){
				hero.aCrop.style.top = "20px";
				abilityLeftCoord(hero, way, "-74px", "74px");
			}
			else if(imageCount == 10 || imageCount == 11){
				hero.aCrop.style.top = "4px";
				abilityLeftCoord(hero, way, "-14px", "14px");
			}
			else{
				hero.aCrop.style.top = "-8px";
				abilityLeftCoord(hero, way, "-30px", "30px");
			}
			
			setTimeout(function(){
				drawAbilityFrame(hero);
				hero.aCrop.style.marginTop = "-" + parseInt(window.getComputedStyle(hero.aCrop).height) + "px";
				if(imageCount == 9 || imageCount == 12){
					hero.aCrop.style.top = "-30px";
					abilityLeftCoord(hero, way, "-15px", "15px");
				}
				
			}, milliseconds/2);
		}
	}
	else{
		hero.aCrop.style.opacity = "0";
	}
	console.log(imageCount);
}

function showChidoriNagashi(hero, milliseconds, imageCount, imageMoving){
	var e = 1;
	// console.log(imageCount);
	if(imageCount ==  -1){
		hero.aCrop.style.opacity = "0";
		hero.imageAbilityPrev = 0;
		hero.imageAbilityNext = 1;
		hero.aCrop.style.width = window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).width;
		hero.aCrop.style.height = window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).height;
		hero.moveAGallery = 0;
		hero.aGallery.style.transform = "translateX(-" + hero.moveAGallery + "px)";
		hero.aCrop.style.marginTop = "-" + ((parseInt(window.getComputedStyle(hero.aCrop).height)) -4) + "px";

		//console.log("imageMoving: " + hero.imageAbilityNext + "\nimageCount: " + hero.imageAbilityPrev);
	}
	if(imageCount == 0){
		hero.aCrop.style.opacity = "1";
	}
	if(imageCount >= 1 && imageCount <= 14){
		if(imageCount >= 9 && imageCount <= 12){
			hero.aCrop.style.opacity = "1";
			console.log("imageMoving: " + hero.imageAbilityNext + "\nimageCount: " + hero.imageAbilityPrev);
			drawAbilityFrame(hero);
			hero.aCrop.style.marginTop = "-" + ((parseInt(window.getComputedStyle(hero.aCrop).height)) -4) + "px";
			console.log("e = " + e);

			setTimeout(function(){
				e++;
				console.log("e = " + e);
				drawAbilityFrame(hero);
				hero.aCrop.style.marginTop = "-" + ((parseInt(window.getComputedStyle(hero.aCrop).height)) -4) + "px";

				e = 1;
			}, milliseconds/2);
		}
		else if(imageCount >=1 && imageCount <=7){
			drawAbilityFrame(hero);
			// Смещение кропа вверх на значение его высоты, которое постоянно меняется
			hero.aCrop.style.marginTop = "-" + ((parseInt(window.getComputedStyle(hero.aCrop).height)) -4) + "px";
		}
		else{
			hero.aCrop.style.opacity = "0";
		}
	}
}

function drawAbilityFrame(hero){
	hero.aCrop.style.width = window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).width;
	hero.aCrop.style.height = window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).height;
	// console.log("previousImageWidth: " + window.getComputedStyle(hero.aGallery.children[hero.imageAbilityPrev]).width);
	// console.log("nextImageWidth: " + window.getComputedStyle(hero.aGallery.children[hero.imageAbilityNext]).width);

	hero.moveAGallery += parseInt(window.getComputedStyle(hero.aGallery.children[hero.imageAbilityPrev]).width); 
	hero.aGallery.style.transform = "translateX(-" + hero.moveAGallery + "px)";
	
	hero.imageAbilityNext++;
	hero.imageAbilityPrev++;

	// console.log("imageMoving: " + hero.imageAbilityNext + "\nimageCount: " + hero.imageAbilityPrev);
}

/*Событие нажатяи клавиши срабатыавет, после чего удаляется, таким образом оно вызывается только 1 раз, если клавиша нажата и держится*/
document.addEventListener('keydown', function keyPress(){
	keys[event.keyCode] = true;
	sasuke.isPressed = true;
	sasuke.pressedKey = event.keyCode.toString();
	sasuke.index++;

	if(event.keyCode == 82){
		sasuke.attackIndex++;
	}

	// console.log(sasuke.pressedKey + " pressed! Type is " + typeof sasuke.pressedKey);
	console.log(sasuke.index);
	if(event.keyCode != 38){
		document.removeEventListener('keydown', keyPress);
	}
})

// При отжатии клавиши снова добавляется событие нажатия клавиши
document.addEventListener('keyup', function(){
	keys[event.keyCode] = false;
	sasuke.isPressed = false;
	sasuke.index = 0;

	// console.log(sasuke.index);
	
	document.addEventListener('keydown', function keyPress(){
		keys[event.keyCode] = true;
		sasuke.isPressed = true;
		sasuke.pressedKey = event.keyCode.toString();
		sasuke.index++;

		if(event.keyCode == 82){
			sasuke.attackIndex++;
		}

		// console.log(sasuke.pressedKey + " pressed! Type is " + typeof sasuke.pressedKey);
		// console.log(sasuke.index);
		if(event.keyCode != 38){
			document.removeEventListener('keydown', keyPress);
		}
	});
})

function isRightKey(hero){
	for(var i=0; i<hero.heroKeys.length; i++){
		if(hero.pressedKey == hero.heroKeys[i]){
			// console.log("right key!");
			// hero.keyCount++;
			return true;
		}
	}
	return false;
}

// Анимации, которые не прерываются нажатием других клавиш
function noStopAnimation(type){
	if(type == "jump" || type == "teleport" || type == "attackUp" || type == "attackRun" || type == "weaponThrow" || 
		(type == "attack1" || type == "attack2" || type == "attack3") || (type == "damaged" || type == "knockout" || 
			type == "knockedDown")){
		
		/*if(type == "jump" && keys[82]){
			return true;
		}
		else{
			return false;
		}*/
		return false;
	}
	
	return true;
}

// Ф-я по вызову анимаций при нажатии на клавиши
function chooseAnimation(way, type){
	if(keys["37"]){
		console.log("Pressed left arrow!");
		sasuke.sasukeRun("left");
	}
	else if(keys["39"]){
		console.log("Pressed right arrow!");
		sasuke.sasukeRun("right");
	}
	else if(keys["38"]){
		console.log("Pressed up arrow!");
		sasuke.sasukeJump(way);
	}
	else if(keys["82"]){
		console.log("Pressed R!");
		if(type == "stance"){
			sasuke.attackIndex = 1;
			if(sasuke.attackIndex == 1){
				sasuke.sasukeAttack1(way);
			}
		}
		else if(type == "run"){
			sasuke.sasukeAttackRun(way);
		}
		/*else if(type == "jump"){
			if((keys["82"] && keys["38"]) || keys["82"])
			sasuke.sasukeAttackJump(way);
		}*/
	}
	else if(keys["68"]){
		console.log("Pressed D!");
		sasuke.sasukeTeleport(way);
	}
	else if(keys["69"]){
		console.log("Pressed E!");
		sasuke.sasukeDamaged(way);
	}
	else if(keys["81"]){
		console.log("Pressed Q!");
		sasuke.sasukeKnockout(way);
	}
	else if(keys["87"]){
		console.log("Pressed W!");
		sasuke.sasukeKnockedDown(way);
	}
	else if(keys["70"]){
		console.log("Pressed F");
		sasuke.sasukeAttackUp(way);
	}
	else if(keys["49"]){
		console.log("Pressed 1!");
		sasuke.sasukeWeaponThrow(way);
	}
	/*else if(keys["65"]){
		sasuke.sasukeFireBall(way);
	}*/
}

// Ф-я, определяющая передвижения во время анимаций
function chooseMoveValue(hero, type, way, imageCount){
	if(type == "run"){
		hero.moveRun(way, imageCount);
	}
	else if(type == "attack1"){
		hero.moveAttack1(way, imageCount);
	}
	else if(type == "attack2"){
		hero.moveAttack2(way, imageCount);
	}
	else if(type == "attack3"){
		// console.log("Attack type 3!");
		hero.moveAttack3(way, imageCount);	
	}
	else if(type == "jump"){
		// console.log("Time to jump!");
		hero.moveJump(way, imageCount);
	}
	else if(type == "teleport"){
		hero.moveTeleport(way, imageCount);
	}
	else if(type == "damaged"){
		hero.moveDamaged(way, imageCount);
	}
	else if(type == "knockout"){
		hero.moveKnockout(way, imageCount);
	}
	else if(type == "knockedDown"){
		hero.moveKnockedDown(way, imageCount);
	}
	else if(type == "attackUp"){
		hero.moveAttackUp(way, imageCount);
	}
	else if(type == "attackRun"){
		hero.moveAttackRun(way, imageCount);
	}
	else if(type == "weaponThrow"){
		hero.moveWeaponThrow(way, imageCount);
	}
	/*else if(type == "attackJump"){
		hero.moveAttackJump(way, imageCount);
	}*/
}

function animateMovement(widthValues, heightValues, hero, heroName, type, way, milliseconds){
	/*var keysInfo = document.getElementById("keys-info");
	keysInfo.style.position = "absolute";
	keysInfo.style.left = "0";*/

	//Обращение по ссылке к объекту, который вызвал метод
	var crop = hero.hCrop;
	var gallery = hero.hGallery;
	// hero.characterBlock.style.left = "200px";

	var isAbility = false;
	var isWeapon = false;
	var imageMoving = 1; //Индекс следующей картинки, под которую нужно подстроить кроп
	var imageCount = 0; //Индекс текущей картинки, которую нужно сместить; впоследствии получает расстояние смещения
	var pixelIndex = 4;

	if(gallery.childElementCount == 0){
		for(var i=0; i<widthValues.length; i++){
			var image = new Image();	
			image.src = "images/" + heroName + "/" + type + "/" + way + "/" + (i+1) + ".png";
			// widthValues приносит готовые значения ширины фреймов
			image.style.width = (widthValues[i] * pixelIndex) + "px";
			image.style.height = (heightValues[i] * pixelIndex) + "px";

			// Метод slice(start, end) отрезает часть строки с индекса start по end; здесь: убираем 1-й символ
			image.alt = type.charAt(0).toUpperCase() + type.slice(1) + (i+1);
			image.className = "Sasuke-crop__" + type + " image";
			gallery.appendChild(image);
		}
		//console.log("gallery length is 0!");
	}
	else if(gallery.childElementCount != 0){
		// hero.moveHGallery = 0;
		// gallery.style.transform = "translateX(-" + hero.moveHGallery + "px)";

		if(gallery.childElementCount > widthValues.length){
			while(gallery.childElementCount != widthValues.length){
				//console.log(gallery.children[0].alt + " removed");
				gallery.removeChild(gallery.children[widthValues.length]);
			}
			for(var i=0; i<widthValues.length; i++){
				var image = gallery.children[i];
				image.src = "images/" + heroName + "/" + type + "/" + way + "/" + (i+1) + ".png";
				image.style.width = (widthValues[i] * pixelIndex) + "px";
				image.style.height = (heightValues[i] * pixelIndex) + "px";

				// Метод slice(start, end) отрезает часть строки с индекса start по end; здесь: убираем 1-й символ
				image.alt = type.charAt(0).toUpperCase() + type.slice(1) + (i+1);
				image.className = "Sasuke-crop__" + type + " image";
			}
		}
		else if(gallery.childElementCount < widthValues.length){
			while(gallery.childElementCount != widthValues.length){
				var elem = new Image();
				gallery.appendChild(elem);
			}

			for(var i=0; i<widthValues.length; i++){
				var image = gallery.children[i];
				image.src = "images/" + heroName + "/" + type + "/" + way + "/" + (i+1) + ".png";
				image.style.width = (widthValues[i] * pixelIndex) + "px";
				image.style.height = (heightValues[i] * pixelIndex) + "px";

				// Метод slice(start, end) отрезает часть строки с индекса start по end; здесь: убираем 1-й символ
				image.alt = type.charAt(0).toUpperCase() + type.slice(1) + (i+1);
				image.className = "Sasuke-crop__" + type + " image";
			}
		}
		else if(gallery.childElementCount == widthValues.length){
			for(var i=0; i<widthValues.length; i++){
				var image = gallery.children[i];
				image.src = "images/" + heroName + "/" + type + "/" + way + "/" + (i+1) + ".png";
				image.style.width = (widthValues[i] * pixelIndex) + "px";
				image.style.height = (heightValues[i] * pixelIndex) + "px";

				// Метод slice(start, end) отрезает часть строки с индекса start по end; здесь: убираем 1-й символ
				image.alt = type.charAt(0).toUpperCase() + type.slice(1) + (i+1);
				image.className = "Sasuke-crop__" + type + " image";
			}
		}
	}
	
	crop.style.width = (widthValues[0] * pixelIndex) + "px";
	crop.style.height = (heightValues[0] * pixelIndex) + "px";
	
	for(var i=0; i<hero.heroAbilities.length; i++){
		if(hero.heroAbilities[i] === type){
			//console.log("This is " + type + "!");
			isAbility = true;
			hero[type](way);
		}
	}

	if(type == "weaponThrow"){
		isWeapon = true;
		weapon.chooseWeapon(way);
	}

	hero.currentType = type;

	var interval = setInterval(function(){
		// keysInfo.innerHTML = JSON.stringify(keys);

		// На каждой итерации setInterval проверка, есть ли у какой то "клавиши" значение true
		if(hero.isPressed && imageMoving != gallery.childElementCount){
			if(isRightKey(hero)){
				if(noStopAnimation(type)){
					/*Если не присвоить false этому св-ву, то при удержании клавиши будет бесконечное вхождение в это условие, 
					и анимация "застрянет"*/
					hero.isPressed = false;
					imageCount = -1;
					imageMoving = 0;
					crop.style.width = window.getComputedStyle(gallery.children[imageMoving]).width;
					crop.style.height = window.getComputedStyle(gallery.children[imageMoving]).height;
					hero.moveHGallery = 0;
					gallery.style.transform = "translateX(-" + hero.moveHGallery + "px)";
					// console.log("End!");
					
					clearInterval(interval);
					chooseAnimation(way, type);
				}
			}
		}

		if(imageMoving == gallery.childElementCount){
			// Если это не анимация состояния покоя и бега, то она завершается
			if(type == "stance" || type == "run"){
				imageCount = 0;
				imageMoving = 0;
				hero.moveHGallery = -(parseInt(window.getComputedStyle(gallery.children[imageCount]).width)); //-(156px)
			}
			else if(type != "stance" && type != "run"){
				/*Сброс всех значений, галерея смещается в начальное положение, imageСount теперь -1, т.к. если будет равен 0 вместе с 
				imageMoving, то и отобразится, и сместится 1-е изображение; а так никакого смещения галлереи не будет*/
				imageCount = -1;
				imageMoving = 0;
				//Подстраивание кропа под размер 1-го элемента в конце анимации
				crop.style.width = window.getComputedStyle(gallery.children[imageMoving]).width;
				crop.style.height = window.getComputedStyle(gallery.children[imageMoving]).height;
				hero.moveHGallery = 0;
				gallery.style.transform = "translateX(-" + hero.moveHGallery + "px)";

				clearInterval(interval);
				/*Анимация при нажатии на R вызывается только 1 раз, за счет того, что программа не проходит условие noStopAnimation,
				нажатие на R просто увеличивает индекс, автоматически запуская другую анимацию по окончании текущей*/
				if(type == "attack1" && sasuke.attackIndex == 2){
					sasuke.sasukeAttack2(way);
				}
				else if(type == "attack2" && sasuke.attackIndex >= 3){
					sasuke.sasukeAttack3(way);
				}
				else{
					sasuke.sasukeStance(way);
				}
			}
		}

		chooseMoveValue(hero, type, way, imageCount);

		if(imageCount != -1){
			crop.style.width = window.getComputedStyle(gallery.children[imageMoving]).width;
			crop.style.height = window.getComputedStyle(gallery.children[imageMoving]).height;
			//-156+156 = 0, именно поэтому карусель и возвращается в начало
			hero.moveHGallery += parseInt(window.getComputedStyle(gallery.children[imageCount]).width); 
			gallery.style.transform = "translateX(-" + hero.moveHGallery + "px)";
		}

		if(isWeapon){
			chooseWeaponAnimation(way, imageCount, milliseconds);
		}

		if(isAbility){
			chooseAbility(hero, type, milliseconds, imageCount, imageMoving, way);
		}

		/*Если оба индекса равны 0, т.к. начинаем с 1-го эл-та, то увеличивается только индекс для следующей картинки, под которую 
		нужно подстроить кроп*/			
		if(imageCount == 0 && imageMoving == 0){
			imageMoving++;
		}
		else{
			imageCount++;
			imageMoving++;
		}
		
		//console.log("moveGallery: " + hero.moveHGallery);
	}, milliseconds);
}

sasuke.sasukeStance("right");
// sasuke.sasukeRun("right");
// sasuke.sasukeJump("right");
// sasuke.sasukeTeleport("right");
// sasuke.sasukeDamaged("right");
// sasuke.sasukeKnockout("right");
// sasuke.sasukeKnockedDown("right");
// sasuke.sasukeAttack1("right");
// sasuke.sasukeAttack2("right");
// sasuke.sasukeAttack3("right");
// sasuke.sasukeAttackUp("right");
// sasuke.sasukeAttackRun("right");
// sasuke.sasukeAttackJump("right");
// sasuke.sasukeWeaponThrow("right");
// sasuke.sasukeWeaponThrowJump("right");
// sasuke.sasukeWin("right");
// sasuke.sasukeChidoriNagashi("right");
// sasuke.sasukeChidoriRun("left");
// sasuke.sasukeFireBall("left");

