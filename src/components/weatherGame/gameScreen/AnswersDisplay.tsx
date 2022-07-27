import { Card } from 'react-bootstrap'
import { Guess } from '../WeatherGame'
import { isGuessCorrect } from '../helpers'

interface AnswersDisplayProps {
  guesses: Guess[]
}

const AnswersDisplay = ({ guesses }: AnswersDisplayProps): JSX.Element => (
  <div className='container mt-4 w-100'>
    <div className='row justify-content-between'>
      {guesses.map((guess) => (
        <Card
          className={`col-md-2 col-sm-12 text-white my-2 ${
            isGuessCorrect(guess) ? 'bg-success' : 'bg-danger'
          }`}
          key={`${guess.city}-${guess.guessedTemperature}`}
        >
          <Card.Title>
            <h4 className='text-center'>{guess.city}</h4>
          </Card.Title>
          <Card.Body>
            <p>Your guess: {guess.guessedTemperature}&#8451;</p>
            <p>Real temperature: {guess.realTemperature}&#8451;</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  </div>
)

export default AnswersDisplay
