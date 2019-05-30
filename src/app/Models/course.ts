import { Module } from './module';

export class Course {
    id: number;
    name: string;
    description: string;
    modules: Module[];

    constructor(id: number = 1, name: string, modules: Module[], description: string = null) {
        this.id = id;
        this.name = name;
        this.modules = modules;
        this.description = description;
    }

    
}