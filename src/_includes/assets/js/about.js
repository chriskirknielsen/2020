var utilityButtonLink =
	'u-displayInlineFlex u-flex--centerBlock u-paddingInline--half u-fontBold u-c--grey-min u-bg--grey-max h_u-c--grey-min h_u-bg--grey-max u-border u-border--grey-med h_u-border--accent u-border-radius h_u-glowBox--accent h_u-textShadow--currentBg';
// Init rAF
window.requestAnimationFrame =
	window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};

let vhsWrapper = false;
let vhsTapesList = [];
let mousePosition = { x: false, y: false, new: true };

// Handle SVG elements toggle states
document.addEventListener('DOMContentLoaded', function () {
	var aboutActionAttr = 'data-about-action';
	var aboutActions = document.querySelectorAll('[' + aboutActionAttr + ']');

	if (aboutActions) {
		// Replace each text hook with an actionable button
		for (var a = 0; a < aboutActions.length; a++) {
			if (aboutActions[a].closest('svg')) {
				continue;
			} // Only replace text to buttons outside SVGs
			var elementHtml = aboutActions[a].innerHTML;
			var elementHook = aboutActions[a].getAttribute(aboutActionAttr);
			var newElement = '<button class="button--reset u-posRelative ' + utilityButtonLink + '" ' + aboutActionAttr + '="' + elementHook + '">' + elementHtml + '</button>';
			aboutActions[a].outerHTML = newElement;
		}

		// Update the list of elements
		aboutActions = Array.from(document.querySelectorAll('[' + aboutActionAttr + ']'));

		// Process action for each element
		aboutActions.forEach(function (btn) {
			if (btn.getAttribute(aboutActionAttr) === 'hooked-delorean') {
				btn.addEventListener(
					'click',
					function () {
						var deLorean = document.querySelector('.about__delorean');
						deLorean.classList.toggle('about__delorean--with-hook');
					},
					false
				);
			}

			//data-about-action="synth-set-type" aria-pressed="true"
			if (btn.getAttribute(aboutActionAttr) === 'synth-set-type') {
				btn.addEventListener(
					'click',
					function (e) {
						e.preventDefault();

						var currType = document.querySelector('[data-synth-type][aria-pressed="true"]');
						currType.setAttribute('aria-pressed', 'false');
						btn.setAttribute('aria-pressed', 'true');

						return false;
					},
					false
				);
			}
		});
	}

	showInteractiveKeys();
	reLabelKeys();
	showMelodies();

	vhsWrapper = document.querySelector('[data-grid-el="trinket-designs"]');
	vhsTapesList = Array.from(document.querySelectorAll('.about__vhs'));

	vhsWrapper.addEventListener('mouseenter', function (e) {
		const animClass = 'about__shirt--anim';
		const shirt = document.querySelector('.about__shirt');
		if (!shirt) {
			return;
		}

		shirt.classList.add(animClass);
		shirt.addEventListener(
			'animationend',
			function (e) {
				shirt.classList.remove(animClass);
			},
			{ once: true }
		);
	});

	setTimeout(orientVhsTapes, 100);
});

function numClamp(min, num, max) {
	return Math.min(Math.max(num, min), max);
}

function numRemap(n, in_min, in_max, out_min, out_max) {
	return (n - in_min) * ((out_max - out_min) / (in_max - in_min)) + out_min;
}

function getXOffset(el, currentX) {
	let x = 0;

	while (el && !isNaN(el.offsetLeft)) {
		x += el.offsetLeft - el.scrollLeft;
		el = el.offsetParent;
	}

	return currentX - x;
}

