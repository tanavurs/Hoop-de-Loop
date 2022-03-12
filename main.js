var mouseEvent="empty";
canvas=document.getElementById('my_canvas');
ctx=canvas.getContext("2d");


color="red";
width_line=2;




canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown(e){
    color=document.getElementById("Color").value;
    width_line=document.getElementById("Width").value;
    radius=document.getElementById("Radius").value;
    mouseEvent="mouseDown";
}



canvas.addEventListener("mousemove",my_mousemove);
 
function my_mousemove(e){
  current_mouse_X= e.clientX-canvas.offsetLeft;
  current_mouse_Y= e.clientY-canvas.offsetTop;

  if(mouseEvent=="mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth= width_line;
      ctx.arc(current_mouse_X,current_mouse_Y,radius,0,2*Math.PI);
      ctx.stroke();

  }
}

canvas.addEventListener("mouseup",my_mouseup);
 
function my_mouseup(e){
    mouseEvent="mouseUP";
}


canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseLeave";
}

function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}