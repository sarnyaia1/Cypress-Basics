import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input id='text' type='text' value={text} onChange={(e) => setText(e.toSring)} />
        <button type="submit">Submit</button>
      </form>
      {submitted ? <h1 id="submitted">Form submitted!</h1> : null}
    </div>
  );
}

export default App;
