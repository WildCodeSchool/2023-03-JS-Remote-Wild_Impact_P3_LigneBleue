const AbstractManager = require("./AbstractManager");

class FormationsManager extends AbstractManager {
  constructor() {
    super({ table: "formations" });
  }

  findAll() {
    return this.database.query(`select * from ${this.table}`);
  }
}

module.exports = FormationsManager;
