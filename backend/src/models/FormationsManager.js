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
      `select * from formations as f 
      inner join tutorials as t on f.id=t.formation_id 
      inner join images as i on t.image_id=i.id
      where f.id=?`,
      [id]
    );
  }
}

module.exports = formationsManager;
