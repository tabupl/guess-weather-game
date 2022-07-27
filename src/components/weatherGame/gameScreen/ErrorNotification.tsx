import { Button } from 'react-bootstrap'

const ErrorNotification = (): JSX.Element => (
  <div>
    <h4 className='text-center'>Something went wrong, please try playing again.</h4>
    <Button className='d-block mx-auto' onClick={() => document.location.reload()}>
      Play again
    </Button>
  </div>
)

export default ErrorNotification
