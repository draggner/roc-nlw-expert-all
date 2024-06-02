using RocketseatAuction.API.Repositories;
using RocketseatAuction.API.Entities;
using RocketseatAuction.API.Repositories;
using RocketseatAuction.API.Services;

namespace RocketseatAuction.API.UseCases.Offers.CreatedOffer;

public class CreateOfferUseCase
{
  
  private readonly ILoggedUser _loggedUser;
  private readonly IOfferRepository _repository;

  public CreatedOfferUseCase(ILoggedUser _loggedUser)
  {
    _loggedUser = loggedUser;
    _repository = repository;
  }

  public void Execute(int itemId, RequestCreateOfferJson request)
  {
    
    var loggedUser = _loggedUser.User();

    var offer = new Offer
    {
      CreatedOn = DateTime.Now,
      ItemId = itemId,
      Price = request.Price,
      UserId = user.Id
    };
    
    _repository.Add(offer);

    return offer.Id;
  }
}