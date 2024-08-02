
function displayPics(){
  var photos = document.getElementById('image_quiz');
  var liens = photos.getElementsByTagName('a');
  var big_photo = document.getElementById('images');
  var titre_photo = document.getElementById('toto').getElementsByTagName('dt')[0];
  var posPhoto=0;
  var next = document.getElementById('imageBoutton');

  for (var i = 0 ; i < liens.length ; i++) {
    next.onclick = function() {
      big_photo.src = liens[posPhoto+1].href; 
      big_photo.alt = liens[posPhoto+1].title; 
      titre_photo.firstChild.nodeValue = liens[posPhoto+1].title;
	  posPhoto++;
      };
    liens[i].onclick = function() {
      big_photo.src = this.href;
      big_photo.alt = this.title; 
      titre_photo.firstChild.nodeValue = this.title;
	  posPhoto=this.id;
	  return false;
      };
  } 
}
window.onload = displayPics;