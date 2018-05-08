const superman ={
	name: 'Superman',
	'real name': 'Clark Kent',
	height: 75,
	weight: 235,
	hero: true,
	villain: false,
	allies: ['Batman', 'Supergirl', 'Superboy',],
	fly(){
	return 'Up, up and away!';	
	}
};


superman.name
//<< 'Superman'

superman['name']
//<< 'Superman'

superman["real" + " " + "name"] //the property is built using string concatenation
//<< "Clark Kent"

