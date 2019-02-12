audio = new AudioContext()

const connectButton = document.querySelector('.connect')
connectButton.addEventListener('click', onClickConnect)

function onClickConnect() {
  beep(100, 520, 200)
  // alert("ERROR: Connection impossible at this time.")
}

function beep(vol, freq, duration) {
  v = audio.createOscillator()
  u = audio.createGain()
  v.connect(u)
  v.frequency.value = freq
  v.type= "square"
  u.connect(audio.destination)
  u.gain.value = vol * 0.01
  v.start(audio.currentTime)
  v.stop(audio.currentTime + duration * 0.001)
}




