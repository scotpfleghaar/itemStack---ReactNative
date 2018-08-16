import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {CardSection} from "./common";
import {connect} from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
    render() {
        const {titleStyle} = styles;


        return (
            <CardSection>
                <Text style={titleStyle}>{this.props.library.item.title}</Text>
            </CardSection>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
});


export default connect(null, actions)(ListItem);