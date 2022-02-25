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
    public class CartController : ControllerBase
    {
        private readonly EHealthCareContext _context;

        public CartController(EHealthCareContext context)
        {
            _context = context;
        }

    
        [HttpGet()]
        [Route("GetByUserId/{UserId}")]
        public IEnumerable<Cart> GetCart(int UserId)
        {
            var cartlist =  _context.Carts.Where(x=>x.UserId.Equals(UserId)).ToList();
            return cartlist;
        }

      
        
        [HttpPost]
        [Route("Add")]
        public async Task<ActionResult<Cart>> PostCart(Cart cart)
        {
            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostCart", new { id = cart.CartId }, cart);
        }

       

        private bool CartExists(int id)
        {
            return _context.Carts.Any(e => e.CartId == id);
        }
    }
}
