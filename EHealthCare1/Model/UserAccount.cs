using System;
using System.Collections.Generic;

#nullable disable

namespace EHealthCare1.Model
{
    public partial class UserAccount
    {
        public int Id { get; set; }
        public string EmailId { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool? IsAdmin { get; set; }
        public int? Amount { get; set; }
    }
}
