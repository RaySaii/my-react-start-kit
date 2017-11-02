var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPic } from '../actions/index';
var mapStateToProps = function (state) { return ({
    pictures: state.pictures,
}); };
var mapDispatchToProps = {
    fetchPic: fetchPic,
};
var PictureList = /** @class */ (function (_super) {
    __extends(PictureList, _super);
    function PictureList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PictureList.prototype.componentDidMount = function () {
        this.props.fetchPic();
    };
    PictureList.prototype.render = function () {
        var pictures = this.props.pictures;
        return (React.createElement("div", { className: "pictures-list" }, pictures.data.map(function (image, index) { return React.createElement("img", { style: { width: '100px' }, key: index, src: image.url }); })));
    };
    PictureList = __decorate([
        connect(mapStateToProps, mapDispatchToProps)
    ], PictureList);
    return PictureList;
}(React.Component));
export default PictureList;
//# sourceMappingURL=PictureList.js.map