const midi = require("jsmidgen");
const fs = require("fs");

module.exports = (data) => {
	let file = new midi.File();
	let track = file.addTrack();
	
	track.instrument(0, 0x13);

	for (let i = 0; i < data.length; i++) {
		track.note(0, data[i] % 128, 64);
	}

	return file;
}
