import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(50);
  
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 0.1
      ) {
        setCount((count) => count + 50);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [count]);

  const element = [];
  for (let i = 0; i < count; i++) {
    element.push(i);
  }
  
  return (
    <>
      {element.map((ele) => (
        <div key={ele + 1}>{ele + 1}</div>
      ))}
    </>
  );
}

export default App;
