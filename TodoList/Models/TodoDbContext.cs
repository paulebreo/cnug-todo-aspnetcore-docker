using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TodoList.Models
{

    public partial class TodoDbContext : DbContext
    {

        public TodoDbContext(DbContextOptions<TodoDbContext> options)
    : base(options)
        {
        }

        public virtual DbSet<Todo> Todos { get; set; }
    
    }

 

}

