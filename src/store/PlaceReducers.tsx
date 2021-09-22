
import { AnyAction } from "redux";
import Place from "../models/Place";
import { ADD_PLACE } from "./PlaceActions";

export type placeState = {
	places: Array<Place>;
};

const initialState: placeState = {
	places: [],
};

export default (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case ADD_PLACE:
			const newPlace = new Place(
				new Date().toString(),
				action.placeData.title,
				action.placeData.image
			);
			return {
				places: state.places.concat(newPlace),
			};
		default:
			return state;
	}
};