/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

function DocumentationItem({ id, title }) {
  const [newTitle, setNewTitle] = useState(title);

  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost8000/documentation/${id}`, { content: newTitle })
      .then((response) => alert(`Updated ${JSON.stringify(response)}`))
      .catch((error) => console.error(error.message));
  };
  return (
    <div>
      <span>Identifiant: {id}</span>
      <br />
      <form onSubmit={handleCreate}>
        <textarea
          type="text"
          value={title}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <br />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}

export default DocumentationItem;
