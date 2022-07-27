import Content from './components/layout/Content/Content'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import WeatherGame from './components/weatherGame/WeatherGame'
import './app.scss'

function App(): JSX.Element {
  return (
    <div className='d-flex flex-column vh-100'>
      <Header title='Guess temperature game' />
      <Content>
        <WeatherGame />
      </Content>
      <Footer text='By Adam Waśniewski 2022' />
    </div>
  )
}

export default App
