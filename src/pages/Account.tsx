import { useCallback } from "react";

export default function Account() {
  const handleClick = useCallback(() => {
    alert("hello");
  }, []);

  return (
    <div className="App">
      <h1>account</h1>
      <button onClick={handleClick} type="button">
        submit
      </button>
    </div>
  );
}
