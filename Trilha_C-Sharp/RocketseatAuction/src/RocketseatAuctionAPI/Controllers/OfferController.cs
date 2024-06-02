using Microsoft.AspNetCore.Mvc;

namespace RocketseatAuction.API.Controllers;

[ServiceFilter(typeof(AuthenticationUserAttribute))]

public class OfferController : RocketseatAuctionBaseController
{
  
  [HttpPost]
  [Route("{itemId}")]
  public IActionResult CreateOffer([FromRoute] int itemId, [FromBody] RequestCreateOfferJson request, CreatedOfferUseCase useCase)
  {

    var id = useCase.Execute(itemId, request);

    return Created(string.Empty, id);
  }
}