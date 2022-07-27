import { Button } from 'react-bootstrap'
import { getScore, isGuessCorrect } from './helpers'
import { Guess, SCORE_TO_WIN, AMOUNT_OF_GUESSES } from './WeatherGame'

interface GameFinishProps {
  guesses: Guess[]
  onPlayAgain: () => void
}

const GameFinish = ({ guesses, onPlayAgain }: GameFinishProps): JSX.Element => {
  const score = getScore(guesses)

  const isGameWon = score >= SCORE_TO_WIN

  return (
    <>
      <div className={`text-center ${isGameWon ? 'text-success' : 'text-danger'}`}>
        <h2>{isGameWon ? 'You win!' : 'You lose :('}</h2>
        <h3 className='text-center'>
          Your score is {score}/{AMOUNT_OF_GUESSES}
        </h3>
      </div>
      <Button className='w-25 mt-2 d-block mx-auto' onClick={onPlayAgain}>
        Play again
      </Button>
    </>
  )
}

export default GameFinish
