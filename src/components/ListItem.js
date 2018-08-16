import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {CardSection} from "./common";
import {connect} from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription = () => {
        const {description} = this.props.library.item;
        if (this.props.isExpanded) {
            return (
                <CardSection>
                    <Text style={{backgroundColor: '#fff'}}>{description}</Text>
                </CardSection>
            )
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

const mapStateToProps = (state, ownProps) => {
    return {
        isExpanded: state.selectedLibraryId === ownProps.library.item.id
    }
};


export default connect(mapStateToProps, actions)(ListItem);