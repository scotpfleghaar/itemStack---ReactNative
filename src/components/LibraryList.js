import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, FlatList} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
    static renderItem(library) {
        return <ListItem library={library}/>
    }

    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={LibraryList.renderItem}
                keyExtractor={(library) => String(library.id)}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
};


export default connect(mapStateToProps)(LibraryList);