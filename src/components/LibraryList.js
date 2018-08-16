import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
class LibraryList extends Component {
    render() {
        return (
            <Text>Hello!</Text>
        )
    }
}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
};

export default connect(mapStateToProps)(LibraryList);