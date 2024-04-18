import { useState } from 'react'

const Title = (props) =>(
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  if(props.name == "positive"){
    return <tr><td>{props.name}</td><td>{props.number+'%'}</td></tr>
  }
  return <tr><td>{props.name}</td><td>{props.number}</td></tr>
}

const Statistics = ({reviews}) =>{

  if(reviews.good == 0 && reviews.neutral == 0 && reviews.bad == 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  const total = reviews.good + reviews.neutral + reviews.bad
  const average = (reviews.good * 1 + reviews.bad * -1) / total
  const positive = (reviews.good * 100)/total

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine name="good" number={reviews.good} />
          <StatisticLine name="neutral" number={reviews.neutral} />
          <StatisticLine name="bad" number={reviews.bad} />
          <StatisticLine name="all" number={total} />
          <StatisticLine name="average" number={average} />
          <StatisticLine name="positive" number={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  
  const [reviews, setReview] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleGood = () => {
    setReview({...reviews, good: reviews.good+1}) 
  }

  const handleNeutral = () => {
    setReview({...reviews, neutral: reviews.neutral+1})
  }

  const handleBad = () => {
    setReview({...reviews, bad: reviews.bad+1})
  }

  return (
    <div>
      <Title text="Give feedback" />
      <Button handleClick={() => handleGood()} text="Good" />
      <Button handleClick={() => handleNeutral()} text="Neutral" />
      <Button handleClick={() => handleBad()} text="Bad" />
      <Title text="Statistics" />
      <Statistics reviews={reviews} />
    </div>
  )
}

export default App
