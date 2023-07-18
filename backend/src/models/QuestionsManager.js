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

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = QuestionsManager;