// Handle rotation of VHS tapes based on the cursor position
function orientVhsTapes() {
	requestAnimationFrame(orientVhsTapes);

	if (mousePosition.new === false || mousePosition.x === false) {
		return;
	}

	const prop = '--orientation-factor';

	// If the wrapper isn't the context, reset all the tapes
	// if (e.type === 'mouseout') { return vhsTapesList.forEach(vhs => vhs.style.removeProperty(prop)); }

	const cursorXOffset = getXOffset(vhsWrapper, mousePosition.x);
	const vhsWrapperWidth = vhsWrapper.offsetWidth;
	const offsetMargin = Math.round(vhsWrapperWidth / 4);
	const cursorXOffsetClamped = numClamp(offsetMargin * -1, cursorXOffset, vhsWrapperWidth + offsetMargin);

	vhsTapesList.forEach(function (vhs) {
		const vhsWrapperLeftDistance = vhs.offsetLeft;
		const vhsWidth = vhs.offsetWidth;
		const vhsOffsetMin = vhsWrapperLeftDistance - offsetMargin;
		const vhsOffsetMax = vhsWrapperLeftDistance + vhsWidth + offsetMargin;
		const vhsLayerRelativeOffset = numClamp(
			vhsOffsetMin, // Left-most useful position
			cursorXOffsetClamped, // Mouse position within the layer
			vhsOffsetMax // Right-most useful position
		);
		const influence = numRemap(vhsLayerRelativeOffset, vhsOffsetMin, vhsOffsetMax, -1, 1);
		vhs.style.setProperty(prop, influence);
	});
}

// Loosely adapted from https://css-tricks.com/how-to-code-a-playable-synth-keyboard/
const melodies = [
	// Spaces add rhythm to the melody for autoplay
	'D  D  D  A GD  A GD    J  J  J  K GE  A GD'.split(''), // Vader theme
	// 'G  Y   G Y G F Y G   A      G  Y   G Y G F Y G   K'.split(''), // Smeagol theme
	'ASD G D S A   DGH K J G D  FDS'.split(''), // Shire theme
	'F  FFFFF EF     F  FFFFFD SD    F A  AASDF    FFGHU    UUHGH GF'.split(''), // Zelda theme
];
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const octaveOffset = 1;
const keyNoteMap = [
	{ note: 'C', octave: 1, key: 'A', keyAzerty: 'Q' },
	{ note: 'C#', octave: 1, key: 'W', keyAzerty: 'Z' },
	{ note: 'D', octave: 1, key: 'S', keyAzerty: 'S' },
	{ note: 'D#', octave: 1, key: 'E', keyAzerty: 'E' },
	{ note: 'E', octave: 1, key: 'D', keyAzerty: 'D' },
	{ note: 'F', octave: 1, key: 'F', keyAzerty: 'F' },
	{ note: 'F#', octave: 1, key: 'T', keyAzerty: 'T' },
	{ note: 'G', octave: 1, key: 'G', keyAzerty: 'G' },
	{ note: 'G#', octave: 1, key: 'Y', keyAzerty: 'Y' },
	{ note: 'A', octave: 2, key: 'H', keyAzerty: 'H' },
	{ note: 'A#', octave: 2, key: 'U', keyAzerty: 'U' },
	{ note: 'B', octave: 2, key: 'J', keyAzerty: 'J' },
	{ note: 'C', octave: 2, key: 'K', keyAzerty: 'K' },
];

function getAzertyForKey(key) {
	if (key === ' ') {
		return ' ';
	}
	return keyNoteMap.find((keyNote) => keyNote.key === key).keyAzerty;
}

function getHz(note = 'A', octave = 4) {
	const A4 = 440;
	let N = 0;
	switch (note) {
		default:
		case 'A':
			N = 0;
			break;
		case 'A#':
		case 'Bb':
			N = 1;
			break;
		case 'B':
			N = 2;
			break;
		case 'C':
			N = 3;
			break;
		case 'C#':
		case 'Db':
			N = 4;
			break;
		case 'D':
			N = 5;
			break;
		case 'D#':
		case 'Eb':
			N = 6;
			break;
		case 'E':
			N = 7;
			break;
		case 'F':
			N = 8;
			break;
		case 'F#':
		case 'Gb':
			N = 9;
			break;
		case 'G':
			N = 10;
			break;
		case 'G#':
		case 'Ab':
			N = 11;
			break;
	}
	N += 12 * (octave - 4);
	return A4 * Math.pow(2, N / 12);
}

