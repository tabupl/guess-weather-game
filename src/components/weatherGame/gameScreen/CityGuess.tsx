import { ChangeEvent, FormEvent, useState, useRef } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

interface CityGuessProps {
  city: string
  isLastGuess: boolean
  onGuess: (guessedValue: number) => void
}

const CityGuess = ({ city, isLastGuess, onGuess }: CityGuessProps): JSX.Element => {
  const [value, setValue] = useState<number | string>('')
  const input = useRef<HTMLInputElement | null>(null)

  if (input?.current) {
    input.current.focus()
  }

  const onTyping = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement
    setValue(Number(element.value))
  }

  const onButtonClick = () => {
    onGuess(Number(value))
    setValue('')
  }

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    onButtonClick()
    return false
  }

  return (
    <div>
      <Card className='w-50 mx-auto'>
        <Card.Body>
          <Card.Title className='text-center'>
            Guess temperature for <b>{city}</b>
          </Card.Title>
          <Form onSubmit={(e) => onFormSubmit(e)}>
            <Form.Control
              ref={input}
              value={value}
              onChange={onTyping}
              type='number'
              placeholder='Temperature'
              className='w-50 mx-auto'
            />
          </Form>
        </Card.Body>
      </Card>
      <Button className='mx-auto d-block mt-4 w-50' onClick={onButtonClick}>
        {isLastGuess ? 'Finish' : 'Guess!'}
      </Button>
    </div>
  )
}

export default CityGuess
