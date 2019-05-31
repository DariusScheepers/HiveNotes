export class Module {
    id: number;
    name: string;
    pathToMarkdown: string;
    
    constructor(id: number, name: string, pathToMarkdown = null) {
        this.id = id;
        this.name = name;
        this.pathToMarkdown = pathToMarkdown;
    }
}