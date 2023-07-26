const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  constructor() {
    super({ table: "images" });
  }

  insert(tutorial) {
    return this.database.query(
      `insert into ${this.table} (src, alt) values (?, ?)`,
      [tutorial.src, tutorial.alt]
    );
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ImageManager;
