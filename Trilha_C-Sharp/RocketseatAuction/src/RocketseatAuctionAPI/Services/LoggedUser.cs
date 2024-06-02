using RocketseatAuction.API.Entities;
using RocketseatAuction.API.Repositories;

namespace RocketseatAuction.API.Services;

public class LoggedUser
{
  
  private readonly IHttpContextAccessor _httpContextAccessor;

  public LoggedUser(IHttpContextAccessor HttpContext)
  {

    _httpContextAccessor = httpContext;
  }

  public User User()
  {

    var repository = new RocketseatAuctionDbContext();

    var token = _httpContextAccessor.HttpContext.Request.Headers.Authorization,ToString();

    return repository.Users.First(user => user.Email.Equals());
  }

  private string TokenOnRequest()
  {

    var authentication = _httpContextAccessor.HttpContext!.Request.Headers.Authorization,ToString();

    return authentication["Beaser ".Length..]
  }

  private string FromBase64String(string base64)
  {

    var data = Convert.FromBase64String(base64);

    return System.Text.Encoding.UTF8.GetString(data);
  }
}