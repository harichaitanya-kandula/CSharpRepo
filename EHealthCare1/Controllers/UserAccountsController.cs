using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EHealthCare1.Model;

namespace EHealthCare1.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserAccountsController : ControllerBase
    {
        private readonly EHealthCareContext _context;

        public UserAccountsController(EHealthCareContext context)
        {
            _context = context;
        }

       
        [HttpGet]
        [Route("signin/{EmailId}/{Password}")]
        public bool SignInUser(string EmailId, string Password)
        {
            var userAccount = _context.UserAccounts.FirstOrDefault(x=>x.EmailId.Equals(EmailId) && x.Password.Equals(Password));

            if (userAccount == null)
            {
                return false;
            }
            
            return true;
        }

        // POST: api/UserAccounts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Route("signup")]
        public async Task<ActionResult<UserAccount>> PostUserAccount(UserAccount userAccount)
        {
            _context.UserAccounts.Add(userAccount);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostUserAccount", new { id = userAccount.Id }, userAccount);
        }

       
        private bool UserAccountExists(int id)
        {
            return _context.UserAccounts.Any(e => e.Id == id);
        }
    }
}
