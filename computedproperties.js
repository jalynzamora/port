const hulk = { name: 'Hulk', ['catch' + 'Phase']: 'Hulk Smash!'};
//<< { name: 'Hulk', catchPhase: 'Hulk Smash!' }

const bewitched = true;
const captinBritain = { name: 'Captin Britain', hero: bewitched ? false : true };

captinBritain
//<<{ name: 'Captin Britain', hero: false }

//new Symbol date type
const name = Symbol('name');

const supergirl = { [name]: 'Supergirl' };
supergirl[name];
//<< 'Supergirl'

const realName = Symbol('real name');

supergirl[realName] = 'Kara Danvers';
//<< 'Kara Danvers'

//symbols used for property keys are not limited, can be used by other objects
