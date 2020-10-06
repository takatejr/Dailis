final case class Account(
  id:Number,
  login: String,
  email: String,
  password: String,
  idsArray: List[Number],
)

final case class Accounts(Account: Seq[Account])