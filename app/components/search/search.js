/// <reference path="../../../typings/_custom.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var spotify_1 = require('../../services/spotify');
var fetch_1 = require('../../utils/fetch');
var Search = (function () {
    function Search(service) {
        this.service = service;
    }
    Search.prototype.searchArtist = function ($event, value) {
        var _this = this;
        if (!value) {
            return;
        }
        if (this.timeoutId)
            clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(function () {
            _this.service.searchArtist(value)
                .then(fetch_1.status)
                .then(fetch_1.json)
                .then(function (response) {
                _this.setResults(response.artists.items);
            });
        }, 250);
    };
    Search.prototype.setResults = function (artists) {
        this.artists = artists;
    };
    Search = __decorate([
        angular2_1.Component({
            selector: 'search',
            viewInjector: [spotify_1.Spotify]
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, router_1.RouterLink],
            template: "\n\t\t<label for=\"search-string\">Search for an artist</label>\n\t\t<input #searchvalue (keyup)=\"searchArtist($event, searchvalue.value)\"/>\n\t\t<h2>Results</h2>\n\t\t<ul>\n\t\t\t<li *ng-for=\"#artist of artists\">\n\t\t\t\t<h3>{{artist.name}}</h3>\n\t\t\t\t<a [router-link]=\"['/artist', {id: artist.id}]\">Read more about this artist</a>\n\t\t\t</li>\n\t\t</ul>\n\t"
        })
    ], Search);
    return Search;
})();
exports.Search = Search;
