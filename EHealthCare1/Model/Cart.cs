using System;
using System.Collections.Generic;

#nullable disable

namespace EHealthCare1.Model
{
    public partial class Cart
    {
        public int CartId { get; set; }
        public int CartNumber { get; set; }
        public int UserId { get; set; }
        public int MedicineId { get; set; }
    }
}
