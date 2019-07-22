import { AuthConsumer } from '../AuthContext';
import React from 'react';


class Footer extends React.Component {


    render() {
        let props = this.props;
        let auth = this.context;
        console.log(auth);

        return (
            <div>
                <p>ok</p>
            </div>
        );
    }
}
Footer.contextType = AuthConsumer;

export default Footer;