using Microsoft.EntityFrameworkCore;
using RocketseatAuction.API.Entities;

namespace RocketseatAuction.API.Repositories;

public class RocketseatAuctionDbContext : DbContext
{

  public DbSet<Auction> Auctions { get; set; }
  public DbSet<User> Users { get; set; }
  public DbSet<Offer> Offers { get; set; }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    
    optionsBuilder.UseSqlite(@"Data Source=C:\Users\Lenovo\Desktop\draggner\Platform\Rocketseat\Event\2024 NLW 14 Expert\NLW_Expert_Projects\Trilha_C-Sharp\RocketseatAuction\leilaoDbNLW.db");
  }
}