import React from "react";
import {
	HeaderButton as RNHeaderButton,
	HeaderButtonProps,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import colors from "../../../constants/colors";


const HeaderButton = (props: HeaderButtonProps) => {
	return (
		<RNHeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={Platform.OS === "android" ? "white" : colors.primary}
		/>
	);
};

export default HeaderButton;