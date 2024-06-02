using FluentAssertions;
using Moq;
using Xunit;
using RocketseatAuction.API.Auctions.GetCurrent;
using RocketseatAuction.API.Contracts;

namespace UseCases.Test.Auctions.GetCurrent;

public class GetCurrentAuctionUseCaseTest
{

  [Fact]

  public void Sucess()
  {
    
    /*var entity = new Auction
    {
      Id = 1,
      Name = "Teste",
      Start = DateTime.Now,
    };
    */

    var testUsers = new Faker<Auction>()
    .RuleFor(auction => auction.ID, f => f.Random.Number(1, 700))
    .RuleFor(auction => auction.Name, f => f.Lorem.Word())
    .RuleFor(auction => auction.Starts, f => f.Date.Past())
    .RuleFor(auction => auction.Ends, f => f.Date.Future())
    .RuleFor(auction => auction.Items, (f, auction) => new List<Item>
    {
      new Item
      {
        Id = f.Random.Number(1, 800),
        Name = f.Commerce.ProductName(),
        Brand = f.Commerce.Departament(),
        BasePrice = f.Random.Decimal(50, 1000),
        Condition = f.PickRandom<Condition>(),
        AuctionId = auction.Id
      }
    }).Generte();

    var mock = new Mock<IAuctionRepository>();

    mock.Setup(i => i.GetCurrent()).Returns(new RocketseatAuction.API.Entities.Auction());

    var useCase = new GetCurrentAuctionUseCase(mock.Object);

    var auction = useCase.Execute();

    auction.Should().NotBeNull();

    auction.Id.Should().Be(entity.Id);
    auction.Name.Should().Be(entity.Name);
  }
}