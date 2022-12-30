import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import { Book } from "../books";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Card, Button } from "react-native-paper";

interface FavProps {
  favorite: Book[];
  setFavorite: (favorite: Book[]) => void;
}
const Favorite = ({ favorite, setFavorite }: FavProps) => {
  const navigation: any = useNavigation();
  const storeData = async () => {
    await AsyncStorage.setItem("favorite", JSON.stringify(favorite));
  };

  const getData = async () => {
    const value: string | null = await AsyncStorage.getItem("favorite");
    if (value !== null) {
      let x: Book[] = JSON.parse(value);
      setFavorite(x);
    } else {
      alert("No Data found");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    storeData();
  }, [favorite]);

  return (
    <View>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {favorite.map((book, key) => {
            return (
              <View style={styles.booksContainer} key={book.url}>
                <Pressable
                  onPress={() => navigation.navigate("Detail", { book: book })}
                >
                  <Card>
                    <Card.Title  title={book.title} style={{flex:1}}/>
                    <Card.Content>
                      <Image
                        style={{
                          width: 100,
                          height: 130,
                          alignItems: "center",
                          margin: 22,
                          marginTop: 1,
                        }}
                        source={{ uri: book.image }}
                      />
                    </Card.Content>

                    <Button
                      onPress={() => {
                        setFavorite(
                          favorite.filter((item) => item.title !== book.title)
                        );
                        Alert.alert("Deleted from your favorite");
                      }}
                      style={{
                        borderColor:"black",
                        borderWidth:2,
                        width:150,
                        marginTop:0,
                        alignSelf:"center",               
                      }}
                    >
                      Delete
                      <MaterialIcons name="delete" size={16} color="black" /> 
                    </Button>
                  </Card>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  booksContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 150,
    height: 260,
    padding: 5,
    margin: 20,
  },
});
export default Favorite;
