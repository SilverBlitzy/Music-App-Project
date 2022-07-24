import { Image, StyleSheet, Text, View } from 'react-native';
// import defaultImage from '../../../assets/emptyMusicValue.jpeg';
// import {Feather} from 'react-native-vector-icons'
 import moreMenu from '../../../assets/more.png';

export default function Music(props) {
    return (

        <View style={styles.musicComponent}>

            <View style={styles.musicInfo}>

                <View style={styles.musicImage}/>
                {/* <Image style={styles.musicImage} source={defaultImage}/> */}
                
                <View style={styles.musicText}>
                    <Text style={styles.musicName}>Nome da Música</Text>
                    <Text style={styles.musicArtist}>Artista</Text>
                </View>

                {/* <Feather name="more-horizontal" ></Feather> */}

            </View>

            <View>
                <Image style={styles.moreIcon} source={moreMenu}></Image>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    musicComponent: {
		margin: 10,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},

    musicInfo: {
        flex:1,
        flexDirection: 'row',
        margin: 5,
        marginLeft: 20,
    },

    musicText: {
        // display: 'flex',
		margin: 10,
        marginLeft: 15,
        flexDirection: 'column',    
        
    },

	musicName: {
		fontSize: 14,
		color: 'white', 
	},

	musicArtist: {
		fontSize: 12,
		color: 'white', 
	},

    moreIcon: {
        marginTop: 20,
        marginRight: 20,
        width: 20,
        height: 20,
    },

	musicImage: {
		width: 64.56,
		height: 65,
		borderRadius: 6,
		backgroundColor: 'gray',
	}

});