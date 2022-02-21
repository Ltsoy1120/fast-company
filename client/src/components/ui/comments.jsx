import React, { useEffect } from "react";
import AddCommentForm from "../common/comments/addCommentForm";
import CommentsList from "../common/comments/commentsList";
import PropTypes from "prop-types";
import { orderBy } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
    createComment,
    getComments,
    getCommentsLoadingStatus,
    loadComments,
    removeComment
} from "../../store/comments";
import { useParams } from "react-router-dom";

const Comments = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadComments(userId));
    }, [userId]);

    const isLoading = useSelector(getCommentsLoadingStatus());
    // const { createComment, removeComment } = useComments();
    const comments = useSelector(getComments());
    const handleSubmit = (data) => {
        dispatch(createComment(data));
    };

    const handleRemoveComment = (id) => {
        dispatch(removeComment(id));
    };

    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);

    return (
        <div className="col-md-8">
            <AddCommentForm onSubmit={handleSubmit} />
            {sortedComments.length > 0 && !isLoading ? (
                <CommentsList
                    comments={sortedComments}
                    onRemove={handleRemoveComment}
                />
            ) : (
                "Loading..."
            )}
        </div>
    );
};
Comments.propTypes = {
    userId: PropTypes.string.isRequired
};
export default Comments;
