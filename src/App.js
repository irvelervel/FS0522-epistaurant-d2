import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import ReservationForm from './components/ReservationForm'

function App() {
  return (
    <div>
      {/* a prop is an additional piece of info you add on the
      INVOCATION of a component */}
      <CustomNavbar additionalBrand="Best Italian Restaurant" />
      {/* so far we still don't know how to create a new "page"
      for our restaurant website, so let's put the reservation
      section here, temporarily! */}
      <ReservationForm />
      <Home />
    </div>
  )
}

export default App
