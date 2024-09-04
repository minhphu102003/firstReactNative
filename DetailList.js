import { FlatList, View, Text } from "react-native";


const data = [
    {id: 1, title: 'Một'},
    {id: 2, title: 'Hai'},
    {id: 3, title: 'Ba'},
    {id: 4, title: 'Bốn'},
    {id: 5, title: 'Năm'},
]

const renderItem = ({item}) => (
    <View style={{padding: 20}}>
        <Text>{item.title}</Text>
    </View>
)

const DetailList = () => {
    return (
        <FlatList 
            data={data}
            renderItem={renderItem}
        >

        </FlatList>
    )
}

export default DetailList;