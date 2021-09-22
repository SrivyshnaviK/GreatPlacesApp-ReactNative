import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title: string, image: string) => {
	return async (dispatch:any) => {
		const fileName = image.split('/').pop();
		console.log("File Name:",fileName);
		
		const newPath = FileSystem.documentDirectory! + fileName;
		console.log(newPath);
		
	
		try {
		  await FileSystem.moveAsync({
			from: image,
			to: newPath
		  });
		} catch (err) {
		  console.log(err);
		  throw err;
		}
	
		dispatch({ type: ADD_PLACE, placeData: { title: title, image: newPath } });
	  };
};