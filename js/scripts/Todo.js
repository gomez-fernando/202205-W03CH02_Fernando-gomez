/* eslint-disable no-underscore-dangle */
export class Todo {
    id;
    name;
    responsable;
    _isCompleted = false;
    
    constructor(
    // eslint-disable-next-line no-unused-vars
    id, name, responsable) {
        this.id = id;
        this.name = name;
        this.responsable = responsable;
        this._isCompleted = false;
    }

    get isCompleted() {
        return this._isCompleted;
    }
    set isCompleted(value) {
        this._isCompleted = value;
    }
   
}

