import React from 'react'
import './App.css';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-2xl font-bold font-mono pl-12'>Runner's Workout</h1>
      <div className="images">
        <div className="image-container">
          <img src="http://i.imgur.com/mOSCZCo.jpg" />
        </div>
        <div className="image-container">
          <img src="http://i.imgur.com/zFYHM67.jpg" />
        </div>
        <div className="image-container">
          <img src="http://i.imgur.com/VMh4FNX.jpg" />
        </div>
      </div>
    </div>


    // <div className=''>
    //  {/* <Navbar /> */}
    // <div className='images-container flex flex-row items-center justify-center m-20 '>

    //   <div className='img-container-1' >
    //     <img className=' ' src="https://thumbs.dreamstime.com/z/strength-weakness-signpost-choice-sign-post-against-blue-sky-84011002.jpg" alt="" />
    //   </div>

    //   <div className='img-container-2'>
    //     <img className='' src="https://thumbs.dreamstime.com/z/strength-weakness-signpost-choice-sign-post-against-blue-sky-84011002.jpg" alt="" />
    //   </div>

    //   <div className='img-container-3'>
    //     <img className=''src="https://thumbs.dreamstime.com/z/strength-weakness-signpost-choice-sign-post-against-blue-sky-84011002.jpg" alt="" />
    //   </div>

    // </div>
    // </div>

  )
}
export default App;