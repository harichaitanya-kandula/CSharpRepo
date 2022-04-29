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
    [Route("api/[controller]")]
    [ApiController]
    public class UserAccounts1Controller : ControllerBase
    {
        private readonly EHealthCareContext _context;

        public UserAccounts1Controller(EHealthCareContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("signin/{EmailId}/{Password}")]
        public UserResponse SignInUser(string EmailId, string Password)
        {
            var userAccount = _context.UserAccounts.FirstOrDefault(x => x.EmailId.Equals(EmailId) && x.Password.Equals(Password));

            if (userAccount == null)
            {
                return new UserResponse() { IsValidUser = false, IsAdmin = false, Id=userAccount.Id};
            }
            else
            {
                if ((bool)userAccount.IsAdmin)
                {
                    return new UserResponse() { IsValidUser = true, IsAdmin = true , Id = userAccount.Id };
                }
                else
                    return new UserResponse() { IsValidUser = true, IsAdmin = false , Id = userAccount.Id, Amount = (int)userAccount.Amount };
            }
                       
        }

        [HttpGet]
        [Route("getUser/{EmailId}")]
        public UserAccount GetUser(string EmailId)
        {
            var userAccount = _context.UserAccounts.FirstOrDefault(x => x.EmailId.Equals(EmailId));

            return userAccount;
        }

        [HttpPut]
        [Route("updateFunds/{id}")]
        public async Task<IActionResult> UpdateFunds(int id, int amount)
        {
            var userAccount = _context.UserAccounts.FirstOrDefault(x => x.Id.Equals(id));
            userAccount.Amount = amount;

            if (id != userAccount.Id)
            {
                return BadRequest();
            }

            _context.Entry(userAccount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserAccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
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


        [HttpPut]
        [Route("updateUser/{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserAccount userAccount)
        {
            if (id != userAccount.Id)
            {
                return BadRequest();
            }

            _context.Entry(userAccount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserAccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        private bool UserAccountExists(int id)
        {
            return _context.UserAccounts.Any(e => e.Id == id);
        }
    }
}
