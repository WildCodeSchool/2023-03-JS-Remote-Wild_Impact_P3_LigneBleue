const AbstractManager = require("./AbstractManager");

class QuizzManager extends AbstractManager {
  constructor() {
    super({ table: "quizz" });
  }

  find(id) {
    return this.database.query(
      `select q.id , q.title
         from  ${this.table} as q 
        where q.id = ?`,
      [id]
    );
  }

  findQuestion(id) {
    return this.database.query(
      `select q.id, q.content, JSON_ARRAYAGG(JSON_OBJECT('id', a.id, 'answers', a.content)) as answers
         from questions as q
         inner join answers as a on a.question_id = q.id 
        where q.quizz_id = ? 
        group by q.id`,
      [id]
    );
  }

  findAll() {
    return this.database.query(`
      select * from  ${this.table} as q 
      inner join questions as quest on quest.quizz_id=q.id
      inner join answers as a on a.question_id=quest.id
     `);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = QuizzManager;
