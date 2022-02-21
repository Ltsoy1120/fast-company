import React from "react";
import PropTypes from "prop-types";
import {
    getProfessionById,
    getProfessionsLoadingStatus
} from "../../store/professions";
import { useSelector } from "react-redux";

const Profession = ({ id }) => {
    const profession = useSelector(getProfessionById(id));
    const isLoading = useSelector(getProfessionsLoadingStatus());

    return <>{!isLoading ? <div>{profession.name}</div> : "Loading...."}</>;
};
Profession.propTypes = {
    id: PropTypes.string
};
export default Profession;
