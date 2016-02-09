/// <reference path="../../typings/_custom.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angular2_1 = require('angular2/angular2');
var Spotify = (function () {
    function Spotify() {
        this.url = 'https://api.spotify.com/v1/';
    }
    Spotify.prototype.searchArtist = function (value) {
        return window.fetch(this.url + 'search?type=artist&q=' + value);
    };
    Spotify.prototype.getArtistById = function (id) {
        return window.fetch(this.url + 'artists/' + id);
    };
    Spotify = __decorate([
        angular2_1.Injectable()
    ], Spotify);
    return Spotify;
})();
exports.Spotify = Spotify;
