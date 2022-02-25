﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EHealthCare1.Model;

namespace EHealthCare1.Controllers
{
   
    [ApiController]
    [Route("[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly EHealthCareContext _context;

        public AdminController(EHealthCareContext context)
        {
            _context = context;
        }

        // GET: api/Medicines
          [HttpGet]
          [Route("GetAllMedicines")]
        public async Task<ActionResult<IEnumerable<Medicine>>> GetMedicines()
          {
              return await _context.Medicines.ToListAsync();
          }

          // GET: api/Medicines/5
        [HttpGet]
        [Route("getMedicineById/{id}")]
        public async Task<ActionResult<Medicine>> GetMedicine(int id)
          {
              var medicine = await _context.Medicines.FindAsync(id);

              if (medicine == null)
              {
                  return NotFound();
              }

              return medicine;
          }

          // PUT: api/Medicines/5
          // To protect from overposting attacks, enable the specific properties you want to bind to, for
          // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut]
        [Route("updateMedicine/{id}")]
        public async Task<IActionResult> PutMedicine(int id, Medicine medicine)
          {
              if (id != medicine.MedicineId)
              {
                  return BadRequest();
              }

              _context.Entry(medicine).State = EntityState.Modified;

              try
              {
                  await _context.SaveChangesAsync();
              }
              catch (DbUpdateConcurrencyException)
              {
                  if (!MedicineExists(id))
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

          // POST: api/Medicines
          // To protect from overposting attacks, enable the specific properties you want to bind to, for
          // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Route("addMedicine")]
        public async Task<ActionResult<Medicine>> PostMedicine(Medicine medicine)
          {
              _context.Medicines.Add(medicine);
              await _context.SaveChangesAsync();

              return CreatedAtAction("GetMedicine", new { id = medicine.MedicineId }, medicine);
          }

          // DELETE: api/Medicines/5
        [HttpDelete]
        [Route("deleteMedicine/{id}")]
        public async Task<ActionResult<Medicine>> DeleteMedicine(int id)
          {
              var medicine = await _context.Medicines.FindAsync(id);
              if (medicine == null)
              {
                  return NotFound();
              }

              _context.Medicines.Remove(medicine);
              await _context.SaveChangesAsync();

              return medicine;
          }

          private bool MedicineExists(int id)
          {
              return _context.Medicines.Any(e => e.MedicineId == id);
          }
    }
}
