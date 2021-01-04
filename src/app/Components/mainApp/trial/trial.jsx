import React, { Component } from 'react';
import "./trial.scss";

// class Trial extends Component {
//     state = {  }
//     render() { 
//         return (
//             <React.Component>
//             <div className="trialone">
//                 <p>This is a trial to see if font colour turns red.</p>
//             </div>
//             <div className="trialtwo">
//                 <p>This is a trial to see if font colour turns green.</p>
//             </div>
//             </React.Component>
//         );
//     }
// }
 
// export default Trial;

class Trial extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <div className="trialone">
                <p>This is a trial to see if font colour turns red.</p>
            </div>
            <div>
                <p>This is a trial to see if font colour turns green.</p>
            </div>
            </React.Fragment>
        );
    }
}
 
export default Trial;