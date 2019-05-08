export class Post {
    private _userId: number;
    private _id: number;
    private _title: string;
    private _body: string;

    constructor({userId, id, title, body}) {
        this._userId = userId;
        this._id = id;
        this._title = title;
        this._body = body;
    }

    get title(): string {
        return this._title;
    }

    get body(): string {
        return this._body;
    }

    set title(title: string) {
        this.title = title;
    }

    set body(body: string) {
        this._body = body;
    }
}