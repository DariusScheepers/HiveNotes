import { Module } from './module';

export class Note {
    id: number;
    name: string;
    content: string;
    parentModule: Module;

    constructor(id: number, name: string, content: string, parentModule: Module) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.parentModule = parentModule;
    }
}