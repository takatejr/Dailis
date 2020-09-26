// @GENERATOR:play-routes-compiler
// @SOURCE:D:/Dailis/Scala/conf/routes
// @DATE:Sat Sep 26 17:49:39 CEST 2020


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
