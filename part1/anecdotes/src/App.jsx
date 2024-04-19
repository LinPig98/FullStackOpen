import { useState } from 'react'

const Title = ({text}) => (
  <>
    <h1>{text}</h1>
  </>
)

const Anecdote = (props) => (
  <>
    <p>{props.anecdote}</p>
    <p>{"has " + props.votes + " votes"}</p>
  </>
)

const Button = (props) => (
  <>
    <button onClick={props.handleClick} >{props.text}</button>
  </>
)

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
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  const handleAnecdote = () => (
    setSelected(Math.floor(Math.random() * anecdotes.length))
  )

  const handleVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVote(copyVotes)
  }

const maxVotes = Math.max(...votes);
const bestAnecdote = anecdotes[votes.indexOf(maxVotes)];

  return (
    <div>
      <Title text = "Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={handleVote} text ="Vote" />
      <Button handleClick={handleAnecdote} text = "Next anecdote" />
      <Title text = "Anecdote with the most votes" />
      <Anecdote anecdote={bestAnecdote} votes={maxVotes} />
    </div>
  )
}

export default App
