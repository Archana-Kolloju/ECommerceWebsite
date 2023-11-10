import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MainDisplay from './components/MainDisplay'
import './App.css'
import Counter from './components/Counter'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainDisplay} />
    </Switch>
  </BrowserRouter>
)

export default App
