const AbstractManager = require("./AbstractManager");

class AnswersManager extends AbstractManager {
  constructor() {
    super({ table: "answers" });
  }

  insert(answers, questionId) {
    return this.database.query(
      `insert into ${this.table} (content, status, question_id) values ?`,
      [answers.map((ans) => [ans.answers, ans?.status, questionId])]
    );
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = AnswersManager;