function playKey(key) {
	const type = document.querySelector('[data-synth-type][aria-pressed="true"]').getAttribute('data-synth-type') || 'sinewave';
	const osc = audioContext.createOscillator();
	const noteGainNode = audioContext.createGain();
	noteGainNode.connect(audioContext.destination);

	const zeroGain = 0.00001;
	const maxGain = 0.5;
	const sustainedGain = 0.001;

	noteGainNode.gain.value = zeroGain;

	const setAttack = () => noteGainNode.gain.exponentialRampToValueAtTime(maxGain, audioContext.currentTime + 0.01);
	const setDecay = () => noteGainNode.gain.exponentialRampToValueAtTime(sustainedGain, audioContext.currentTime + 1);
	const setRelease = () => noteGainNode.gain.exponentialRampToValueAtTime(zeroGain, audioContext.currentTime + 2);

	setAttack();
	setDecay();
	setRelease();

	osc.connect(noteGainNode);
	osc.type = type;

	const freq = getHz(key.note, (key.octave || 0) + octaveOffset);

	if (Number.isFinite(freq)) {
		osc.frequency.value = freq;
	}

	key.element.classList.add('pressed');
	pressedNotes.set(key, osc);
	pressedNotes.get(key).start();
}

function stopKey(key) {
	if (!key) {
		return;
	}

	key.element.classList.remove('pressed');
	const osc = pressedNotes.get(key);

	if (osc) {
		setTimeout(() => {
			osc.stop();
		}, 2000);

		pressedNotes.delete(key);
	}
}

const getNoteByKey = (key) => keyNoteMap.find((mapped) => (getKeyboardLayout() === 'AZERTY' ? mapped.keyAzerty : mapped.key) === key) || false;
const getKeyByNoteOctave = (note, octave) => keyNoteMap.find((mapped) => mapped.note === note && mapped.octave === parseInt(octave, 10)) || false;

const pressedNotes = new Map();
let clickedKey = '';

function getKeyboardLayout() {
	const melodyContainer = document.querySelector('[data-about-keyboard-melodies]');
	const keyboardLayout = melodyContainer.getAttribute('data-about-keyboard-melodies') || 'QWERTY';
	return keyboardLayout.toUpperCase();
}

function showInteractiveKeys() {
	const waveSelector = document.querySelector('.about__keyboard-settings');
	if (waveSelector) {
		waveSelector.removeAttribute('hidden');
	}
}

function reLabelKeys() {
	const keys = Array.from(document.querySelectorAll('[data-note]'));
	keys.forEach((key) => {
		const note = key.getAttribute('data-note');
		const octave = parseInt(key.getAttribute('data-octave'), 10);
		const keyNote = getKeyByNoteOctave(note, octave);
		const keyPress = getKeyboardLayout() === 'AZERTY' ? keyNote.keyAzerty : keyNote.key;
		key.innerText = keyPress;
	});
}

function getKeyDataByKeyNote(keyNote) {
	return {
		element: document.querySelector(`[data-note="${keyNote.note}"][data-octave="${keyNote.octave}"]`),
		note: keyNote.note,
		octave: keyNote.octave,
	};
}

