"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angularhomepage = void 0;
const protractor_1 = require("protractor");
class angularhomepage {
    constructor() {
        this.angularlink = protractor_1.element(protractor_1.by.linkText('angular.io'));
        this.searchbox = protractor_1.element(protractor_1.by.css('input[type="search"]'));
    }
}
exports.angularhomepage = angularhomepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmhvbWVwYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZW9iamVjdHMvYW5ndWxhcmhvbWVwYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLGVBQWU7SUFJeEI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0o7QUFSRCwwQ0FRQyJ9