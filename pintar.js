
function Pintar(col)
{
	document.bgColor =col;
}


var btnSaludar = document.getElementById('btnSaludar')


btnSaludar.addEventListener('onMouseOut',function(){
	console.log(Pintar('#FFFFFF'));
});

btnSaludar.addEventListener('onMouseOver',function(){
	console.log(Pintar('#ff0000'));
});
