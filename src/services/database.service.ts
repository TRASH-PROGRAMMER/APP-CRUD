import PouchDB from "pouchdb";

export class DatabaseService<T extends { _id?: string }> {
  private db: PouchDB.Database;

  constructor(dbName: string) {
    this.db = new PouchDB(dbName);
  }

  async getAll(): Promise<T[]> {
    const result = await this.db.allDocs<T>({ include_docs: true });
    return result.rows.map((row) => row.doc as T);
  }

  async add(item: T): Promise<void> {
    await this.db.put({
      _id: new Date().toISOString(),
      ...item,
    });
  }

  async remove(id: string): Promise<void> {
    const doc = await this.db.get(id);
    await this.db.remove(doc);
  }
}
