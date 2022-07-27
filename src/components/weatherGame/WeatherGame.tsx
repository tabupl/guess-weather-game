import { useState } from 'react'
import StartScreen from './StartScreen'
import GameScreen from './gameScreen/GameScreen'
import GameFinish from './GameFinish'
import AnswersDisplay from './gameScreen/AnswersDisplay'

enum GameState {
  START = 'START',
  IN_PROGRESS = 'IN_PROGRESS',
  FINISH = 'FINISH',
}

export interface Guess {
  guessedTemperature: number
  realTemperature: number
  city: string
}

export const AMOUNT_OF_GUESSES = 5
export const SCORE_TO_WIN = 3

const WeatherGame = (): JSX.Element => {
  const [gameState, setGameState] = useState<GameState>(GameState.START)
  const [guesses, setGuesses] = useState<Guess[]>([])

  const onGameStart = () => setGameState(GameState.IN_PROGRESS)
  const onGameFinish = () => setGameState(GameState.FINISH)

  const onPlayAgain = () => {
    setGuesses([])
    setGameState(GameState.IN_PROGRESS)
  }

  const renderGameState = () => {
    switch (gameState) {
      case GameState.START:
        return <StartScreen onGameStart={onGameStart} />
      case GameState.IN_PROGRESS:
        return <GameScreen guesses={guesses} setGuesses={setGuesses} onGameFinish={onGameFinish} />
      case GameState.FINISH:
        return (
          <>
            <GameFinish guesses={guesses} onPlayAgain={onPlayAgain} />
            <AnswersDisplay guesses={guesses} />
          </>
        )
      default:
        return null
    }
  }
  return <div className='w-75 mx-auto pt-5'>{renderGameState()}</div>
}

export default WeatherGame
