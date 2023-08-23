import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  let arrayVotes = new Uint8Array(anecdotes.length);
  const [votes, setVotes] = useState(arrayVotes);
  const [mayor, setMayor] = useState(0);

  const handleVotes = () => {
    let valorMayor = 0;
    const copy = [...votes];
    copy[selected] += 1;
    for (let i = 0; i < copy.length; i++) {
      if (valorMayor < copy[i]) {
        valorMayor = copy[i];
        setMayor(i);
      }
    }
    return setVotes(copy);
  };

  const setAnecdote = () => {
    let anecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(anecdote);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div> has {votes[selected]} votes</div>
      <br />
        <button onClick={setAnecdote}>next anecdote</button>
        <button onClick={handleVotes}>vote</button>
        <h2>Anecdote with most votes</h2>
        {anecdotes[mayor]}
        <div> has {votes[mayor]} votes</div>
      </div>
  )
}

export default App;
