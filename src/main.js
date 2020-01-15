
import makeJSON from './makeJSON.js'
const projects_code = document.getElementById('projects.json')

projects_code.innerHTML = makeJSON()

const header = document.getElementById('header');

window.addEventListener('scroll',()=>{
    const scrollHeight = window.scrollY
    scrollY > 50 ? header.className='small':header.className='big';
    console.log(header.className);

})
