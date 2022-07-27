import { useState, useEffect } from 'react'
import { availableCities } from '../../../api/weatherApi/cities'
import { getCity } from '../../../api/weatherApi/weather-api'
import AnswersDisplay from './AnswersDisplay'
import CityGuess from './CityGuess'
import { getCelciusFromKelvin, getScore } from '../helpers'
import { AMOUNT_OF_GUESSES, Guess } from '../WeatherGame'

interface GameScreenProps {
  guesses: Guess[]
  setGuesses: (guesses: Array<Guess>) => void
  onGameFinish: () => void
}

const GameScreen = ({ guesses, setGuesses, onGameFinish }: GameScreenProps): JSX.Element => {
  const [selectedCities, setSelectedCities] = useState<Array<string>>([])
  const [currentCityIdx, setCurrentCityIdx] = useState<number>(0)

  const score = getScore(guesses)

  useEffect(() => {
    const getRandomCityIndex = () => Math.floor(Math.random() * availableCities.length)
    const rolledCityIndices: number[] = []

    for (let i = 0; i < AMOUNT_OF_GUESSES; i++) {
      let randomCityIndex = getRandomCityIndex()
      while (rolledCityIndices.includes(randomCityIndex)) {
        randomCityIndex = getRandomCityIndex()
      }
      rolledCityIndices.push(randomCityIndex)
    }
    setSelectedCities(rolledCityIndices.map((i) => availableCities[i]))
  }, [])

  const onGuess = (guessedValue: number) => {
    getCity(selectedCities[currentCityIdx])
      .then((res) => {
        setGuesses(
          guesses.concat([
            {
              city: selectedCities[currentCityIdx],
              guessedTemperature: guessedValue,
              realTemperature: Math.round(getCelciusFromKelvin(res.main.temp) * 10) / 10,
            },
          ]),
        )
      })
      .then(() => {
        if (currentCityIdx < AMOUNT_OF_GUESSES - 1) {
          setCurrentCityIdx(currentCityIdx + 1)
        } else {
          onGameFinish()
        }
      })
  }

  return (
    <div>
      <h4 className='text-center'>Score: {score}</h4>
      <CityGuess
        city={selectedCities[currentCityIdx]}
        onGuess={onGuess}
        isLastGuess={currentCityIdx === AMOUNT_OF_GUESSES - 1}
      />
      <AnswersDisplay guesses={guesses} />
    </div>
  )
}

export default GameScreen
