import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker,faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";

class ContactUs extends Component {
    render() {
        return (
            <div class="containerCU" style={{height:'30rem'}}>
                <div class="content">
                <div class="left-side">
                    <div class="address details">
                    {/*<i class="fas fa-map-marker-alt"></i>*/}
                    <FontAwesomeIcon icon={faMapMarker} />
                    <div class="topic">Address</div>
                    <div class="text-one">Surkhet, NP12</div>
                    <div class="text-two">Birendranagar 06</div>
                    </div>
                    <div class="phone details">
                    {/*<i class="fas fa-phone-alt"></i>*/}
                    <FontAwesomeIcon icon={faPhone} />
                    <div class="topic">Phone</div>
                    <div class="text-one">+91 9898935647</div>
                    <div class="text-two">+91 8634345678</div>
                    </div>
                    <div class="email details">
                    {/*<i class="fas fa-envelope"></i>*/}
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div class="topic">Email</div>
                    <div class="text-one">bookwithus@gmail.com</div>
                    <div class="text-two">info.bookwithus@gmail.com</div>
                    </div>
                </div>
                <div class="right-side">
                    <div class="topic-text">We would love to hear from you !</div>
                    <p>If you have any work related queries,contact us through these details provided below or send us a message from here.We will be honoured to help you.</p>
                <form action="#">
                    <div class="input-box">
                    <input type="text" placeholder="Enter your name"></input>
                    </div>
                    <div class="input-box">
                    <input type="text" placeholder="Enter your email"></input>
                    </div>
                    <div class="input-box message-box">
                    <input type="text" placeholder="Enter your message"></input>
                    </div>
                    {/* <div class="button">
                    <input href="/home" type="button" value="Send Now" ></input>
                    </div> */}
                    <a href="/home" className="btn btn-info"><strong>Send Now</strong></a>
                
                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;