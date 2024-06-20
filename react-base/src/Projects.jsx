import Project from './Project'

let heading = "My Projects"

function Projects() {
    return <div>
        <h1>{heading}</h1>
        <hr />
        <Project title="Git" price="1000" date="2024" />
        <Project title="React" price="2500" date="2024" />
        <Project title="JavaScript" price="3000" date="2024" />
        <Project title="Node" price="2000" date="2024" />
        <Project title="Tailwind" price="1500" date="2024" />
    </div>
}

export default Projects;