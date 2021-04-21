import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title == undefined ? "Header Title" : props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        elevation: 5
    },
    title: {
        color: 'white',
        fontSize: 24,
        paddingTop: 30,
    }
});

export default Header;