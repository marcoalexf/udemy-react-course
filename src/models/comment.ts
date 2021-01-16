export class TutComment {
    author!: string;
    comment!: string;
    time!: string;

    constructor(item?: any) {
        Object.assign(this, item);
    }
}