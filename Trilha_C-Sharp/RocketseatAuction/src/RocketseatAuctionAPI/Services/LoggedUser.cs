using RocketseatAuction.API.Entities;
using RocketseatAuction.API.Repositories;
using RocketseatAuction.API.Services;

namespace RocketseatAuction.API.Services;

public class LoggedUser : ILoggedUser
{
  
  private readonly IHttpContextAccessor _httpContextAccessor;

  private readonly IUserRepository _repository;

  public LoggedUser(IHttpContextAccessor httpContext, IUserRepository repository)
  {

    _httpContextAccessor = httpContext;
    _repository = repository;
  }

  public User User()
  {

    var repository = new RocketseatAuctionDbContext();

    var token = _httpContextAccessor.HttpContext.Request.Headers.Authorization,ToString();

    return _repository.GetUserByEmail(email);
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