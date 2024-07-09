import { useState } from 'react'

const Title = props => <div> <h1>{props.value}</h1> </div>

const StatisticLine = props => {
  console.log(props)
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  if(props.all > 0) {
    return (
      <div>   
        <table>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positive} />
        </table>
      </div>
    )
  } else {
    return (
      <div>   
        No feedback given
      </div>
    )
  }
}

const Button = (props) => { 
  console.log(props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = "give feedback"
  const subtitle = "statistics"

  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * (-1))/all || 0
  const positive = (good/all) * 100 || 0

  return (
    <div>
      <Title value={title} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Title value={subtitle} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive + " %"} />
    </div>
  )
}

export default App