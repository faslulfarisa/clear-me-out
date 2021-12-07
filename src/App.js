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
import LayOut from './LayOut';
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
            <Route path="login" element={<Login/>}/>
            <Route path="question" element={<Question/>}/>
            <Route path="ask" element={<Ask/>}/>
            <Route path="post" element={<Post/>}/>
            <Route path="feedback" element={<Feedback/>}/>
            <Route path="sign-up" element={<Signup/>}/>
            <Route path="rough" element={<Rough/>}/>

          </Route>
         </Routes>
  );
}

export default App;
