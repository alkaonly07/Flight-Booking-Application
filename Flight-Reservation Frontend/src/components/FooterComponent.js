import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div 
              style={{
                position: "fixed",
                left: 0,
                bottom: 0,
                right: 0,
                
              }}>
              <footer className = "footer">
                <span className ="text-muted "> All rights reserved @2022</span>  

              </footer>  
            </div>
        );
    }
}

export default FooterComponent;