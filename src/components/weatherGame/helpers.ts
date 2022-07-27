import { Guess } from './WeatherGame'

const CELCIUS_ABSOLUTE_ZERO = -272.15

export const getCelciusFromKelvin = (temperature: number): number =>
  temperature + CELCIUS_ABSOLUTE_ZERO

export const isGuessCorrect = (guess: Guess): boolean =>
  guess.guessedTemperature <= guess.realTemperature + 5 &&
  guess.guessedTemperature >= guess.realTemperature - 5

export const getScore = (guesses: Guess[]): number => {
  let scoreCounter = 0
  for (const guess of guesses) {
    if (isGuessCorrect(guess)) {
      scoreCounter++
    }
  }
  return scoreCounter
}
