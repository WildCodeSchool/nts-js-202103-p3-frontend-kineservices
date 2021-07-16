/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

export default function DisplayAvatar() {
  const [file, setFile] = React.useState(null);

  const handleChange = function loadFile(event) {
    if (event.target.files.length > 0) {
      const files = URL.createObjectURL(event.target.files[0]);
      setFile(files);
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
            src={file}
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
