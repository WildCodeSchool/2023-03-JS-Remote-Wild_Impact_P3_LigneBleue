const AbstractManager = require("./AbstractManager");

class formationsManager extends AbstractManager {
  constructor() {
    super({ table: "formations" });
  }

  findAll() {
    return this.database.query(`select * from ${this.table}`);
  }

  find(id) {
    return this.database.query(
      `select f.title, t.name, t.icon from formations as f inner join tutorials as t on f.id=t.formation_id where f.id=?`,
      [id]
    );
  }
}

module.exports = formationsManager;
