namespace RocketseatAuction.API.Contracts;

public interface IUserRepository
{
  bool ExistUserWithEmail(string email);
}