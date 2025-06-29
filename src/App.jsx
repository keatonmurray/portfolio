import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './layout/Layout';
import Home from './pages/Home'

const App = () => {
  useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
}, []);
  return (
    <Routes>
      <Route path="/" element={<Layout><Home/></Layout>}>
      </Route>
    </Routes>
  )
}

export default App
