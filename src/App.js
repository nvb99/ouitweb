import './App.css'
import BannerTop from './components/BannerTop'
import Nav from './components/Nav'
import TextEditor from './components/TextEditor'

const App = () => {
  return (
    <div className="App">
      <div>
        <BannerTop />
        <Nav />
      </div>
      <div className="editor">
        <TextEditor />
      </div>
    </div>
  )
}

export default App