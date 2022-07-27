import { Button } from 'react-bootstrap'
import { AMOUNT_OF_GUESSES, SCORE_TO_WIN } from './WeatherGame'

interface StartScreenProps {
  onGameStart: () => void
}

const StartScreen = ({ onGameStart }: StartScreenProps): JSX.Element => {
  return (
    <div className='container m-0 mx-auto w-100'>
      <div className='row'>
        <div className='mx-auto col-md-6 col-12'>
          <h3 className='align-center'>Welcome to guess temperature game!</h3>
          <p className='text-justify'>
            The rules are simple. We randomly select 5 cities around the globe and you have to guess
            the temperature in them in &#8451;. If your guess is within {AMOUNT_OF_GUESSES}&#8451;
            from the actual temperature, your guess is concidered correct and if you guessed{' '}
            {SCORE_TO_WIN} cities correctly, you win. Have fun!
          </p>
          <Button className='mx-auto d-block mt-2' onClick={onGameStart}>
            Start the game
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StartScreen
