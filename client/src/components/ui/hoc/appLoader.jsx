import { useDispatch, useSelector } from "react-redux";
import {
    getIsLoggedIn,
    getUsersLoadingStatus,
    loadUsers
} from "../../../store/users";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { loadQualities } from "../../../store/qualities";
import { loadProfessions } from "../../../store/professions";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersLoadingStatus = useSelector(getUsersLoadingStatus());

    useEffect(() => {
        dispatch(loadQualities());
        dispatch(loadProfessions());
        if (isLoggedIn) {
            dispatch(loadUsers());
        }
    }, [isLoggedIn]);

    if (usersLoadingStatus) return "Loading";
    return children;
};

AppLoader.propTypes = {
    cildren: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default AppLoader;
