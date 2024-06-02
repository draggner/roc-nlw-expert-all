namespace UseCases.Teste.Offers.CreateOffer;

public class CreateOfferUseCaseTest
{

  [Theory]
  [InlineDate(1)]
  [InlineDate(2)]
  [InlineDate(3)]
  public void Sucess(int itemId)
  {
    var request = new Faker<RequestCreateOfferJson>()
    .RuleFor(request => request.Price, f => f.Random.Decimal(1, 700)).Generate();

    var offerRepository = new Mock<IOfferRepository>();

    var loggedUser = new Mock<ILoggedUser>();
    loggedUser.Setup(i => i.User()).Returns(new User());

    var useCase = new CreateOfferUseCase(, offerRepository.Object);

    var act = () => useCase.Execute(itemId, request)

    act.Should().NotThrow();
  }
}