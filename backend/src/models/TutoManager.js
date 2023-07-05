const AbstractManager = require("./AbstractManager");

class TutoManager extends AbstractManager {
  constructor() {
    super({ table: "tutorials" });
  }

  findAll() {
    return this.database.query(
      `select f.title as ftitle ,t.name as tutoname, t.target, t.explanation, i.src,i.alt
      from formations as f 
      inner join tutorials as t on t.formation_id=f.id 
      inner join images as i on t.image_id=i.id`
    );
  }

  find(id) {
    return this.database.query(
      `select f.title as ftitle ,t.id as tutoid, t.name as tutoname, t.target, t.explanation, i.src,i.alt
      from formations as f
      inner join tutorials as t on t.formation_id=f.id 
      inner join images as i on t.image_id=i.id
      where t.id = ?`,
      [id]
    );
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

module.exports = TutoManager;
