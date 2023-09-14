import {useDispatch, useSelector} from "react-redux";
import {loadNeighboursByBorder, selectNeighbours} from "./detailsSlice";
import {useEffect} from "react";

export const useNeighbours = (borders = []) => {
    const dispatch = useDispatch();
    const neighbours = useSelector(selectNeighbours);
    useEffect(() => {
        if(borders.length) {
            dispatch(loadNeighboursByBorder(borders));
        }
    }, [borders, dispatch]);
    return neighbours;
}