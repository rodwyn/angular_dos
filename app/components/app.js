/// <reference path="../../typings/_custom.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angular2_1 = require("angular2/angular2");
var Article = (function () {
    function Article(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }
    Article.prototype.voteUp = function () {
        this.votes += 1;
        return false;
    };
    Article.prototype.voteDown = function () {
        this.votes -= 1;
        return false;
    };
    Article.prototype.domain = function () {
        var link = this.link.split('//')[1];
        return link.split('/')[0];
    };
    return Article;
})();
;
var RedditArticle = (function () {
    function RedditArticle() {
    }
    RedditArticle = __decorate([
        angular2_1.Component({
            selector: 'reddit-article',
            properties: ['article']
        }),
        angular2_1.View({
            template: "\n    <article>\n        <div class=\"votes\">{{ article.votes }}</div>\n        <div class=\"main\">\n            <h2>\n                <a href=\"{{ article.link }}\"> {{ article.title }}</a>\n                <span> ({{ article.domain() }})</span>\n            </h2>\n            <ul>\n                <li><a href (click)=\"article.voteUp()\">upvote</a></li>\n                <li><a href (click)=\"article.voteDown()\">downvote</a></li>\n            </ul>\n        </div>\n    </article>\n    "
        })
    ], RedditArticle);
    return RedditArticle;
})();
exports.RedditArticle = RedditArticle;
;
var RedditApp = (function () {
    function RedditApp() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io'),
            new Article('Fullstack', 'http://fullstack.io')
        ];
    }
    RedditApp.prototype.addArticle = function (title, link) {
        this.articles.push(new Article(title.value, link.value));
        title.value = '';
        link.value = '';
        console.log("Adding article with title", title.value, "and link", link.value);
    };
    RedditApp = __decorate([
        angular2_1.Component({
            selector: 'reddit'
        }),
        angular2_1.View({
            template: "\n    <section; class=\"new-link\">\n    <div class=\"control-group\">\n    <div><label for=\"title\">Title:</label></div>\n    <div><input name=\"title\"; #newtitle></div>\n    </div>\n    <div; class=\"control-group\">\n    <div><label for=\"link\">Link:</label></div>\n    <div><input name=\"link\" #newlink></div>\n    </div>\n\n    <button (click)=\"addArticle(newtitle,newlink)\"> Submit Link </button>\n    </section>\n\n    <reddit-article\n        *ng-for=\"#article of articles\"\n        [article]=\"article\"></reddit-article>\n    ",
            directives: [RedditArticle, angular2_1.NgFor]
        })
    ], RedditApp);
    return RedditApp;
})();
exports.RedditApp = RedditApp;
//# sourceMappingURL=app.js.map