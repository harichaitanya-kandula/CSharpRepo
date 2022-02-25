using System;
using System.Collections.Generic;

#nullable disable

namespace EHealthCare1.Model
{
    public partial class Medicine
    {
        public int MedicineId { get; set; }
        public string MedicineName { get; set; }
        public string Description { get; set; }
        public string AgeLimit { get; set; }
        public bool? OverTheCounter { get; set; }
    }
}
