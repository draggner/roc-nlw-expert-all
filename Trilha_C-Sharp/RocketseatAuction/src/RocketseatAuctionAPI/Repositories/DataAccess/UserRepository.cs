using RocketseatAuction.APi.Contracts;

namespace RocketseatAuction.API.DateAccess;

public class UserRepository : IUserRepository
{
  
  private readonly RocketseatAuctionDbContext _dbContext;

  public UserRepository(RocketseatAuctionDbContext dbContext) => _dbContext = dbContext;

  public boll ExistUserWithEmail(string email)
  {

    return _dbContext.Users.Any(user => user.email.Equals(email))
  }

  public User GetUserByEmail(string email) => _dbContext.Users.First(user => user.Email.Equals());
}