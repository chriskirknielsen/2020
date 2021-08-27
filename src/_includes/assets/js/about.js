var utilityButtonLink = 'u-displayInlineFlex u-flex--centerBlock u-paddingInline--half u-fontBold u-c--grey-min u-bg--grey-max h_u-c--grey-min h_u-bg--grey-max u-border u-border--grey-med h_u-border--accent u-border-radius h_u-glowBox--accent h_u-textShadow--currentBg';
// Init rAF
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(callback){ window.setTimeout(callback, 1000 / 60); };

// Handle SVG elements toggle states
document.addEventListener('DOMContentLoaded', function() {
    var aboutActionAttr = 'data-about-action';
    var aboutActions = document.querySelectorAll('['+aboutActionAttr+']');
    if (!aboutActions) { return; }

    // Replace each text hook with an actionable button
    for (var a = 0; a < aboutActions.length; a++) {
        if (aboutActions[a].closest('svg')) { continue; } // Only replace text to buttons outside SVGs
        var elementHtml = aboutActions[a].innerHTML;
        var elementHook = aboutActions[a].getAttribute(aboutActionAttr);
        var newElement = '<button class="button--reset '+utilityButtonLink+'" '+aboutActionAttr+'="'+elementHook+'">'+elementHtml+'</button>';
        aboutActions[a].outerHTML = newElement;
    }

    // Update the list of elements
    aboutActions = Array.from(document.querySelectorAll('['+aboutActionAttr+']'));

    // Process action for each element
    aboutActions.forEach(function (btn) {
        if (btn.getAttribute(aboutActionAttr) === 'hooked-delorean') {    
            btn.addEventListener('click', function() {
                var deLorean = document.querySelector('.about__delorean');
                deLorean.classList.toggle('about__delorean--with-hook');
            }, false);
        }

        //data-about-action="synth-set-type" aria-pressed="true"
        if (btn.getAttribute(aboutActionAttr) === 'synth-set-type') {
            btn.addEventListener('click', function(e) {
                e.preventDefault();

                var currType = document.querySelector('[data-synth-type][aria-pressed="true"]');
                currType.setAttribute('aria-pressed', 'false');
                btn.setAttribute('aria-pressed', 'true');

                return false;
            }, false);
        }
    });

    reLabelKeys();
    showMelodies();
});

// Loosely adapted from https://css-tricks.com/how-to-code-a-playable-synth-keyboard/
const melodies = [
    ['D', 'D', 'D', 'A', 'G', 'D', 'A', 'G', 'D', 'J', 'J', 'J', 'K', 'G', 'E', 'A', 'G', 'D'], // Vader theme
    ['G', 'Y', 'G', 'Y', 'G', 'F', 'Y', 'G', 'A', 'G', 'Y', 'G', 'Y', 'G', 'F', 'Y', 'G', 'K'], // Smeagol theme
    ['A', 'S', 'D', 'G', 'D', 'S', 'A', 'D', 'G', 'H', 'K', 'J', 'G', 'D', 'F', 'D', 'S'] // Shire theme
];
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const octaveOffset = 1;
const keyNoteMap = [
    { note: 'C',  octave: 1, key: 'A', keyAzerty: 'Q' },
    { note: 'C#', octave: 1, key: 'W', keyAzerty: 'Z' },
    { note: 'D',  octave: 1, key: 'S', keyAzerty: 'S' },
    { note: 'D#', octave: 1, key: 'E', keyAzerty: 'E' },
    { note: 'E',  octave: 1, key: 'D', keyAzerty: 'D' },
    { note: 'F',  octave: 1, key: 'F', keyAzerty: 'F' },
    { note: 'F#', octave: 1, key: 'T', keyAzerty: 'T' },
    { note: 'G',  octave: 1, key: 'G', keyAzerty: 'G' },
    { note: 'G#', octave: 1, key: 'Y', keyAzerty: 'Y' },
    { note: 'A',  octave: 2, key: 'H', keyAzerty: 'H' },
    { note: 'A#', octave: 2, key: 'U', keyAzerty: 'U' },
    { note: 'B',  octave: 2, key: 'J', keyAzerty: 'J' },
    { note: 'C',  octave: 2, key: 'K', keyAzerty: 'K' }
];

function getAzertyForKey(key) {
    return keyNoteMap.find(keyNote => keyNote.key === key).keyAzerty;
}

