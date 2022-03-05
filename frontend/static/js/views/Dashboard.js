import AbstractViews from "./AbstractViews.js";

export default class extends AbstractViews {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Hello World</h1>
            <p>
                Lorem ipsum
            </p>
            <p>
            <a href="/posts" data-link>View recent Posts</a>
            </p>
        `;
    }
}