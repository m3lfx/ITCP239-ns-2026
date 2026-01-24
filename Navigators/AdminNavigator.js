import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Orders from "../Screeens/Admin/Orders";
import Products from "../Screeens/Admin/Products";
import ProductForm from "../Screeens/Admin/ProductForm";
import Categories from "../Screeens/Admin/Categories"

const Stack = createStackNavigator();

const AdminNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Products"
                component={Products}
                options={{
                    title: "Products"
                }}
            />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Orders" component={Orders} />
            <Stack.Screen name="ProductForm" component={ProductForm} />
        </Stack.Navigator>
    )
}
export default AdminNavigator