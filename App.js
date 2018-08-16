import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import {Card, CardSection, Header} from "./src/components/common";
import LibraryList from './src/components/LibraryList';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{flex: 1}}>
                    <Header/>
                    <LibraryList/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({});
