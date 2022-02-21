import { useDispatch, useSelector } from "react-redux";
import { getDataStatus, loadUsers } from "../../../store/users";
import PropTypes from "prop-types";
import { useEffect } from "react";

const UsersLoader = ({ children }) => {
    const dataStatus = useSelector(getDataStatus());
    const dispatch = useDispatch();

    useEffect(() => {
        if (!dataStatus) dispatch(loadUsers());
    }, []);
    if (!dataStatus) return "Loading";
    return children;
};

UsersLoader.propTypes = {
    cildren: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default UsersLoader;
