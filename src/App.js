import './App.css';
import { Routes, Route} from "react-router-dom";
import Category from './Routes/Category';
import Home from './Routes/Home';
import Login from './Routes/Login';
import Question from './Routes/Question';
import Ask from './Routes/Ask';
import Post from './Routes/Post';
import Feedback from './Routes/Feedback';
import Signup from './Routes/Signup';


// Home
// CategoryPage
// QuestionPage
// Ask Questions
//PostAnswer
// Feedback
// Login
// SignUpPage

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header</h1>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="category" element={<Category/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="question" element={<Question/>}/>
          <Route path="ask" element={<Ask/>}/>
          <Route path="post" element={<Post/>}/>
          <Route path="feedback" element={<Feedback/>}/>
          <Route path="signup" element={<Signup/>}/>
         </Routes>
      </header>
     
    </div>
  );
}

export default App;
