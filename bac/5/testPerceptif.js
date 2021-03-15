
let fontRegular, fontItalic;
let syntaxSlider, attractiveSlider;
var nameInput, validerButton, suivantButton, playButton, terminerButton;
var tesseractImg;
var musicImg;
var pageCompt;
var id;
var song;
var songList;
var order = [10, 3, 8, 1, 11, 7, 2, 5, 9, 6, 4]



function preload() {
  tesseractImg = loadImage('img/tesseract.png');
  musicImg = loadImage('img/music.png');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //print(pageCompt)
  if (pageCompt == 0){
    //print("Helloo")
    removeElements();
    cleanFct(pageCompt);
    welcomePageBis();
  }
  if (pageCompt == 1){
    suivantButton.remove();
    syntaxSlider.remove()
    attractiveSlider.remove()
    playButton.remove()
    test(pageCompt);
  }

  if (pageCompt > 1 && pageCompt < 25){
    //print("HellooBis")
    test(pageCompt);
  }
  if (pageCompt == 25){
    //print("HellooBis")
    testOver();
  }

}

// window.onresize = function(event) {
//
    // if (pageCompt == 0){
    //   //print("Helloo")
    //   removeElements();
    //   cleanFct(pageCompt);
    //   welcomePageBis();
    // }
    // else {
    //   test(pageCompt);
    // }
// };

function setup() {

  // for (i = 0; i < order.lenght; i++) {
  //   songList.push("samples/Rwc3/" + order[i].toString() + ".mp3")
  //   //print("ok")
  // }
  // //print(songList[0])
  // create canvas
songList= ['samples/Rwc97/11.mp3', 'samples/Rwc11/1.mp3', 'samples/Rwc50/6.mp3', 'samples/Rwc66/8.mp3', 'samples/Rwc76/9.mp3', 'samples/Rwc68/3.mp3', 'samples/Rwc12/7.mp3', 'samples/Rwc62/7.mp3', 'samples/Rwc5/11.mp3', 'samples/Rwc42/11.mp3', 'samples/Rwc8/6.mp3', 'samples/Rwc29/4.mp3', 'samples/Rwc20/3.mp3', 'samples/Rwc40/5.mp3', 'samples/Rwc85/10.mp3', 'samples/Rwc16/2.mp3', 'samples/Rwc77/4.mp3', 'samples/Rwc63/2.mp3', 'samples/Rwc88/5.mp3', 'samples/Rwc3/5.mp3', 'samples/Rwc35/10.mp3', 'samples/Rwc24/9.mp3', 'samples/Rwc52/1.mp3', 'samples/Rwc17/8.mp3'];
  //songList = ["samples/17/1.wav", "samples/12/5.mp3", "samples/16/3.wav", "samples/62/6.wav", "samples/68/2.mp3","samples/17/4.wav"];
  pageCompt = 0;
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  image(tesseractImg, windowWidth/2-windowHeight/6, windowHeight*0.15,  windowHeight/3, windowHeight/3);
  textAlign(CENTER);
  var myWindowHeight = windowHeight;
  textSize(myWindowHeight*0.1);
  text('Test musical', windowWidth/2, windowHeight*0.11);


  nameInput = createInput();
  nameInput.position(windowWidth/2 - nameInput.width/2 - 20, windowHeight*0.15 + windowHeight/3 + 200);
  textSize(15);
  //text('Nom / Name :', nameInput.x - 80, nameInput.y + 10);


  text("Merci d'avoir accepté de participer à ce test musical perceptif. Il vous prendra environ 15 minutes.",  windowWidth/2, windowHeight*0.15 + windowHeight/3 + 40);
  text('Vous allez entendre 24 passages musicaux au format midi et vous allez devoir leur attribuer deux appréciations :',  windowWidth/2, windowHeight*0.15 + windowHeight/3 + 70);
  text("- la première portant sur la cohérence de leur organisation (c'est-à-dire dans quelle mesure leur construction musicale vous paraît valide). \n - la seconde sur l'attrait que vous leur trouvez (en d'autres termes, indiquer à quel point ce passage musical est à votre goût - ou pas).",  windowWidth/2, windowHeight*0.15 + windowHeight/3 + 90);
  text('Vous pourrez écouter le segment musical plusieurs fois si nécessaire avant de valider vos réponses.',  windowWidth/2, windowHeight*0.15 + windowHeight/3 + 140);
  text("L'analyse de l'ensemble des résultats obtenus sur le panel de participants permettra d'évaluer des travaux de recherche en cours.",  windowWidth/2, windowHeight*0.15 +windowHeight/3 + 160);
  var test = text('Lorsque vous êtes prêts, indiquez votre nom ci-dessous puis validez.', windowWidth/2, nameInput.y-10);

  validerButton = createButton('Valider');
  validerButton.position(nameInput.x + nameInput.width,  nameInput.y);
  validerButton.mousePressed(firstSave);

  textAlign(CENTER);
  textSize(50);
  noStroke();
}

