import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

// class CardComp extends Component {
//     state = {  }
//     render() { 
//         return (
//             <Card>
//             <Card.Header>Quote</Card.Header>
//             <Card.Body>
//             <blockquote className="blockquote mb-0">
//             <p>
//                 {' '}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.{' '}
//             </p>
//             <footer className="blockquote-footer">
//                 Someone famous in <cite title="Source Title">Source Title</cite>
//             </footer>
//             </blockquote>
//         </Card.Body>
//         </Card>
//         );
//     }
// }
 
// export default CardComp;

class CardComp extends Component {
    state = {  }
    render() { 
        return (
            <Card>
                <div className="row">
                    <div className="col">
                    <Card.Header>Manage Page Components</Card.Header>
                    <Card.Body>
                        <div className="row">
                            <div className="col">
                                <p>All Components</p><br /><p>Dashboard</p>
                            </div>
                            <div className="col">
                                <p>Drag and drop components to this section.</p>
                                <div></div>
                            </div>
                        </div>
                    </Card.Body>
                    </div>
                    <div className="col">
                    <Card.Header>Select Page Layout</Card.Header>
                    <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.{' '}
                    </p>
                    <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                    </blockquote>
                    </Card.Body>
                    </div>
                </div>
            {/* <Card.Header>Quote</Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
            <p>
                {' '}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.{' '}
            </p>
            <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
            </blockquote>
        </Card.Body> */}
        </Card>
        );
    }
}
 
export default CardComp;