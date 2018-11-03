import * as React from 'react';
import { Component } from 'react';

import { CommentsList } from './CommentsList.jsx';

export class Comments extends React.Component {
  render() {
    return <div className="Comments">
        <CommentsList />
    </div>
  }
}