function loaded() {
  ////print("song loaded")
  //song.play();
}


function firstSave() {
  var msg = "Success"
  var name = nameInput.value();
  var testname = name +'_test.txt';
  $.ajax({
    data: 'nameId=' + name,
    url: 'save.php',
    method: 'POST', // or GET
    // success: function(msg) {
    //     alert(msg);
    // }

});
  ////print('first save ok');
  pageCompt++;
  song = loadSound(songList[pageCompt-1]);
  cleanFct(pageCompt);
  test(pageCompt);
  // window.location.href = "test.html";
}

  function end() {
    ////print(syntaxSlider.value().toString());
    ////print(attractiveSlider.value().toString());
    var msg = "Success"

    var name = nameInput.value();
    var syntax = syntaxSlider.value().toString();
    var attractive = attractiveSlider.value().toString();
    var activeSong = songList[pageCompt-1];
    ////print(activeSong);
    var r = confirm("Merci d'avoir participé.");
    if (r == true) {
      $.ajax({
        data: { nameId: name, syntax: syntax, attractive: attractive, activeSong: activeSong },
        url: 'saveResults.php',
        method: 'POST', // or GET
        // success: function(msg) {
        //     alert(msg);
        // }

    });
      ////print('saved');
      pageCompt++;
      song.stop();
      //song = loadSound(songList[pageCompt]);
      terminerButton.remove()
      testOver();
  } else {
    ////print("Annulé");
  }
    ////print("")

  }

  function saveResult(syntaxScore, attractiveScore) {
    ////print(syntaxSlider.value().toString());
    ////print(attractiveSlider.value().toString());
    var msg = "Success"
    var name = nameInput.value();
    var syntax = syntaxSlider.value().toString();
    var attractive = attractiveSlider.value().toString();
    var activeSong = songList[pageCompt-1];
    ////print(activeSong);


  var r = confirm("Extrait suivant.");
  if (r == true) {
    $.ajax({
      data: { nameId: name, syntax: syntax, attractive: attractive, activeSong: activeSong },
      url: 'saveResults.php',
      method: 'POST', // or GET
      // success: function(msg) {
      //     alert(msg);
      // }

  });
    ////print('saved');
    pageCompt++;
    song.stop();
    song = loadSound(songList[pageCompt-1]);
    test(pageCompt);
} else {
  ////print("Annulé");
}

  // window.location.href = "test.html";
}

function cleanFct(pageCompt) {
  // //print('clear')
  nameInput.remove();
  validerButton.remove();
}

function test(pageCompt) {
  //print(pageCompt);
  background(255, 255, 255);
  image(musicImg, windowWidth/2-100, windowHeight*0.10, windowHeight/5, windowHeight/5);

 if (pageCompt == 1) {
  playButton = createButton('Play');
  playButton.position( windowWidth/2,  windowHeight*0.10 + windowHeight/5 + 30);
  playButton.mousePressed(playSong);
  playButton.style('height', '30px');
  playButton.style('width', '80px');

  syntaxSlider = createSlider(1, 9, 5, 1);
  syntaxSlider.position(windowWidth/2-400, windowHeight/5 + 260);
  syntaxSlider.style('width', '800px');




  attractiveSlider = createSlider(1, 9, 5, 1);
  attractiveSlider.position(syntaxSlider.x, syntaxSlider.y+150);
  attractiveSlider.style('width', '800px');

  suivantButton = createButton('Valider');
  suivantButton.position(attractiveSlider.x + attractiveSlider.width/2 - suivantButton.width/2,  attractiveSlider.y+50);
  suivantButton.mousePressed(saveResult);
}

strokeWeight(2)
var i;
for (i = 0; i < 9; i++) {
stroke(153);
line(syntaxSlider.x  + 6 + i*793/8, syntaxSlider.y + 6 , syntaxSlider.x + 6 + i*793/8, syntaxSlider.y + 16);
line(attractiveSlider.x  + 6 + i*793/8, attractiveSlider.y + 6 , attractiveSlider.x + 6 + i*793/8, attractiveSlider.y + 16);
}
strokeWeight(1)

textSize(17);
text("Veuillez indiquer votre avis sur la cohérence de l'organisation musicale de cet extrait", syntaxSlider.x+ syntaxSlider.width/2,  syntaxSlider.y-60);
textSize(14);
text("Please give your opinion as of the consistency of the musical construction of this passage", syntaxSlider.x+ syntaxSlider.width/2,  syntaxSlider.y-40);
textSize(17);
text("Veuillez indiquer votre avis sur le niveau d'attrait musical de cet extrait",attractiveSlider.x+ attractiveSlider.width/2,  attractiveSlider.y-60);
textSize(14);
text("Please give your opinion as of the degree of musical attractiveness of this passage",attractiveSlider.x+ attractiveSlider.width/2,  attractiveSlider.y-40);
textSize(12);
text('Très mauvaise cohérence', syntaxSlider.x,  syntaxSlider.y-10);
text('Mauvaise cohérence', syntaxSlider.x + syntaxSlider.width/4,  syntaxSlider.y-10);
text('Cohérence moyenne', syntaxSlider.x + syntaxSlider.width/2,  syntaxSlider.y-10);
text('Bonne cohérence', syntaxSlider.x + syntaxSlider.width*3/4,  syntaxSlider.y-10);
text('Très bonne cohérence', syntaxSlider.x + syntaxSlider.width,  syntaxSlider.y-10);

//text('Très satisfaisant',  syntaxSlider.x + syntaxSlider.width  + 5, syntaxSlider.y-10);

text('Très peu attrayant', attractiveSlider.x,  attractiveSlider.y-10);
text('Peu attrayant', attractiveSlider.x+ attractiveSlider.width/4,  attractiveSlider.y-10);
text('Moyennement attrayant', attractiveSlider.x + attractiveSlider.width/2,  attractiveSlider.y-10);
text('Attrayant', attractiveSlider.x + attractiveSlider.width*3/4,  attractiveSlider.y-10);
text('Très attrayant',  attractiveSlider.x + attractiveSlider.width  + 5, attractiveSlider.y-10);
textSize(20);
text('Extrait N° ' + (pageCompt).toString() + " / 24", playButton.x - 130  +  40, playButton.y  + 20)


syntaxSlider.value(5);
attractiveSlider.value(5);

attractiveScore = attractiveSlider.value();

if (pageCompt == 24) {
  suivantButton.remove();
  terminerButton = createButton('Terminer');
  terminerButton.position(attractiveSlider.x + attractiveSlider.width/2 - suivantButton.width/2,  attractiveSlider.y+50);
  terminerButton.mousePressed(end);

}


}




