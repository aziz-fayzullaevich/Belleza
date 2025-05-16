import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import routes from './router/router';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {
            routes.map(({ path, element }, i) => (
              <Route key={i} path={path} element={element} />
            ))
          }
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;