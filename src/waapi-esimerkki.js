// 1. Luodaan uusi audiokonteksti-objekti
const audioCtx = new AudioContext();

document.getElementById('button').addEventListener('click', () => {

  // 2. Audiolahteen luominen
  const sourceNode = audioCtx.createOscillator();
  sourceNode.type = 'square';
  sourceNode.frequency.value = 440;

  // 3. Audiosignaalin voimakkuuden lasku
  const gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.65;

  // 4. Audion suodatus
  const filterNode = audioCtx.createBiquadFilter();
  filterNode.type = 'lowpass';
  filterNode.Q.value = 10; // Suotimen resonanssi
  filterNode.frequency.setValueAtTime(1000, audioCtx.currentTime);
  filterNode.frequency.exponentialRampToValueAtTime(10, audioCtx.currentTime + 1);


  // 5. Solmujen kytkeminen
  sourceNode.connect(gainNode);
  gainNode.connect(filterNode);
  filterNode.connect(audioCtx.destination);

// 6. Signaalin toisto
  sourceNode.start();
  setTimeout(() => {
    sourceNode.stop();
  }, 1000);
});
