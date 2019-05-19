import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  connection: any;

  constructor() { }

  createConnection() {
    // Create Connection
    this.connection = null;
  }

  async getAllFromTable(tableName: string) {
    const sql = `
      USE bbd-learning
      SELECT *
      FROM ${tableName};
    `;
    const result = await this.query(sql);
    return result;
  }

  async getSpecifiedIDFromTable(tableName: string, id: number) {
    const sql = `
      USE bbd-learning
      SELECT *
      FROM ${tableName}
      WHERE ID = ${id};
    `;
    const result = await this.query(sql);
    return result;
  }

  async getSpecifiedFKFromTable(tableName: string, foreignKey: number, fkName: string) {
    const sql = `
        USE bbd-learning
        SELECT *
        FROM ${tableName}
        WHERE ${fkName} = ${foreignKey};
    `;
    const result = await this.query(sql);
    return result;
  }

  private async query(sql: string): Promise<any[]> {
    // Returns a Promise
    /*
    return new Promise((resolve, reject) => {
      connection.query(...args, (err, results) => {
        if(err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    */
   return null;
  }
}
