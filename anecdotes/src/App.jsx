import { useState } from 'react'

const Title = props => <div> <h1>{props.value}</h1> </div>

const Button = (props) => { 
  console.log(props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Anecdote = (props) => {
  console.log(props)
  const { anecdote, votes } = props
  return (
    <div> 
      <p>{anecdote}</p>
      <p>has {votes} vote{votes===1 ? "" : "s"}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const points = Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(points)
  
  const vote = (index) => {
    console.log(votes)
    const copy = [...votes]

    copy[index] += 1

    setVotes(copy)
  }

  const day = "Anecdote of the day"
  const most = "Anecdote with most votes"

  const popular = votes.indexOf(Math.max(...votes))
  

  console.log(selected)
  return (
    <div>
      <Title value={day} />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={() => vote(selected)} text="vote" />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote" />
      <Title value={most} />
      <Anecdote anecdote={anecdotes[popular]} votes={votes[popular]} />

    </div>
  )
}

export default App