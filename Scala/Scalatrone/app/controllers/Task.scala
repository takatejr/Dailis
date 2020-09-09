package controllers

import javax.inject.{Inject, Singleton}
import models.{DailisDatabaseModel, UserData}
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import play.api.mvc._
import play.api.i18n._
import play.api.libs.json.{JsError, JsSuccess, Json, Reads}
import slick.jdbc.JdbcProfile

import scala.concurrent.ExecutionContext
import slick.jdbc.PostgresProfile.api._

@Singleton
class Task @Inject() (protected val dbConfigProvider: DatabaseConfigProvider,
                      cc: ControllerComponents)(implicit ec: ExecutionContext) extends AbstractController(cc) with HasDatabaseConfigProvider[JdbcProfile] {

  private val model = new DailisDatabaseModel(db)

  def load: Action[AnyContent] = Action { implicit request =>
    Ok(views.html.welcome())
  }

  implicit val userDataReads: Reads[Nothing] = Json.reads

  def withJsonBody[A](f: A => Result)(implicit request: Request[AnyContent], reads: Reads[A]): Result = {
    request.body.asJson.map { body =>
      Json.fromJson[A](body) match {
        case JsSuccess(value, path) => f(value)
        case e @ JsError(_) => Redirect(routes.HomeController.index())
      }
    }.getOrElse(Redirect(routes.HomeController.index()))
  }

  def withSessionUsername(f: String => Result)(implicit request: Request[AnyContent]): Result = {
    request.session.get("username").map(f).getOrElse(Ok(Json.toJson(Seq.empty[String])))
  }

 def validate = Action.async { implicit request =>
   withJsonBody[UserData] { ud =>
     model.validateUser(ud.username, ud.password).map { userExists =>
       if (userExists) {
         Ok(Json.toJson(true))
           .withSession("username" -> ud.username, "csrfToken" -> play.filters.csrf.CSRF.getToken.get.value)
       } else {

       }
     }
   }

 }

 def createUser = Action { implicit request =>
   withJsonBody[UserData] { ud =>
     if (model.createUser(ud.username, ud.password)) {
       Ok(Json.toJson(true))
         .withSession("username" -> ud.username, "csrfToken" -> play.filters.csrf.CSRF.getToken)
     }
   }
 }

  def addId = Action { implicit request =>
    withSessionUsername { username =>
      withJsonBody[String] { id =>
        model.addIdOfList(username, id[Int])
        Ok(Json.toJson(true))
      }
    }
  }

  def deleteId: Action[AnyContent] = Action { implicit request =>
      withSessionUsername { username =>
        withJsonBody[Int] { index =>
          model.removeId(username, index)
          Ok(Json.toJson(true))
          }
      }
}

  def logout: Action[AnyContent] = Action { implicit request =>
    Ok(Json.toJson(true)).withSession(request.session - "username")
  }
}
