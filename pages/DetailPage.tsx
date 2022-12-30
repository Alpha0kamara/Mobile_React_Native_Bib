import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Linking, Pressable, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button, Card, Paragraph } from 'react-native-paper';

const Detail = ({ route }: any) => {
  const navigation : any = useNavigation();
 
  return (

    <View style={styles.DetailContainer} >
      <ScrollView>
      <Pressable onPress={()=> navigation.navigate('Home')}><Text style={{marginTop:25}}><AntDesign name="arrowleft" size={24}/></Text></Pressable>
      <Card style={{marginTop:40, height:650}}>
        <View style={styles.DetailContent}>
        <Card.Title title={route.params.book.title}   />
    <Card.Content>
      <Paragraph>Subtitle : {route.params.book.subtitle}</Paragraph>
      <Paragraph>Isbn13 : {route.params.book.isbn13}</Paragraph>
      <Paragraph>Price : {route.params.book.price}</Paragraph>
    </Card.Content>
    <Image style={{ width: 350, height: 400, alignItems: "center", margin: 22, marginTop: 1 }} source={{ uri: route.params.book.image }}  />
    <Button onPress={() => Linking.openURL(`${route.params.book.url}`)} style={{backgroundColor:"black"}}> 
  Press for the <AntDesign name="link" size={20} color="white"/> of this book.
</Button>
        </View>
  </Card>
      
</ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  DetailContainer : {
    marginTop:25,
    padding: 20
    
  },
  Text:{
    textAlign:"center",
    fontSize:15,
    marginTop:10
  },
  DetailContent:{
    margin:40,
    alignItems: "center",
    justifyContent:"center"

  },
  
});




export default Detail;