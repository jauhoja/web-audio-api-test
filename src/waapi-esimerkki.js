// 1. Luodaan uusi audiokonteksti-objekti
const audioCtx = new AudioContext();

// 2. Audiolahteen luominen
const audioElement = document.querySelector('audio');
const sourceNode = audioCtx.createMediaElementSource(audioElement);

// 3. Audiosignaalin voimakkuuden lasku
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;

// 4. Audion suodatus
const filterNode = audioCtx.createBiquadFilter();
filterNode.type = 'lowpass';
filterNode.frequency.value = 1000;

// 5. Solmujen kytkeminen
sourceNode.connect(gainNode);
gainNode.connect(filterNode);
filterNode.connect(audioCtx.destination);