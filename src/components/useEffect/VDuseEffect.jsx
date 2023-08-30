import React, { useEffect, useRef } from "react";

export default function VDuseEffect() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
