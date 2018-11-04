import { HTTPService } from '../../common/scripts/http-service';
import { throws } from 'assert';

const URL = 'https://evening-dawn-11092.herokuapp.com/comments';

const COMMENT_TEMPLATE = '<div class="comment__text">\
    {{text}}\
</div>\
<div class="comment__footer">\
    <h3 class="comment__author">\
        {{author}}\
    </h3>\
    <div class="comment__date">\
        {{date}}\
    </div>\
    <button class="comment__delete">Delete</button>\
</div>';

export class Comments {
    constructor(rootElement){
        this.rootElement = rootElement;
        this.httpService = new HTTPService();
        this.render();
        this.getComments();
    }

    getComments() {
        this.httpService.get(URL, (comments) => this.renderComments(comments));
    }

    renderComments(comments) {
        comments.forEach((comment) => {
            this.renderComment(comment);    
        });
    }

    renderComment(comment) {
        const li = document.createElement('li');
        li.classList.add('comment');
        li.setAttribute('id', 'commentId' + comment.id);
        const liInnerHtml = COMMENT_TEMPLATE
                        .replace('{{text}}', comment.text)
                        .replace('{{author}}', comment.author)
                        .replace('{{date}}', this.formatDate(comment.date));
        li.innerHTML = liInnerHtml;
        li.addEventListener('click', (event) => {
            if (event.target.classList.contains('comment__delete')) {
                event.stopPropagation();
                this.deleteComment(comment.id);
            }
        });
        this.commentsContainer.appendChild(li);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleTimeString() + ' ' + 
               date.getDate() + '/' +
               (date.getMonth() + 1) + '/' +
               date.getFullYear();
    }

    deleteComment(id) {
        this.httpService.delete(URL + '/' + id, () => {
            const li = this.rootElement.querySelector('#commentId' + id);
            const parent = li.parentElement;
            parent.removeChild(li);
        });
    }

    onSubmit() {
        if (this.textarea.value === null || this.textarea.value === '') {
            return;
        }

        const comment = {
            text: this.textarea.value,
            author: 'Scott Fitzgerald'
        };
        this.httpService.post(URL, comment, (comment) => {
            this.renderComment(comment);
        });
    }

    render() {
        this.commentsContainer = document.createElement('ul');
        this.commentsContainer.classList.add('comments__container');

        this.rootElement.appendChild(this.commentsContainer);

        this.form = document.createElement('form');
        this.textarea = document.createElement('textarea');
        this.textarea.setAttribute('rows', 10);
        this.textarea.setAttribute('cols', 30);
        this.form.appendChild(this.textarea);

        const btnWrapper = document.createElement('div');
        const submitBtn = document.createElement('button');
        submitBtn.setAttribute('type', 'submit');
        submitBtn.innerText = 'Add comment';

        btnWrapper.appendChild(submitBtn);
        
        this.form.appendChild(btnWrapper);
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.onSubmit();
            this.textarea.value = '';
        });

        this.rootElement.appendChild(this.form);
    }
}