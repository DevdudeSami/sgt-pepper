"use strict";
var Box = /** @class */ (function () {
    function Box(el) {
        this.el = el;
        this.children = [];
        this.properties = {};
    }
    Box.prototype.render = function () {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var childEl = document.createElement("div");
            this.el.appendChild(childEl);
            child.el = childEl;
            child.render();
        }
        if (this.el) {
            this.el.style.backgroundColor = this.properties["backgroundColor"];
        }
    };
    Box.prototype.box = function (childInit) {
        var b = new Box();
        var res = this.copy();
        res.children.push(b);
        if (childInit)
            childInit(b);
        return res;
    };
    Box.prototype.backgroundColour = function (c) {
        var res = this.copy();
        res.properties["backgroundColor"] = c;
        return res;
    };
    Box.prototype.copy = function () {
        var res = new Box(this.el);
        res.children = this.children;
        res.properties = this.properties;
        return res;
    };
    return Box;
}());
var SgtPepper = /** @class */ (function () {
    function SgtPepper(id) {
        this.id = id;
        this.root = new Box(document.getElementById(this.id));
    }
    return SgtPepper;
}());
/// <reference path="SgtPepper.ts" />
window.onload = function () {
    var sgt = new SgtPepper("sgt");
    sgt.root = sgt.root
        .backgroundColour("red")
        .box(function (b) { return b.box(); })
        .box();
    sgt.root.render();
};
