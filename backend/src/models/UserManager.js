const AbstractManager = require("./AbstractManager");

class usersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(email, hash) {
    return this.database.query(
      `insert into ${this.table} (mail, password) values (?, ?)`,
      [email, hash]
    );
  }
}

module.exports = usersManager;
