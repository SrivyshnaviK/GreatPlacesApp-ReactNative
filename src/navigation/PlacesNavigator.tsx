import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../constants/colors";
import PlacesListScreen, { PlacesListScreenOptions } from "../components/screens/PlacesListScreen";
import PlaceDetailScreen, { PlaceDetailScreenOptions } from "../components/screens/PlaceDetailScreen";
import MapScreen from "../components/screens/MapScreen";
import NewPlaceScreen, { NewPlaceScreenOptions } from "../components/screens/NewPlaceScreen";

const Stack = createStackNavigator();

const PlacesNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: colors.primary,
					},
				}}
			>
				<Stack.Screen
					name="Places"
					component={PlacesListScreen}
					options={PlacesListScreenOptions}
				/>
				<Stack.Screen
					name="PlaceDetail"
					component={PlaceDetailScreen}
					options={PlaceDetailScreenOptions}
				/>
				<Stack.Screen
					name="NewPlace"
					component={NewPlaceScreen}
					options={NewPlaceScreenOptions}
				/>
				<Stack.Screen name="Map" component={MapScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default PlacesNavigator;