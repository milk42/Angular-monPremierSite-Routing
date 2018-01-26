export class Liste {
    id: number;
    name: string;
    edit: boolean;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.edit = false;
    }
}
