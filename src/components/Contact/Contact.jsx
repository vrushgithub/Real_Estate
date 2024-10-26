import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contact</span>
                    <span className="primaryText">Easy to Contact Us</span>
                    <span className="secondaryText">We always ready to help by providing the best service
                        <br/>
                        belive a good place to live can make your life better
                    </span>
                    <div className="flexStart contactModes">
                        {/* First Row */}
                        {/* (1)Call Mode */}
                        <div className="flexColStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Call</span>
                                        <span>+91 20 0315 1833</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>

                              {/* (2)Chat Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Chat</span>
                                        <span>+91 20 0333 1518</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                        </div>
                           
                           {/* Second Row */}
                           {/* Video Mode(3) */}
                        <div className="flexColStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Video Call</span>
                                        <span>+91 20 0333 1518</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>
                            </div>

                                {/*(4) Message Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Message</span>
                                        <span>+91 20 0315 1833</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>
                        </div>

                       
                    </div>
                </div>
                       {/* right side */}
                    <div className="c-right">
                        <div className="image-container">
                            <img src="./contact.jpg" alt="" />
                        </div>
                    </div>
            </div>
        </section>
    )
}
export default Contact