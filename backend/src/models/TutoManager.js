const AbstractManager = require("./AbstractManager");

class TutoManager extends AbstractManager {
  constructor() {
    super({ table: "tutorials" });
  }

  findAll() {
    return this.database.query(
      `select f.title,t.id, t.name, t.target, t.explanation, t.image, q.title, quest.content from formations as f inner join tutorials as t on formation_id=f.id inner join quizz as q on t.quizz_id=q.id inner join questions as quest on quest.quizz_id=q.id inner join answers as a on question_id=a.id`
    );
  }

  find(id) {
    return this.database.query(
      `select t.id, t.name, t.target, t.explanation, t.image, q.title, quest.content from formations as f inner join tutorials as t on formation_id=f.id inner join quizz as q on t.quizz_id=q.id inner join questions as quest on quest.quizz_id=q.id where t.id = ?`,
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
