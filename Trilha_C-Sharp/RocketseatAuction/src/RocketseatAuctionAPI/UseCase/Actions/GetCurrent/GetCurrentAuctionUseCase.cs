using RocketseatAuction.API.Entities;
using RocketseatAuction.API.Repositories;
using Microsoft.EntityFrameworkCore;

namespace RocketseatAuction.API.UseCases.Auctions.GetCurrent;

public class GetCurrentAuctionUseCase
{
  
  private readonly IActionRepository _repository;

  public GetCurrentAuctionUseCase(IAuctionRepository repository) => _repository = repository;

  public Auction? Execute()
  {
    
    return _repository.GetCurrent();
  }
}