import React, { Component } from 'react';
import "./About.css";
import img1 from '../assets/image1.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={img1}
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Mahendra Shahi</div>
            <div className="brief_description">
             What's up yall? I am Mahendra Shahi. I am a rising 
             junior studying Computer Science at Johns Hopkins University.
             On campus, I'm involved in Product Management Club, Nepalese Student Associatoon 
             and South Asian club. My favorite things to do in my free time are play soccer, swimming and hangout with 
             my friends.Fun fact about me is I can spin a notebook on my fingers. 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