// function mousePressed() {
//   if ( song.isPlaying() ) {
//     song.stop();
//   } else {
//     //song.play();
//   }
// }

function playSong() {
  if ( song.isPlaying() ) {
    song.stop();
  } else {
    song.play();
  }
}

function testOver() {
  background(255, 255, 255);
  image(tesseractImg, windowWidth/2-200, windowHeight*0.25, 400, 400);
  textAlign(CENTER);
  textSize(60);
  text("Le test est terminé, merci d'avoir participé.", windowWidth/2, windowHeight*0.1);

  syntaxSlider.remove();
  playButton.remove();
  attractiveSlider.remove();
  terminerButton.remove();

}




function welcomePageBis() {
  pageCompt = 0;
  background(255, 255, 255);
  //print("Coucou");
  image(tesseractImg, windowWidth/2-windowHeight/6, windowHeight*0.15,  windowHeight/3, windowHeight/3);
  textAlign(CENTER);
  var myWindowHeight = windowHeight;
  textSize(myWindowHeight*0.1);
  text('Test musical', windowWidth/2, windowHeight*0.11);


  nameInput = createInput();
  nameInput.position(windowWidth/2 - nameInput.width/2 - 20, windowHeight*0.15 + windowHeight/3 + 190);
  textSize(15);
  //text('Nom / Name :', nameInput.x - 80, nameInput.y + 10);


  text("Merci d'avoir accepté de participer à ce test musical perceptif. Il vous prendra environ 10 minutes.",  windowWidth/2, windowHeight*0.15 + windowHeight/3 + 40);
  text('Vous allez entendre 24 passages musicaux au format midi et vous allez devoir leur attribuer deux appréciations :',  windowWidth/2, windowHeight*0.15 + windowHeight/3 + 70);
  text("- la première portant sur la cohérence de leur organisation. \n - la seconde sur l'attrait que vous leur trouvez.",  windowWidth/2, windowHeight*0.15 + windowHeight/3 + 90);
  text('Vous pourrez écouter le segment musical plusieurs fois si nécessaire avant de validez vos réponses.',  windowWidth/2, windowHeight*0.15 + windowHeight/3 + 140);
  text("L'analyse de l'ensemble des résultats obtenus sur le panel de participants permettra d'évaluer des travaux de recherche en cours.",  windowWidth/2, windowHeight*0.15 +windowHeight/3 + 160);
  var test = text('Lorsque vous êtes prêts, indiquez votre nom ci-dessous puis validez.', windowWidth/2, nameInput.y-10);

  validerButton = createButton('Valider');
  validerButton.position(nameInput.x + nameInput.width,  nameInput.y);
  validerButton.mousePressed(firstSave);

  textAlign(CENTER);
  textSize(50);
  noStroke();
}
