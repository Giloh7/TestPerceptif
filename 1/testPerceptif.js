
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
var songIndex;



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
// songList= [
//   'samples/Rwc3/7.mp3',
//   'samples/Rwc5/1.mp3',
//   'samples/Rwc8/3.mp3',
//   'samples/Rwc11/9.mp3',
//   'samples/Rwc12/5.mp3',
//   'samples/Rwc16/10.mp3',
//   'samples/Rwc17/6.mp3',
//   'samples/Rwc20/7.mp3',
//   'samples/Rwc24/11.mp3',
//   'samples/Rwc29/10.mp3',
//   'samples/Rwc35/4.mp3',
//   'samples/Rwc40/9.mp3',
//   'samples/Rwc42/4.mp3',
//   'samples/Rwc50/7.mp3',
//   'samples/Rwc52/1.mp3',
//   'samples/Rwc62/11.mp3',
//   'samples/Rwc63/8.mp3',
//   'samples/Rwc66/2.mp3',
//   'samples/Rwc68/5.mp3',
//   'samples/Rwc76/1.mp3',
//   'samples/Rwc77/8.mp3',
//   'samples/Rwc85/6.mp3',
//   'samples/Rwc88/3.mp3',
//   'samples/Rwc97/2.mp3',
// ];

allSongList = [['samples/Rwc77/11.mp3', 'samples/Rwc50/2.mp3', 'samples/Rwc62/3.mp3', 'samples/Rwc66/4.mp3', 'samples/Rwc12/3.mp3', 'samples/Rwc85/6.mp3', 'samples/Rwc24/5.mp3', 'samples/Rwc29/11.mp3', 'samples/Rwc3/1.mp3', 'samples/Rwc40/1.mp3', 'samples/Rwc5/7.mp3', 'samples/Rwc88/1.mp3', 'samples/Rwc11/8.mp3', 'samples/Rwc20/10.mp3', 'samples/Rwc76/5.mp3', 'samples/Rwc8/2.mp3', 'samples/Rwc42/7.mp3', 'samples/Rwc16/9.mp3', 'samples/Rwc97/7.mp3', 'samples/Rwc68/10.mp3', 'samples/Rwc52/8.mp3', 'samples/Rwc63/9.mp3', 'samples/Rwc35/6.mp3', 'samples/Rwc17/4.mp3'],

['samples/Rwc42/8.mp3', 'samples/Rwc8/3.mp3', 'samples/Rwc17/5.mp3', 'samples/Rwc77/1.mp3', 'samples/Rwc62/4.mp3', 'samples/Rwc11/9.mp3', 'samples/Rwc50/3.mp3', 'samples/Rwc29/1.mp3', 'samples/Rwc40/2.mp3', 'samples/Rwc52/9.mp3', 'samples/Rwc68/11.mp3', 'samples/Rwc16/10.mp3', 'samples/Rwc88/2.mp3', 'samples/Rwc20/11.mp3', 'samples/Rwc76/6.mp3', 'samples/Rwc3/2.mp3', 'samples/Rwc66/5.mp3', 'samples/Rwc97/8.mp3', 'samples/Rwc85/7.mp3', 'samples/Rwc5/8.mp3', 'samples/Rwc63/10.mp3', 'samples/Rwc35/7.mp3', 'samples/Rwc24/6.mp3', 'samples/Rwc12/4.mp3'],

['samples/Rwc62/5.mp3', 'samples/Rwc11/10.mp3', 'samples/Rwc29/2.mp3', 'samples/Rwc88/3.mp3', 'samples/Rwc8/4.mp3', 'samples/Rwc66/6.mp3', 'samples/Rwc16/11.mp3', 'samples/Rwc12/5.mp3', 'samples/Rwc42/9.mp3', 'samples/Rwc24/7.mp3', 'samples/Rwc63/11.mp3', 'samples/Rwc17/6.mp3', 'samples/Rwc3/3.mp3', 'samples/Rwc5/9.mp3', 'samples/Rwc68/1.mp3', 'samples/Rwc20/1.mp3', 'samples/Rwc76/7.mp3', 'samples/Rwc97/9.mp3', 'samples/Rwc50/4.mp3', 'samples/Rwc85/8.mp3', 'samples/Rwc35/8.mp3', 'samples/Rwc40/3.mp3', 'samples/Rwc77/2.mp3', 'samples/Rwc52/10.mp3'],

['samples/Rwc77/3.mp3', 'samples/Rwc40/4.mp3', 'samples/Rwc5/10.mp3', 'samples/Rwc11/11.mp3', 'samples/Rwc20/2.mp3', 'samples/Rwc29/3.mp3', 'samples/Rwc76/8.mp3', 'samples/Rwc17/7.mp3', 'samples/Rwc66/7.mp3', 'samples/Rwc24/8.mp3', 'samples/Rwc68/2.mp3', 'samples/Rwc12/6.mp3', 'samples/Rwc16/1.mp3', 'samples/Rwc52/11.mp3', 'samples/Rwc8/5.mp3', 'samples/Rwc88/4.mp3', 'samples/Rwc62/6.mp3', 'samples/Rwc85/9.mp3', 'samples/Rwc35/9.mp3', 'samples/Rwc42/10.mp3', 'samples/Rwc50/5.mp3', 'samples/Rwc3/4.mp3', 'samples/Rwc97/10.mp3', 'samples/Rwc63/1.mp3'],

['samples/Rwc97/11.mp3', 'samples/Rwc11/1.mp3', 'samples/Rwc50/6.mp3', 'samples/Rwc66/8.mp3', 'samples/Rwc76/9.mp3', 'samples/Rwc68/3.mp3', 'samples/Rwc12/7.mp3', 'samples/Rwc62/7.mp3', 'samples/Rwc5/11.mp3', 'samples/Rwc42/11.mp3', 'samples/Rwc8/6.mp3', 'samples/Rwc29/4.mp3', 'samples/Rwc20/3.mp3', 'samples/Rwc40/5.mp3', 'samples/Rwc85/10.mp3', 'samples/Rwc16/2.mp3', 'samples/Rwc77/4.mp3', 'samples/Rwc63/2.mp3', 'samples/Rwc88/5.mp3', 'samples/Rwc3/5.mp3', 'samples/Rwc35/10.mp3', 'samples/Rwc24/9.mp3', 'samples/Rwc52/1.mp3', 'samples/Rwc17/8.mp3'],

['samples/Rwc97/1.mp3', 'samples/Rwc8/7.mp3', 'samples/Rwc88/6.mp3', 'samples/Rwc20/4.mp3', 'samples/Rwc35/11.mp3', 'samples/Rwc17/9.mp3', 'samples/Rwc68/4.mp3', 'samples/Rwc12/8.mp3', 'samples/Rwc62/8.mp3', 'samples/Rwc5/1.mp3', 'samples/Rwc50/7.mp3', 'samples/Rwc42/1.mp3', 'samples/Rwc76/10.mp3', 'samples/Rwc52/2.mp3', 'samples/Rwc29/5.mp3', 'samples/Rwc3/6.mp3', 'samples/Rwc63/3.mp3', 'samples/Rwc85/11.mp3', 'samples/Rwc77/5.mp3', 'samples/Rwc11/2.mp3', 'samples/Rwc16/3.mp3', 'samples/Rwc66/9.mp3', 'samples/Rwc40/6.mp3', 'samples/Rwc24/10.mp3'],

['samples/Rwc29/6.mp3', 'samples/Rwc66/10.mp3', 'samples/Rwc11/3.mp3', 'samples/Rwc42/2.mp3', 'samples/Rwc16/4.mp3', 'samples/Rwc77/6.mp3', 'samples/Rwc52/3.mp3', 'samples/Rwc62/9.mp3', 'samples/Rwc24/11.mp3', 'samples/Rwc88/7.mp3', 'samples/Rwc40/7.mp3', 'samples/Rwc97/2.mp3', 'samples/Rwc85/1.mp3', 'samples/Rwc20/5.mp3', 'samples/Rwc3/7.mp3', 'samples/Rwc50/8.mp3', 'samples/Rwc8/8.mp3', 'samples/Rwc12/9.mp3', 'samples/Rwc68/5.mp3', 'samples/Rwc35/1.mp3', 'samples/Rwc17/10.mp3', 'samples/Rwc76/11.mp3', 'samples/Rwc5/2.mp3', 'samples/Rwc63/4.mp3'],

['samples/Rwc5/3.mp3', 'samples/Rwc24/1.mp3', 'samples/Rwc42/3.mp3', 'samples/Rwc88/8.mp3', 'samples/Rwc85/2.mp3', 'samples/Rwc50/9.mp3', 'samples/Rwc52/4.mp3', 'samples/Rwc35/2.mp3', 'samples/Rwc8/9.mp3', 'samples/Rwc11/4.mp3', 'samples/Rwc16/5.mp3', 'samples/Rwc3/8.mp3', 'samples/Rwc40/8.mp3', 'samples/Rwc29/7.mp3', 'samples/Rwc62/10.mp3', 'samples/Rwc97/3.mp3', 'samples/Rwc66/11.mp3', 'samples/Rwc63/5.mp3', 'samples/Rwc77/7.mp3', 'samples/Rwc68/6.mp3', 'samples/Rwc76/1.mp3', 'samples/Rwc12/10.mp3', 'samples/Rwc20/6.mp3', 'samples/Rwc17/11.mp3'],

['samples/Rwc11/5.mp3', 'samples/Rwc66/1.mp3', 'samples/Rwc52/5.mp3', 'samples/Rwc62/11.mp3', 'samples/Rwc17/1.mp3', 'samples/Rwc77/8.mp3', 'samples/Rwc50/10.mp3', 'samples/Rwc5/4.mp3', 'samples/Rwc97/4.mp3', 'samples/Rwc8/10.mp3', 'samples/Rwc40/9.mp3', 'samples/Rwc68/7.mp3', 'samples/Rwc42/4.mp3', 'samples/Rwc63/6.mp3', 'samples/Rwc16/6.mp3', 'samples/Rwc35/3.mp3', 'samples/Rwc76/2.mp3', 'samples/Rwc88/9.mp3', 'samples/Rwc29/8.mp3', 'samples/Rwc3/9.mp3', 'samples/Rwc24/2.mp3', 'samples/Rwc20/7.mp3', 'samples/Rwc85/3.mp3', 'samples/Rwc12/11.mp3'],

['samples/Rwc8/11.mp3', 'samples/Rwc42/5.mp3', 'samples/Rwc62/1.mp3', 'samples/Rwc12/1.mp3', 'samples/Rwc66/2.mp3', 'samples/Rwc40/10.mp3', 'samples/Rwc88/10.mp3', 'samples/Rwc35/4.mp3', 'samples/Rwc20/8.mp3', 'samples/Rwc24/3.mp3', 'samples/Rwc77/9.mp3', 'samples/Rwc76/3.mp3', 'samples/Rwc52/6.mp3', 'samples/Rwc17/2.mp3', 'samples/Rwc11/6.mp3', 'samples/Rwc3/10.mp3', 'samples/Rwc29/9.mp3', 'samples/Rwc97/5.mp3', 'samples/Rwc68/8.mp3', 'samples/Rwc16/7.mp3', 'samples/Rwc63/7.mp3', 'samples/Rwc85/4.mp3', 'samples/Rwc5/5.mp3', 'samples/Rwc50/11.mp3'],

['samples/Rwc8/1.mp3', 'samples/Rwc16/8.mp3', 'samples/Rwc24/4.mp3', 'samples/Rwc77/10.mp3', 'samples/Rwc76/4.mp3', 'samples/Rwc42/6.mp3', 'samples/Rwc97/6.mp3', 'samples/Rwc68/9.mp3', 'samples/Rwc11/7.mp3', 'samples/Rwc29/10.mp3', 'samples/Rwc63/8.mp3', 'samples/Rwc62/2.mp3', 'samples/Rwc52/7.mp3', 'samples/Rwc35/5.mp3', 'samples/Rwc3/11.mp3', 'samples/Rwc66/3.mp3', 'samples/Rwc88/11.mp3', 'samples/Rwc17/3.mp3', 'samples/Rwc20/9.mp3', 'samples/Rwc85/5.mp3', 'samples/Rwc5/6.mp3', 'samples/Rwc50/1.mp3', 'samples/Rwc40/11.mp3', 'samples/Rwc12/2.mp3']]

  songIndex = 0;

  songList =  allSongList[songIndex]

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
  var testname = name +'_test' + String(songIndex + 1);
  $.ajax({
    data: 'nameId=' + testname,
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
    var testname = name +'_test' + String(songIndex + 1);
    ////print(activeSong);
    var r = confirm("Merci d'avoir participé.");
    if (r == true) {
      $.ajax({
        data: { nameId: testname, syntax: syntax, attractive: attractive, activeSong: activeSong },
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
    var testname = name +'_test' + String(songIndex + 1);
    var syntax = syntaxSlider.value().toString();
    var attractive = attractiveSlider.value().toString();
    var activeSong = songList[pageCompt-1];
    ////print(activeSong);


  var r = confirm("Extrait suivant.");
  if (r == true) {
    $.ajax({
      data: { nameId: testname, syntax: syntax, attractive: attractive, activeSong: activeSong },
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
