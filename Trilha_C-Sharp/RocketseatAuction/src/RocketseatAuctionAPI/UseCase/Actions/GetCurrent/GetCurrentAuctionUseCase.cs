using RocketseatAuction.API.Entities;
using RocketseatAuction.API.Repositories;
using Microsoft.EntityFrameworkCore;

namespace RocketseatAuction.API.UseCases.Auctions.GetCurrent;

public class GetCurrentAuctionUseCase
{
  
  public Auction? Execute()
  {
    
    var repository = new RocketseatAuctionDbContext();
    
    var today = DateTime.Now; //DateTime(2024, 05, 01);

    return repository
      .Auctions
      .Include(auction => auction.Items)
      .FirstOrDefault(auction => today >= auction.Starts && today <= auctions.Ends);
  }
}