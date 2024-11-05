using Microsoft.AspNetCore.Mvc;

namespace POCADIntegration.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost]
        [Route("oktaCallback")]
        public IActionResult oktaCallback([FromBody] AuthResponseModel responseData) //dynamic data //HttpRequestMessage request
        {
            try
            {
                //var response = responseData.Content;
                return Ok(new { flag = true, message = "success", data = responseData });
            }
            catch (Exception ex)
            {
                return Ok(new { flag = false, message = "error", data = ex.Message });
            }
        }
    }
}
