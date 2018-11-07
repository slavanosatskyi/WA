import * as React from 'react';
import { Component } from 'react';


export class CommentsList extends React.Component {
    render() {
        const comments = this.props.comments.map((comment, i) => {
            const formatDate = (dateString) => {
                const date = new Date(dateString);
                return date.toLocaleTimeString() + ' ' +
                    date.getDate() + '/' +
                    (date.getMonth() + 1) + '/' +
                    date.getFullYear();
            };

            const deleteComment = () => {
                this.props.deleteComment(comment.id);
            }

            return (
                <li key={i} className="comment" id={"comment" + comment.id}>
                    <div className="comment__text">
                        {comment.text}
                    </div>
                    <div className="comment__footer">
                        <h3 className="comment__author">
                            {comment.author}
                        </h3>
                        <div className="comment__date">
                            {formatDate(comment.date)}
                        </div>
                        <button className="comment__delete" onClick={deleteComment}>Delete</button>
                    </div>
                </li>
            )
        });
        return (
            <ul className="comments__container">
                {comments}
            </ul>
        );
    }
}