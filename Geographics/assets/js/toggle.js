



var lines = false;
$("#grid").mousemove(function( event ) {
  var leftPer = (event.clientX - $("#grid").offset().left)/$("#grid").width();
  var topPer = (event.clientY - $("#grid").offset().top)/$("#grid").height();
  console.log(leftPer);
  console.log(topPer);
  console.log("--------");
  colStr = "";
  rowStr = "";
  for(i=0;i<5;i++){
    nearX = 1 - (Math.abs(leftPer - (0.1+0.2*i)));
    colStr += " " +  (1 + Math.pow(nearX*5,2))  + "fr";
  }
  for(j=0;j<5;j++){
    nearY = 1 - (Math.abs(topPer - (0.1+0.2*j)));
    rowStr += " " + (1 + Math.pow(nearY*5,2)) + "fr";
  }
  console.log(colStr);
  console.log(rowStr);
  $("#grid").css('grid-template-rows', rowStr);
  $("#grid").css('grid-template-columns', colStr);
});
$("#grid").mouseout(function() {
  $("#grid").css('grid-template-rows', "1fr 1fr 1fr 1fr 1fr");
  $("#grid").css('grid-template-columns', "1fr 1fr 1fr 1fr 1fr");
});
$("#toggle" ).click(function() {
  if(lines){
    lines=false;
    $("#grid").css('grid-gap', "0");
  }else{
    lines=true;
    $("#grid").css('grid-gap', "1px");
  }
});

