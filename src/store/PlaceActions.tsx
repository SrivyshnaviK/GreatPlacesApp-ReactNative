import * as FileSystem from "expo-file-system";
import { fetchPlaces, insertPlace } from "../helper/db";

export type placeActionType = {
  type: string;
  placeData: { id: string; title: string; image: string };
};

export type resultType = {
  insertId: number;
  rows: Object;
  rowsAffected: number;
};

export type placesResultType = {
  insertId: any;
  rows: { _array: Array<placeType>; length: number };
  rowsAffected: number;
};
export type placeType = Array<{
  address: string;
  id: number;
  imageUri: string;
  lat: number;
  lng: number;
  title: string;
}>;

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";

export const addPlace = async (title: string, image: string) => {
  return async (
    dispatch: (arg0: {
      type: string;
      placeData: {
        id: string;
        title: string;
        image: string | null;
        address: string;
      };
    }) => void
  ) => {
    const fileName = image.split("/").pop();
    let newPath = "";
    newPath = FileSystem.documentDirectory
      ? FileSystem.documentDirectory + fileName
      : "";
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult: any = await insertPlace(
        title,
        newPath,
        "Dummy Address",
        15.3,
        16.3
      );
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId.toString(),
          title: title,
          image: newPath,
          address: "Dummy"
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

export const loadPlaces = () => {
  return async (
    dispatch: (arg0: {
      type: string;
      places: placesResultType["rows"]["_array"];
    }) => void
  ) => {
    try {
      const dbPlacesResult: any = await fetchPlaces();
      console.log(dbPlacesResult);
      dispatch({
        type: SET_PLACES,
        places: [dbPlacesResult.rows._array[0]],
      });
    } catch (err) {
      throw err;
    }
  };
};
