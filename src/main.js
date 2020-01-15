
import makeJSON from './makeJSON.js'
const projects_code = document.getElementById('projects.json')

projects_code.innerHTML = `
{
    ${Object.keys(PROJECTS).map(catagory=>{
        const name = catagory;
        const Obj = PROJECTS[catagory];
        const projects = [];
        Object.keys(Obj).forEach(project=>{
            const {source,demo,link}=Obj[project]
            projects.push([project,source,demo,link])
        })
        return TEMPLATE(name,projects)
    })}
}
`

const header = document.getElementById('header');
window.addEventListener('scroll',()=>{
    window.scrollY > 20 ? header.className='small':header.className=''
})
