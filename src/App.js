import React, { useEffect, useState } from 'react';


function App() {
  const [appState, setAppState] = useState({
    loading: false,
    value: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:7071/api/message`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        setAppState({ loading: false, value: value.text });
      });
  }, [setAppState]);
  return (
    <div>{appState.value}</div>
  );
}

export default App;
