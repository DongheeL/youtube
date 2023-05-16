import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound';
import Videos from './components/Videos';
import VideoDetail from './components/VideoDetail';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <NotFound />,
    children:[
      {index: true, element: <Videos />}, // 핫트렌드 영상들
      {path:'/videos', element: <Videos />},  // 핫트렌드 영상들
      {path:'/videos/:keyword', element: <Videos />},  //검색한 영상들
      {path:'/videos/watch/:videoId', element: <VideoDetail />},  //비디오 재생화면
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
