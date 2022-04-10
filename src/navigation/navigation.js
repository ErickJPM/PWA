import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from '../components/Main'; 
import InsertarFeeling from '../components/newFeeling'; 
function Navigation(){
    return render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/feeling" element={<InsertarFeeling />}></Route>
            
          </Routes>
        </BrowserRouter>,
        document.getElementById("root")
      );
}

export default Navigation;