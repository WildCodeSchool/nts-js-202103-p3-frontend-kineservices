/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import './SignUp.css';

export default function DisplayAvatar({ setFile }) {
  const [picture, setPicture] = useState(null);
  const handleChange = function loadFile(event) {
    if (event.target.files.length > 0) {
      const files = event.target.files[0];
      setFile(files);
      setPicture(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div
      className="container-avatar"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <input
        type="file"
        onChange={handleChange}
        id="upload"
        accept="image/*"
        style={{ display: 'none' }}
      />
      <label htmlFor="upload">
        <IconButton
          color="red"
          aria-label="upload picture"
          component="span"
          name="upload"
        >
          <Avatar
            id="avatar"
            name="upload"
            src={picture}
            style={{
              width: '160px',
              height: '160px',
            }}
          />
        </IconButton>
      </label>
      <label htmlFor="avatar" />
    </div>
  );
}
