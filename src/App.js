import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './components/Root';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Videos from './components/Videos';
import VideoDetail from './components/VideoDetail';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <NotFound />,
    children:[
      {index: true, element: <Home />},
      {path:'/videos', element: <Videos />},
      {path:'/videos/:videoId', element: <VideoDetail />},
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
