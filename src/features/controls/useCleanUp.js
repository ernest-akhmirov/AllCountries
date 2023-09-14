import {useDispatch} from "react-redux";
import {clearControls} from "./controlsSlice";

export const useCleanUp = () => {
    const dispath = useDispatch();

    const cleanUp = () => dispath(clearControls());

    return () => cleanUp;
}