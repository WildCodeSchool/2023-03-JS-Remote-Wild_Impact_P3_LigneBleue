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

  update(answers, questionId) {
    return this.database.query(
      `update ${this.table} set content = ?, status = ?, question_id = ? where id = ?`,
      [answers.map((ans) => [ans.answers, ans?.status, questionId, ans.id])]
    );
  }
}

module.exports = AnswersManager;
