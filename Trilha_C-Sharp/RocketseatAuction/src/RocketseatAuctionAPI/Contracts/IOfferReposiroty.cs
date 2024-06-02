namespace RocketseatAuction.API.Contracts;

public interface IOfferReposiroty
{
  void Add(Offer offer);

  User GetUserByEmail(string email);
}