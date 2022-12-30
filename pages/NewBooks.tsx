import { View, Text, Image, StyleSheet, ScrollView, Pressable, Alert} from "react-native";
import { Book } from "../books";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Card, Button  } from "react-native-paper";
interface NewProps {
    favorite: Book[],
    setFavorite: (favorite: Book[]) => void
}


const NewBooks = ({ favorite, setFavorite }: NewProps) => {
    const [books, setBooks] = useState<Book[]>([])
    useEffect(() => {
        const apiCallNewBooks1 = async () => {
            const data = await fetch(`https://api.itbook.store/1.0/new`);
            const res = await data.json();
            const x: Book[] = await res.books;
            setBooks(x)
        }
        apiCallNewBooks1()
    }, [])

    const navigation: any = useNavigation();
    return (
        <View>
            <ScrollView>
                <View  style={{  display: "flex",
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        }}>
                {
                    books.map(book => {
                        return <View style={styles.booksContainer} key={book.title}>
                            <Pressable onPress={(() => navigation.navigate("Detail", { book: book }))}>
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
                      setFavorite([...favorite, book]);
                      Alert.alert(" Added to your favorite");
                    }}
                    style={{
                        borderColor:"black",
                        borderWidth:2,
                        width:150,
                        marginTop:0,
                        alignSelf:"center",               
                      }}
                    >
                       Add to your favorite
                      <MaterialIcons name="add-box" size={16} color="black"/> 
                    </Button>
                  </Card></Pressable>
                        </View>
                    })
                }
                </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    booksContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: 150,
        height: 260,
        padding: 5,
        margin: 20,
        
    }

});
export default NewBooks;