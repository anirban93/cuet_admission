// function toggleSpecific(elementid,id1) {
//   var node = document.getElementById(elementid);
//   var node1 = document.getElementById(id1);
  
//   if(node.style.visibility == "hidden") {
//     node.style.visibility="visible";
//     node1.style.visibility="hidden";
//   }
//   else {
//     node.style.visibility ="hidden";
//     node1.style.visibility="visible";
//   }

// }


// function update(){
//   $.getJSON('http://localhost/query.php', function(data) {
//   console.log(data);
//   alert(data.data);
//   });
// }


function update1(){
  var n= prompt("Check your eligibility", "Type your number here");
  $.getJSON('http://admissionprocess.dx.am/query1.php?='+n, function(data) {
  console.log(data);
  alert(data.data);
  });
}



if (window.innerWidth && window.innerWidth <= 600){
$(document).ready(function(){
	$('#header ul').addClass('hide');
	})
	function toggleMenu() {
	$('#header ul').toggleClass('hide');
	$('#header.leftButton').toggleClass('pressed');
	}
	
}