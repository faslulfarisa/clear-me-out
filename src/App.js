import './App.css';
import { Routes, Route} from "react-router-dom";
import LayOut from './LayOut';
import Category from './Routes/Category';
import Home from './Routes/Home';
import Signup from './Routes/Signup';
import Login from './Routes/Login';
import Question from './Routes/Question';
import Ask from './Routes/Ask';
import Post from './Routes/Post';
import Feedback from './Routes/Feedback';
import Answers from './Routes/Answers';
import Rough from './Routes/Rough';


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
        <Routes>
          <Route path="" element={<LayOut/>}>
            <Route path="" element={<Home/>}/>
            <Route path="category/:title" element={<Category/>}/>
            <Route path="sign-up" element={<Signup/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="answers" element={<Answers/>}/>
            <Route path="question" element={<Question/>}/>
            <Route path="ask" element={<Ask/>}/>
            <Route path="post" element={<Post/>}/>
            <Route path="feedback" element={<Feedback/>}/>
            <Route path="rough" element={<Rough/>}/>
          </Route>
         </Routes>
  );
}

export default App;
