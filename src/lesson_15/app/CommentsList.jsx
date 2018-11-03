import * as React from 'react';
import { Component } from 'react';

import { HTTPService } from '../../common/scripts/http-service';

const URL = 'https://evening-dawn-11092.herokuapp.com/comments';

export class CommentsList extends React.Component {
    constructor() {
        super();
        this.httpService = new HTTPService();
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

    render() {
        const comments = this.state.comments.map((comment, i) => {
            return <li key={i}>
                <h3 className="comments__author">
                    Author: {comment.author}
                </h3>
                <div className="comments__date">
                    Date: {comment.date}
                </div>
                <div className="comments__text">
                    {comment.text}
                </div>
            </li>
        });
        return <ul>
            {comments}
        </ul>;
    }
}