/// <reference path="../../../typings/_custom.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angular2_1 = require('angular2/angular2');
var spotify_1 = require('../../services/spotify');
var fetch_1 = require('../../utils/fetch');
var Artist = (function () {
    function Artist(service, routeParam) {
        this.service = service;
        this.routeParam = routeParam;
        this.getArtist();
    }
    Artist.prototype.getArtist = function () {
        var _this = this;
        this.service.getArtistById(this.routeParam.params.id)
            .then(fetch_1.status)
            .then(fetch_1.json)
            .then(function (response) {
            _this.artist = response;
            _this.image = response.images[0].url;
        });
    };
    Artist = __decorate([
        angular2_1.Component({
            selector: 'artist',
            viewInjector: [spotify_1.Spotify]
        }),
        angular2_1.View({
            directives: [angular2_1.NgIf],
            template: "\n\t\t<section *ng-if=artist>\n\t\t\t<h3>{{artist.name}}</h3>\n\t\t\t<img src=\"{{image}}\">\n\t\t</section>\n\t"
        })
    ], Artist);
    return Artist;
})();
exports.Artist = Artist;
