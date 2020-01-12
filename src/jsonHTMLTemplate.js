
// This is  so the first element doesn't get a space
let i = 0

const ProjectsTemp =([name,source,demo,link])=>{
    i++
    return (
    `
    ${i>1?"<br> &nbsp; &nbsp; &nbsp;":''}
    
    <span class="green">"${name}"</span>:{
    <br>
    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;    
    <span class="green">"SourceCode"</span>: <span class="purple"><a href="${source}">"Read Me"</a></span>,
    <br>
    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 
    <span class="green">"${demo}"</span>: <span class="purple"><a href="${link}">"Try Me"</a></span>,
    <br>
    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 
    }
    `
)}


const TEMPLATE = (catagory,projects) =>{
    i = 0;
    return(
    `<br>
        &nbsp;     
        <span class="green">"${catagory}"</span>:{
            <br>
            &nbsp; &nbsp; &nbsp;   
                ${projects.map(project=>{
                    return ProjectsTemp(project)
                })}
            <br>
        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
        }
    <br>
    &nbsp; &nbsp; &nbsp;&nbsp;
    <br>
    &nbsp;` )}
    
    export default TEMPLATE
