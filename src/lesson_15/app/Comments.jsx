import './comments.scss';
import './comment.scss';

import * as React from 'react';

import { CommentsList } from './CommentsList.jsx';
import { CreateCommentSection } from './CreateCommentSection.jsx';

import { HTTPService } from '../../common/scripts/http-service';

const URL = 'https://evening-dawn-11092.herokuapp.com/comments';
export class Comments extends React.Component {
    constructor() {
        super();
        this.httpService = new HTTPService();
        this.onSubmit = this.onSubmit.bind(this);
        this.valueChange = this.valueChange.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.state = {
            comments: [],
        };

        this.fetchData();
    }

    fetchData() {
        this.httpService.get(URL, (comments) => {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.comments = comments;
                return newState;
            });
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.textAreaValue === undefined || this.textAreaValue === '') {
            return;
        }

        const comment = {
            author: 'Jack London',
            text: this.textAreaValue
        }

        this.httpService.post(URL, comment, (comment) => {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.comments.push(comment);
                return newState;
            });
        });
    }

    valueChange(e) {
        this.textAreaValue = e.target.value;
    }

    deleteComment(commentId) {
        this.httpService.delete(URL + '/' + commentId, () => {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                const index = this.findCommentIndexByCommentId(commentId);
                if (index !== -1) {
                    newState.comments.splice(index);
                }

                return newState;
            });
        });
    }

    findCommentIndexByCommentId(commentId) {
        const comment = this.state.comments.find((comment) => {
            return comment.id === commentId;
        });

        return comment !== undefined ? this.state.comments.indexOf(comment) : -1;
    }

    render() {
        return (
            <div className="comments">
                <CommentsList comments={this.state.comments}
                    deleteComment={this.deleteComment} />
                <CreateCommentSection onSubmit={this.onSubmit}
                    onChange={this.valueChange} />
            </div>
        );
    }
}