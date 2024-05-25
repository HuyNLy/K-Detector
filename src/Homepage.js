import React, { useState } from 'react';
import './Homepage.css'; 
import { useNavigate } from 'react-router-dom';
import IMG from './img/img.js';


const Homepage = (props) => {
    const navigate = useNavigate();
    const goToProfile = () => {
        navigate('/Main'); // Navigate to Main page
    };
    
    const [showModal, setShowModal] = useState(null);

    const openModal = (modalType) => {
        setShowModal(modalType);
    };

    const closeModal = () => {
        setShowModal(null);
    };

    return (
        <div className="bg" style={{ backgroundImage: `url(${IMG.techbg})`}}>
            <div className="myPage">
                <div>
                    <h2 className="title">K-Detector</h2>
                    <img src={IMG.figure} alt="NO IMAGE" width={70} height={70} />
                </div>

                <div className="container">
                    <h2 onClick={() => openModal('about')}>About</h2>
                    <h2 onClick={() => openModal('notice')}>Notice</h2>
                    <h2 onClick={goToProfile}>Start</h2> 
                    
                    
                </div>

                {/* Modals */}
                {showModal === 'notice' && (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content">
                            <h3>Notice</h3>
                            <p>Date: dd/mm/yy <br/>  <br/>Dear,</p>
                            <p>
                                Welcome on board! We're thrilled that you've joined our team at ████████ corporation. Today is your first day. As you step into our state-of-the-art facility, you can't help but feel a sense of awe and excitement.  However, there's one crucial rule: do not open any <span>mysterious black documents </span> that might find their way into your folder. <span>DO NOT OPEN IT!!!!</span>
                                <br/><br/>[ROT13- Phevbfvgl xvyyrq gur png! ]<br/><br/>
                                Dismissed,<br/>
                                <br/>Dr.D
                                </p>

                        </div>
                    </div>
                )}

                {showModal === 'about' && (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content" style={{ display:'flex'  ,alignItems: 'center'}} >
                            <h1>About</h1>
                            <p>In this game, you'll be tasked with creating characters based on descriptions provided in a folder bar. 
                                Carefully select each feature to match the given description. But be cautious, you can only make three mistakes.
                                 Each incorrect selection brings you closer to game over. Good luck, and may your intuition guide you in uncovering the secrets of ████████.
                                 <br/><br/> ദ്ദി(˵•̀ ᴗ -˵)✧  </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Homepage;
