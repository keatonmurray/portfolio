import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home/></Layout>}>
      </Route>
    </Routes>
  )
}

export default App
