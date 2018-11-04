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

    render() {
        return (
        <div className="comments">
            <CommentsList comments = {this.state.comments} />
            <CreateCommentSection onSubmit = {this.onSubmit}
            onChange={this.valueChange}/>
        </div>
        );
    }
}