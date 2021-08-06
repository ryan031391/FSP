import React from 'react'
import { Link } from 'react-router-dom'
import { remove } from '../../util/session_api_util'
import SearchContainer from '../search/search_container'
import DisplayReservation from './display'

const Welcome = ({currentUser, reservations, logout, openModal, deleteRental, fetchRental}) => {
    

    const not_logged_in = () => (
        <div id="Welcome" className="session-form">
            <div className="session-form-left">
                <img src={window.backgroundUrl} />
            </div>
            <div className="session-form-right">
                <h1>Welcome to AirCnC</h1>
                <button id="welcomebutton" onClick={() => openModal('login')}>&nbsp;Login&nbsp;</button>
                <br/><br/>
                <button id="welcomebutton" onClick={() => openModal('signup')}>SignUp</button>
            </div>
        </div>
    );

    const logged_in = () => (
        <div id="welcomepage" >
            <div >
                <img className="house-top-img" src={window.backgroundUrl} />
            </div>
            <h1>Hi, {currentUser.username}</h1>
            {/* <button onClick={logout}>Log out</button> */}
            <div className="welcomepage-content">
                <div className="reservation-list">
                    <DisplayReservation rentals={reservations} deleteRental={deleteRental} fetchRental={fetchRental}/>
                </div>
                {/* {displayHouses()} */}
                {/* <h2>Your upcoming events: {currentUser.rentals.foreach(ele => {return ele})}</h2> */}
                <div className="search">
                    <SearchContainer />
                </div>
            </div>
            <div className="sticky-image-wrapper">
                <img className="house-bot-img" src={window.backgroundUrl} />
            </div>
        </div>
    );

    return currentUser ? logged_in() : not_logged_in();
    // return not_logged_in();
}

export default Welcome;