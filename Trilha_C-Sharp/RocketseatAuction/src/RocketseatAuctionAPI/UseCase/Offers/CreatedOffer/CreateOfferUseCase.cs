using RocketseatAuction.API.Repositories;

namespace RocketseatAuction.API.UseCases.Offers.CreatedOffer;

public class CreateOfferUseCase
{
  private readonly LoggedUser _loggedUser;
  
  public CreatedOfferUseCase(LoggedUser _loggedUser) => _loggedUser = loggedUser;

  public void Execute(int itemId, RequestCreateOfferJson request)
  {

    var repository = new RocketseatAuctionDbContext();
    
    var loggedUser = _loggedUser.User();

    var offer = new Offer
    {
      CreatedOn = DateTime.Now,
      ItemId = itemId,
      Price = request.Price,
      UserId = user.Id
    };
    
    repository.Offers.Add(offer);
    repository.SaveChanges();  

    return offer.Id;
  }
}