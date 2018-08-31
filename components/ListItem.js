import React, { Component } from 'react';
import { LayoutAnimation, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardItem>
                    <Text style={{ flex: 1 }}>
                        {library.description}
                    </Text>
                </CardItem>
            );
        }
    }       

    render() {
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardItem style={styles.itemStyle}>
                        <Text>{title}</Text>
                    </CardItem>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    itemStyle: {
        paddingLeft: 15,
        fontSize: 18
    }
};

const mapStateToProps = (state, ownProps) => { 
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
 };
export default connect(mapStateToProps, actions)(ListItem);
