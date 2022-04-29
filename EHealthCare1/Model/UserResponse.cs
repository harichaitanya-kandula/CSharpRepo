using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EHealthCare1.Model
{
    public partial class UserResponse
    {
        public bool? IsValidUser { get; set; }
        public bool? IsAdmin { get; set; }
        public int Id { get; set; }
        public int Amount { get; set; }
    }
  
}