function getHz(note = 'A', octave = 4) {
    const A4 = 440;
    let N = 0;
    switch (note) {
        default:
        case "A":
            N = 0;
            break;
        case "A#":
        case "Bb":
            N = 1;
            break;
        case "B":
            N = 2;
            break;
        case "C":
            N = 3;
            break;
        case "C#":
        case "Db":
            N = 4;
            break;
        case "D":
            N = 5;
            break;
        case "D#":
        case "Eb":
            N = 6;
            break;
        case "E":
            N = 7;
            break;
        case "F":
            N = 8;
            break;
        case "F#":
        case "Gb":
            N = 9;
            break;
        case "G":
            N = 10;
            break;
        case "G#":
        case "Ab":
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

    const setAttack = () =>
        noteGainNode.gain.exponentialRampToValueAtTime(
            maxGain,
            audioContext.currentTime + 0.01
        );
    const setDecay = () =>
        noteGainNode.gain.exponentialRampToValueAtTime(
            sustainedGain,
            audioContext.currentTime + 1
        );
    const setRelease = () =>
        noteGainNode.gain.exponentialRampToValueAtTime(
            zeroGain,
            audioContext.currentTime + 2
        );

    setAttack();
    setDecay();
    setRelease();

    osc.connect(noteGainNode);
    osc.type = type;

    const freq = getHz(key.note, (key.octave || 0) + octaveOffset);

    if (Number.isFinite(freq)) {
        osc.frequency.value = freq;
    }

    key.element.classList.add("pressed");
    pressedNotes.set(key, osc);
    pressedNotes.get(key).start();
}

function stopKey(key) {
    if (!key) { return; }

    key.element.classList.remove("pressed");
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

function reLabelKeys() {
    const keys = Array.from(document.querySelectorAll('[data-note]'));
    keys.forEach(key => {
        const note = key.getAttribute('data-note');
        const octave = parseInt(key.getAttribute('data-octave'), 10);
        const keyNote = getKeyByNoteOctave(note, octave);
        const keyPress = (getKeyboardLayout() === 'AZERTY') ? keyNote.keyAzerty : keyNote.key;
        key.innerText = keyPress;
    });
}

function showMelodies() {
    const isAzerty = (getKeyboardLayout() === 'AZERTY');
    const melodyContainer = document.querySelector('[data-about-keyboard-melodies]');
    melodies.forEach(melody => {
        const br = document.createElement('br');
        const kbd = document.createElement('kbd');
        const melodySequence = (isAzerty) ? (melody.map(k => getAzertyForKey(k))) : melody;
        kbd.innerText = melodySequence.join(', ') + '.';
        melodyContainer.appendChild(br);
        melodyContainer.appendChild(kbd);
    });
    melodyContainer.hidden = false;
}

function triggerKey(element, note, octave) {
    let key = { element, note, octave };
    clickedKey = key;
    playKey(key);
}

document.addEventListener('mousedown', function(e) {
    var element = e.target.closest('[data-note]');
    if (!element) { return; }
    e.preventDefault();
    triggerKey(
        element,
        element.getAttribute('data-note'),
        parseInt(element.getAttribute('data-octave'), 10)
    );
    return false;
}, false);

document.addEventListener('mouseup', function() {
    stopKey(clickedKey);
}, false);

document.addEventListener('keydown', function(e) {
    const pressedKey = e.key.toUpperCase();
    
    // Keyboard shortcuts shouldn't get interrupted
    if (e.altKey || e.metaKey || e.ctrlKey || e.shiftKey) { return; }
    
    // If the user has a key focused and pressed either Enter or Space, play the focused note
    if (pressedKey === 'ENTER' || pressedKey === ' ') {
        const element = e.target.closest('[data-note]');
        if (!element) { return; }
        triggerKey(
            element,
            element.getAttribute('data-note'),
            parseInt(element.getAttribute('data-octave'), 10)
        );
        return;
    }
    
    // Find the note associated with the keyboard key
    const keyNote = getNoteByKey(pressedKey);
    if (!keyNote) { return; }
    let key = {
        element: document.querySelector(`[data-note="${ keyNote.note }"][data-octave="${ keyNote.octave }"]`),
        note: keyNote.note,
        octave: keyNote.octave
    };
    clickedKey = key;
    playKey(key);
});

document.addEventListener('keyup', function() {
    stopKey(clickedKey);
}, false);