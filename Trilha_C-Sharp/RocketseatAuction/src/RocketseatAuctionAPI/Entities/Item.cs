using System.ComponentModel.DataAnnotations.Schema;
using RocketseatAuction.API.Emums;

namespace RocketseatAuction.API.Entities;

public class Item
{

  public int Id { get; set; }
  public string Name { get; set; } = string.Empty;
  public string Brand { get; set; } = string.Empty;
  public int Condition Condition { get; set; }
  public decimal BasePrice { get; set; }
  public int AuctionId { get; set; }
}