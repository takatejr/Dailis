package models


import slick.jdbc.PostgresProfile.api._
import models.Tables._

import scala.concurrent.{ExecutionContext, Future}

class DailisDatabaseModel(db: Database)(implicit ec: ExecutionContext) {
  def validateUser(username: String, password: String): Future[Boolean] = {
   val matches = db.run(Users.filter(userRow => userRow.username === username && userRow.password === password).result)
  matches.map(userRows => userRows.nonEmpty)
  }

  def createUser(username: String, password: String): Boolean = {
    
    return true
  }

  def getIdsOfLists(username: String): Seq[Int] = {
    return Seq[1, 2, 3]
  }

  def addIdOfList(username: String, idOfList: Int): Unit = {

  }

  def removeId(username: String, id: Int): Boolean = {
    return true
  }
}
