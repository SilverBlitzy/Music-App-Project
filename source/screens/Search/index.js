import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';
// import { useFonts, Montserrat_400Regular,} from '@expo-google-fonts/montserrat'
// import {Feather} from 'react-native-vector-icons'

import Music from '../../components/music';
import arrow from '../../../assets/arrow.png';

export function Search({ navigation }) {

	return (
		<ScrollView style={styles.pageAppearance}>

            <View style={styles.topContainer}>

				<Image style={styles.arrowIcon} source={arrow}></Image>

                <Text style={styles.searchTop}>Pesquisa</Text>

				<StatusBar 
				  style= "light"
				  backgroundColor= "blue"
				  color = "white"
				/>

            </View>

            <View> 

				<Text style={styles.primerText}>Últimas tocadas</Text>

				<Music></Music>
				<Music></Music>
				<Music></Music>

			</View>

			<View> 

				<Text style={styles.primerText}>Todas</Text>

				<Music></Music>
				<Music></Music>
				<Music></Music>

			</View>

		</ScrollView>
	);
}

const styles = StyleSheet.create({

	pageAppearance: {
		backgroundColor: 'black',
		flex: 1,
	},

	topContainer: {
		width: '100%',
        height: 80,
        backgroundColor: 'blue',

        flex:1,
		flexDirection: 'row',
		marginTop: 20, 
	},

	arrowIcon: {
		margin: 20,
		marginTop: 30,
	},

    searchTop: {
		fontSize: 24, 
		color: 'white', 
		fontWeight: 'bold', 
		margin: 20, 
		marginLeft: 5,
		marginTop: 30,
	},

	primerText: {
		fontSize: 16,
        color: 'white', 
		fontWeight: 'bold', 
		margin: 20,
	},

});
