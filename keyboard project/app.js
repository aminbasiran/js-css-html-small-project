const whiteArray =['z','x','c','v','b','n','m']
const blackArray =['s','d','g','h','j']

const white = document.querySelectorAll('.key.white')
const black= document.querySelectorAll('.key.black')

 //keypress event
window.addEventListener('keydown',function(e){
  const key = e.key
  const whiteKeys = whiteArray.indexOf(key)
  const blackKeys = blackArray.indexOf(key)
  if(whiteKeys > -1){
    playNote(white[whiteKeys])
  }
  if(blackKeys > -1){
    playNote(black[blackKeys])
  }
})

//click event
const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
  })

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', ()=>{
      key.classList.remove('active')
    })
}

const themeButton = document.querySelector('.btn.dark')

themeButton.addEventListener('click',(key)=>{
  document.body.classList.add('dark')
  
})

const themeButton1 = document.querySelector('.btn.normal')

themeButton1.addEventListener('click',(key)=>{
  document.body.classList.remove('dark')
})
