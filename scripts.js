$(document).ready(function(){

	//alert("YEAH BOOOIII");

	GetText();
	GetHTML();
	GetValue();
	GetAttribute();
	SetText();
	SetHTML();
	SetValue();
	SetAttribute();

});


function GetText() {
	$('#get_text').click(function(){
    alert($('p').text());
  });
}

function GetHTML() {
  $('#get_html').click(function(){
    alert($('p').html());
  });
}

function GetValue() {
  $('#get_val').click(function(){
    alert($('#form').val());
  });
}

function GetAttribute() {
  $('#get_attr').click(function(){
    alert($('#form').attr('type'));
  });
}

function SetText() {
  $('#set_text').click(function(){
    $('#hidden_text').text('BOOOIII');
  });
}

function SetHTML() {
  $('#set_html').click(function(){
    $('#hidden_boi').html('<img src="boi.jpg" height="130" width="200">');
  });
}

function SetValue() {
  $('#set_val').click(function(){
    $('#form').val('Mickey Mouse BOOOIII');
  });
}