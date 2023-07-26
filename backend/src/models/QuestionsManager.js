const AbstractManager = require("./AbstractManager");

class QuestionsManager extends AbstractManager {
  constructor() {
    super({ table: "questions" });
  }

  insert(question, quizzId) {
    return this.database.query(
      `insert into ${this.table} (content, quizz_id) values (?, ?)`,
      [question.content, quizzId]
    );
  }

  update(question, quizzId) {
    return this.database.query(
      `update ${this.table} set content = ?, quizz_id = ? where id = ?`,
      [question.content, quizzId, question.id]
    );
  }
}

module.exports = QuestionsManager;
