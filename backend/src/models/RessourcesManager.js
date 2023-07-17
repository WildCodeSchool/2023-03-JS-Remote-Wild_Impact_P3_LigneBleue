const AbstractManager = require("./AbstractManager");

class RessourcesManager extends AbstractManager {
  constructor() {
    super({ table: "resources" });
  }

  findAll() {
    return this.database.query(`
      select * from  ${this.table}
     `);
  }

  findByTutorials(id) {
    return this.database.query(
      `select *
        from ${this.table} as r
        where r.tutorial_id = ?`,
      [id]
    );
  }
}

module.exports = RessourcesManager;
