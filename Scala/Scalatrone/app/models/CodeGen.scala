package models

object CodeGen extends App {
  slick.codegen.SourceCodeGenerator.run(
    "slick.jdbc.PostgresProfile",
    "org.postgresql.Driver",
    "jdbc:postgresql://localhost:5432/dailis?user=dailis&password=admin",
    "D:/daylis/scala/Scalatrone/app/",
    "models", None, None, true, false
  )
}
