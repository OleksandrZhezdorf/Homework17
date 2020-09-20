class RenderAbleElement {
    constructor(tag) {
        this.el = document.createElement(tag);
    }
};

class Squad extends RenderAbleElement {
    constructor(elWrapper) {
        super('section');
        this.elWrapper = elWrapper;
        this._squad = [];
        this.el.classList.add('card');
        this.render();
    };

    addUnit(unit) {
        this._squad = [...this._squad, unit];
        this.el.append(unit.el1, unit.el2, unit.el3, unit.el4);
        this.el = document.createElement('section');
        this.el.classList.add('card');
        this.render();
    };

    render() {
        this.elWrapper.append(this.el);
    };


    isReadyToMove() {
        return this._squad.every((unit) => unit.isReadyToMove());
    };
    isReadyToFight() {
        return this._squad.every((unit) => unit.isReadyToFight());
    };
    restore() {
        this._squad.forEach((unit) => unit.restore());
    };
    getReadyToMove() {
        return this._squad.filter((unit) => unit.isReadyToMove());
    };
    getReadyToFight() {
        return this._squad.filter((unit) => unit.isReadyToFight());
    };
    clone() {
        return this._squad.map((unit) => unit.clone());
    };
}

