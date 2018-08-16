import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from "./common";
import {connect} from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library.item;
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.selectLibrary(id)
                }}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
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