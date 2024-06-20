// Component always capital letter
function Project(props) {
    return <div className="project">
      {/* 
        From Image picsum similar to lorem ipsum
         */}
      <img src="https://picsum.photos/200/200" alt="Random" />
      <h2>{props.title} (Rs. {props.price})</h2>
      <p>Date: {props.date}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates aut debitis doloremque quos consequuntur enim a at harum sint, vitae, aspernatur facilis, ratione dolorem dignissimos. Accusamus quibusdam vitae cumque.
      </p>
    </div>
  
  }

  export default Project;