const AbstractManager = require("./AbstractManager");

class TutoAdminManager extends AbstractManager {
  constructor() {
    super({ table: "tutorials" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  //   insert(item) {
  //     return this.database.query(`insert into ${this.table} (title) values (?)`, [
  //       items.title,
  //     ]);
  //   }

  //   update(item) {
  //     return this.database.query(
  //       `update ${this.table} set title = ? where id = ?`,
  //       [items.title, items.id]
  //     );
  //   }
}

module.exports = TutoAdminManager;
