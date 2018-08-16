import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from "./common";
import {connect} from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
    renderDescription = () => {
        const {id, description} = this.props.library.item;
        const shouldExpand = String(id) === String(this.props.selectedLibraryId);
        if (shouldExpand) {
            return (
                <Text>{description}</Text>
            )
        } else {

        }
    };

    render() {
        const {titleStyle} = styles;
        const {title, id} = this.props.library.item;
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.selectLibrary(id)
                }}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
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

const mapStateToProps = (state) => {
    return {
        selectedLibraryId: state.selectedLibraryId
    }
};


export default connect(mapStateToProps, actions)(ListItem);