import React from 'react';
const Checkbox = () => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        className="mr-2"
      />
      <label className="form-check-label" className="mb-2">
        Remember me
      </label>
    </div>
  );
};

export default Checkbox;
