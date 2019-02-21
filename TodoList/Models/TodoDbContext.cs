using Microsoft.EntityFrameworkCore;

namespace TodoList.Models
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions<TodoDbContext> options)
            : base(options) { }
        public TodoDbContext() { }
        public DbSet<Todo> Todos { get; set; }
    }
}