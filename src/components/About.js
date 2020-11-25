import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {  Button, Card, } from 'react-bootstrap'




class About extends Component {
    render() {
        return (
            <div className="about">
            
            
<Card style={{border: 'none'}}>
                       <Card.Img src="https://images.unsplash.com/photo-1533630757306-cbadb934bcb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"/>
                       <Card.Body>
                           <Card.Title>
                                WELCOME TO ALCafè
                           </Card.Title>
                           <Card.Text>
                                FRESH ROASTED COFFEE EVERYDAY
                           </Card.Text>
                           <Button variant ="dark"> SHOP NOW! </Button>
                       </Card.Body>
      
                    </Card>


             





                      
          </div>
        )
    }
}

export default About

