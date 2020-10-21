import React from 'react';

import {Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col} from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        
        <div id='functionalComponent'>
            <h3>Functional Component</h3>
            <p>Functional Componenets are the primary tool in React to build a small, modular piece of your page</p>
            <div className="main">
                <div className="mainDiv">
                <dl>
                   <dt>Can use state</dt>
                   <dd>With the 'useState' hook, functional components can now both render a display to the page and update thhe information to be shown</dd> 
                   <dt>No 'this' keyword</dt>
                   <dd>Older class components use 'this', functional componenets have no 'this' object</dd>
                   <dt>Can use effects</dt>
                   <dd>With the 'useEffect' hook, functional componenets can perform side effect with any props or state changes</dd>
                   <dt>return()</dt>
                   <dd>Must return a single element, but this element may have nested elements inside.</dd>
                </dl>
            <h2>Functional Syntax versus Arrow Function</h2>
            <hr></hr>
            <h2>Challenge</h2>
            <Row>
                <Col md="6">
                    <HelloWorld />
                </Col>
                <Col md='6'>
                    <Helloworld2 />
                </Col>
            </Row>

            </div>
         </div>
        </div>
    );
}

export default FunctionalComponentDemo

const HelloWorld = () => {
    return (
        <div>
            
            <Card>
                <CardImg top width="100%" src="https://media.9news.com/assets/KUSA/images/8d158d3c-e6e7-463a-a09d-3f2f5c8fe32b/8d158d3c-e6e7-463a-a09d-3f2f5c8fe32b_750x422.jpg" alt="orange sunset over denver skyline" />
                <CardBody>
                    <CardTitle>Denver will be home soon</CardTitle>
                    <CardText>Countless reasons to live in Denver for a while after Indy.</CardText>
                    <Button>Builtin allows you to connect to tech jobs in denver</Button>
                </CardBody>
            </Card>
        </div>

    )
}

const Helloworld2 = function () {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/en/f/f1/Sacramento_Skyline_at_Night.jpg" alt="gorgeous view of the sacramento skyline" />
                <CardBody>
                    <CardTitle>Sacramento not too shabby</CardTitle>
                    <CardText>Apparently a very 'afforadable' city in cali</CardText>
                    <Button>Jobs in Sacramento</Button>
                </CardBody>
            </Card>
        </div>
    )
}



