const colors = ['pink', 'blue', 'green', 'purple'];
for(let i= 0; i < colors.length; i++){
	console.log(colors[i]);
}
for(let color of colors){
	console.log(color);
}

const newArray = numbers.map(function(number){
	return number * -1;
});
console.log(newArray);