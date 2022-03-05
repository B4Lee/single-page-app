import AbstractViews from "./AbstractViews.js";

export default class extends AbstractViews {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Settings</h1>
            <p>
            <a href="#" data-link>Manage your privacy & configuration</a>
            </p>
        `;
    }
}