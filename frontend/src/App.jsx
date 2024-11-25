import './App.css'
import Header from './components/Header/Header'
import { RouterProvider } from 'react-router-dom'
import router from './router/index'
/* import { loginContext } from './context/login' */
/* Email : {localStorage.getItem("userEmail")} <br></br>
Token : {localStorage.getItem("token")} <br></br>
Role : {localStorage.getItem("role")} <br></br> */

function App() {

/*   const [loginStatus, setloginStatus] = useState(false) */

  return (
    <>

        <RouterProvider router={router}></RouterProvider>

      
    </>
  )
}

export default App;
