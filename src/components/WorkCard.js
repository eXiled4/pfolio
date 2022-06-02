import "./WorkCard.css";
import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="reactrailsproj" />
    <h4 className="project-title">{props.title}</h4>
    <div className="project-details">
        <p>{props.text}</p>
            <div className="project-btns">
              <a href="https://github.com/eXiled4" target="_blank" rel="noreferrer">
                <button className="btn">View</button>
                </a>
                <a href="https://github.com/eXiled4" target="_blank" rel="noreferrer">
                <button className="btn">Source</button>
                </a>
            </div>
    </div>
</div>
  )
}

export default WorkCard