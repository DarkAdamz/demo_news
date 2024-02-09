import 'bootstrap/dist/css/bootstrap.min.css';
import BootNavbar from './layout/bootNavbar';
import NewsBoard from './assets/NewsBoard';
function App() {

  return (
    <>
    <BootNavbar/>
    <NewsBoard/>
    <div className='bg-danger text-light text-center p-5 mt-2'>Copywright &copy;2024 NewsDemo </div>
    </>
  )
}

export default App
