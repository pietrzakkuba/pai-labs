﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SongsProject.Models
{
    public class Genre
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required!")]
        [StringLength(20, ErrorMessage = "Maximal length of the name of a genre is 20 characters!")]
        public string Name { get; set; }
        public ICollection<Song> Songs { get; set; }
    }
}