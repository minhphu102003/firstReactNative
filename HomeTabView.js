import * as React from 'react';
import { Dimensions } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const firstRoute = ()=>(
    <View style={[styles.scene,{backgroundColor: 'red'}]}>
        <Text>First Route</Text>
    </View>
)

const secondRoute = ()=>(
    <View style={[styles.scene,{backgroundColor: 'blue'}]}>
        <Text>Second Route</Text>
    </View>
)

const initialLayout = {
    width: Dimensions.get('window').width
}

const HomeTabView = () =>{
    const [index,setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key:'first',title: 'First'},
        {key:'second', title: 'Second'}
    ])
    const renderScene = SceneMap({
        first: firstRoute,
        second: secondRoute
    })
    return(
        <TabView 
            navigationState={{index,routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        >
        </TabView>    
    )
}

const styles = StyleSheet.create({
    scene :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },  
});

export default HomeTabView;
