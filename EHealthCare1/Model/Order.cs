using System;
using System.Collections.Generic;

#nullable disable

namespace EHealthCare1.Model
{
    public partial class Order
    {
        public int OrderId { get; set; }
        public int OrderNumber { get; set; }
        public int CartId { get; set; }
        public DateTime? OrderDate { get; set; }
    }
}
