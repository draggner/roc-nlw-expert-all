using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using RocketseatAuction.API.Contracts;

namespace RocketseatAuction.API.Filters;

public class AuthenticationUserAttribute : AuthorizeAttribute, IAuthorizationFilter
{
  
  private readonly IUserRepository _repository;

  public AuthenticationUserAttribute(IUserRepository repository) => _repository = repository;

  public void OnAuthorization(AuthorizationFilterContext context)
  {

    try
    {

      var token = TokenOnRequest(context.HttpContext);

      var email = FromBase64String(token);

      var repository = new RocketseatAuctionDbContext();
    repository.Users.Any(user => user.Email.Equals(email));

      if(exist == false)
      {
        context.Result = new UnauthorizedObjectResult("E-mail not valid.");
      }
    }
    catch (Exception ex)
    {
      
      context.Result = new UnauthorizedObjectResult(ex.Message);
    }
  }
  
  private string TokenOnRequest(HttpContext context)
  {

    var authentication = context.HttpContext.Request.Headers.Authorization.ToString();
    
    if(string.IsNullOrEmpty(authentication))
    {
      throw new Exception("Token is missing.");
    }

    return authentication["Bearer ".Length..];
  }

  private string FromBase64String(string base64)
  {

    var data = Convert.FromBase64String(base64);

    return System.Text.Encondig.UTF8.GetString(data);
  }
}