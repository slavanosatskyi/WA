import * as React from 'react';

import { HTTPService } from '../../common/scripts/http-service';

const URL = 'https://evening-dawn-11092.herokuapp.com/comments';


export class CreateCommentSection extends React.Component {
    constructor() {
        super();
        this.httpService = new HTTPService();
        this.onSubmit = this.onSubmit.bind(this);
        this.valueChange = this.valueChange.bind(this);
        this.state = {
            author: 'Jeck London',
            text: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();

        this.httpService.post(URL, this.state, (comment) => {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.author = comment.author;
                newState.text = comment.text;
                return newState;
            });
        });
    }

    valueChange(e) {
        const value = e.target.value;
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.text = value;
            return newState;
        })
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            <h2>New comment:</h2>
            <textarea
                value={this.state.text}
                onChange={this.valueChange}
                cols="30"
                rows="10">
            </textarea>
            <div>
                <button type="submit">Add comment</button>
            </div>
        </form>;
    }
}