const scribble = require('scribbletune');

let c = scribble.clip({
	notes: ['c4']
});

scribble.midi(c);