let currMelody = false;
let melodySteps = false;
function autoplayMelody(melodyIndex, melodyKeys, button) {
	let step = 0;
	clearInterval(melodySteps);

	// If there is a melody playing, find its play button and set it to off
	if (currMelody !== false) {
		let prevMelodyButton = document.querySelector('.melody-play[aria-pressed="true"]');
		prevMelodyButton.setAttribute('aria-pressed', 'false');
	}

	// If the user click the button again, stop the melody
	if (currMelody === melodyIndex) {
		currMelody = false;
		return;
	}

	button.setAttribute('aria-pressed', 'true');
	currMelody = melodyIndex;
	melodySteps = setInterval(function () {
		const keyToPress = melodyKeys[step];
		// Find the note associated with the keyboard key
		const keyNote = getNoteByKey(keyToPress);
		// If there's no associated key, it's a space we keep for rhythm
		if (keyNote) {
			let key = getKeyDataByKeyNote(keyNote);
			clickedKey = key;
			playKey(key);
			setTimeout(() => stopKey(clickedKey), 100);
		}
		step++;

		if (step >= melodyKeys.length) {
			clearInterval(melodySteps);
			currMelody = false;
			button.setAttribute('aria-pressed', 'false');
		}
	}, 200);
}

function showMelodies() {
	const isAzerty = getKeyboardLayout() === 'AZERTY';
	const melodyContainer = document.querySelector('[data-about-keyboard-melodies]');
	const melodyAutoplayLabel = melodyContainer.getAttribute('data-about-melodies-label');
	melodies.forEach((melody, melodyIndex) => {
		const melodyRhythmedSequence = isAzerty ? melody.map((k) => getAzertyForKey(k)) : melody;
		const br = document.createElement('br');
		const button = document.createElement('button');
		const kbd = document.createElement('kbd');
		const melodySequence = melodyRhythmedSequence.filter((k) => k !== ' ');
		kbd.innerText = melodySequence.join(', ') + '.';
		button.classList.add('button--reset', 'melody-play');
		button.setAttribute('type', 'button');
		button.setAttribute('aria-label', melodyAutoplayLabel + ' #' + (melodyIndex + 1));
		button.setAttribute('aria-pressed', 'false');
		button.setAttribute('data-melody', melodyIndex);
		button.addEventListener('click', function () {
			autoplayMelody(melodyIndex, melodyRhythmedSequence, button);
		});
		melodyContainer.appendChild(br);
		melodyContainer.appendChild(button);
		melodyContainer.appendChild(kbd);
	});
	melodyContainer.hidden = false;
}

function triggerKey(element, note, octave) {
	let key = { element, note, octave };
	clickedKey = key;
	playKey(key);
}

document.addEventListener(
	'mousemove',
	function (e) {
		mousePosition.new = e.clientX !== mousePosition.x || e.clientY !== mousePosition.y;
		mousePosition.x = e.clientX;
		mousePosition.y = e.clientY;
	},
	false
);

document.addEventListener(
	'mousedown',
	function (e) {
		var element = e.target.closest('[data-note]');
		if (!element) {
			return;
		}
		e.preventDefault();
		triggerKey(element, element.getAttribute('data-note'), parseInt(element.getAttribute('data-octave'), 10));
		return false;
	},
	false
);

document.addEventListener(
	'mouseup',
	function () {
		stopKey(clickedKey);
	},
	false
);

document.addEventListener('keydown', function (e) {
	const pressedKey = e.key.toUpperCase();

	// Keyboard shortcuts shouldn't get interrupted
	if (e.altKey || e.metaKey || e.ctrlKey || e.shiftKey) {
		return;
	}

	// If the user has a key focused and pressed either Enter or Space, play the focused note
	if (pressedKey === 'ENTER' || pressedKey === ' ') {
		const element = e.target.closest('[data-note]');
		if (!element) {
			return;
		}
		triggerKey(element, element.getAttribute('data-note'), parseInt(element.getAttribute('data-octave'), 10));
		return;
	}

	// Find the note associated with the keyboard key
	const keyNote = getNoteByKey(pressedKey);
	if (!keyNote) {
		return;
	}
	let key = getKeyDataByKeyNote(keyNote);
	clickedKey = key;
	playKey(key);
});

document.addEventListener(
	'keyup',
	function () {
		stopKey(clickedKey);
	},
	false
);
