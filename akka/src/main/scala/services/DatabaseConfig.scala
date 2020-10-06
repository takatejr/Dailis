import driver.api._

trait DatabaseConfig extends Config {
  val driver = slick.jdbc.PostgresProfile

  def db: Database = Database.forConfig("database")

  implicit val session: Session = db.createSession();
}
