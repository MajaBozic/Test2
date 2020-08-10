let dinos = [
   {
       id: 0,
       name: 'Scipionyx',
       img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
       cena: 221
   },
   {
       id: 1,
       name: 'Becklespinax',
       img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
       cena: 275
   },
   {
       id: 2,
       name: 'Sciurumimus',
       img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
       cena: 341
   },
   {
       id: 3,
       name: 'Hypsilophodon',
       img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
       cena: 189
   },
   {
       id: 4,
       name: 'Dacentrurus',
       img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
       cena: 315
   },
   {
       id: 5,
       name: 'Iguanodon',
       img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
       cena: 374
   },
   {
       id: 6,
       name: 'Asylosaurus',
       img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
       cena: 301
   },
   {
       id: 7,
       name: 'Efraasia',
       img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
       cena: 199
   },
   {
       id: 8,
       name: 'Cryptosaurus',
       img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
       cena: 218
   }
]

const naruceno = []
let count = 0
const kupac = document.getElementById('kupac')
const inputValue = document.getElementsByName('cena')
const selectDino = document.getElementById('select-dino')
const Scipionyx  = document.getElementById('0') 
const Becklespinax = document.getElementById('1')
const Sciurumimus = document.getElementById('2')
const Hypsilophodon = document.getElementById('3')
const submitBtn = document.getElementById('submit')
const itemCont = document.getElementById('item-container')
const delBtn = document.selectElementByClassName('delete')
const ispisiSvePor = document.getElementById('btn-all')
const napomena = document.getElementsByName('napomena')

submitBtn.addEventListener('click', () => {
   if (!validInput()) {
      if ((selectDino.value == '' && kupac.value =='' || kupac.value.length < 4))
         const greska = document.createElement('div')
      greska.innerHTML = `
          <p>1. Поља не смеју бити празна</p>
          <p>2. Унос ѕа купца 'дужина мора бити најманје 4 слова</p>
      `
      itemCont.appendChild(greska)

      setTimeout(() => {
         greska.remove()
      }, 3000)

      return
   }
   else if (napomena.value =='') {
      const greska = document.createElement('div')
      greska.innerHTML = `Напомена: / `
   } else {
      itemCont.push({ /*dinos[i]..?*/
         name: inputName.value,
         id: inputId.value,
         img: inputImg.value,
         value: inputValue.value,
         currency: "RSD",
      })
   }
   
   console.log(itemCont[naruceno.length - 1])
   addElementToDOM(naruceno) /*???*/

   count++
},

ispisiSvePor.addEventListener('click', () => {
   naruceno.innerHTML = itemCount
}),

delBtn.addEventListener('click', () => {
   this.remove()
   count--
}))