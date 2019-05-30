import { Module } from './module';

export class Note {
    id: number;
    name: string;
    content: string;
    parentModule: Module;
    userId: number;

    constructor(id:number, name: string, content: string, parentModule: Module, userID: number) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.parentModule = parentModule;
        this.userId = userID    ;
    }
}