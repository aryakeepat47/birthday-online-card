var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()

    
    {
       fabric.Image.fromURL("Birthdayimage.jpg", function(Img) {    
     
       player_object = Img;
     
       player_object.scaleToWidth(1500);
       player_object.scaleToHeight(800);
       player_object.set({
        top:0,
        left:0
        });
      
        canvas.add(player_object);    
      
        });
     }	
	


function playSong(){
	x.play()
}
