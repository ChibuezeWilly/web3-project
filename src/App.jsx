import "./styles.css";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import MainPage from '../src/Layouts/MainPage'
import QuestPage from '../src/Pages/QuestPage'
import Whitepaper from '../src/Pages/WhitePaper'
import Community from '../src/Pages/Community';
import '../src/styles.css'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainPage />}>
			<Route index element={<QuestPage />} />
			<Route path="/whitepaper" index element={<Whitepaper />} />
			<Route path="/community" index element={<Community />} />
		</Route>
	)
);
const App = () => {
   return <RouterProvider  router={router}/>
}

export default App
