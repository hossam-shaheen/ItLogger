import React from 'react';

export default function TechsItems({ tech, deleteTech }) {
  return (
    <li className="collection-item" key={tech.id}>
      <div>
        {tech.firstName} {tech.lastName}
        <a
          href="#!"
          onClick={(e) => {
            deleteTech(tech.id);
            e.preventDefault();
          }}
          className="secondary-content"
        >
          <i className="material-icons">delete</i>
        </a>
      </div>
    </li>
  );
}
