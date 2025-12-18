import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Dimensions } from 'react-native'
const data = require('../../assets/data/products.json')

import ProductList from './ProductList'
var { width, height } = Dimensions.get("window");
const ProductContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data);

        return () => {
            setProducts([])
        }
    }, [])
    return (
        <View>
            <Text>Product Container</Text>
            <View style={{ marginTop: 200 }} >
                <FlatList

                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    numColumns={2}
                    data={products}

                    renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                    keyExtractor={item => item.name}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    listContainer: {
        height: height,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProductContainer;