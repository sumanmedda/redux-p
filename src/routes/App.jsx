import { useSelector } from 'react-redux'
import Container from '../components/Container'
import Controls from '../components/Controls'
import DisplayCounter from '../components/DisplayCounter'
import Header from '../components/Header'
import './App.css'
import { Outlet } from 'react-router-dom'
import PrivacyMessage from '../components/PrivacyMessage'

function App() {

  const privacyValue = useSelector(state => state.privacy)
  
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header />
        <Outlet />
        <div className="col-lg-6 mx-auto">
          {privacyValue ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls />
        </div>
      </Container>
    </center>
  )
}

export default App
