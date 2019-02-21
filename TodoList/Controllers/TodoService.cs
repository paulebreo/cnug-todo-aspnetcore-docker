using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodoList.Models;


namespace TodoList.Controllers
{
    public class TodoService : ITodoService
    {
        TodoDbContext _context;
        public TodoService(TodoDbContext context)
        {
            _context = context;
        }

        public async Task Add(Todo item)
        {
            await _context.Todos.AddAsync(item);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Todo>> GetAll()
        {
            return await _context.Todos.ToListAsync();
        }

       
        public async Task<Todo> Find(string key)
        {
            return await _context.Todos
                .Where(e => e.TodoId.Equals(key))
                .SingleOrDefaultAsync();
        }

        public async Task Remove(int Id)
        {
            var itemToRemove = await _context.Todos.SingleOrDefaultAsync(r => r.TodoId == Id);
            if (itemToRemove != null)
            {
                _context.Todos.Remove(itemToRemove);
                await _context.SaveChangesAsync();
            }
        }

        public async Task Update(Todo item)
        {
            var itemToUpdate = await _context.Todos.SingleOrDefaultAsync(r => r.TodoId == item.TodoId);
            if (itemToUpdate != null)
            {
                itemToUpdate.TaskName = item.TaskName;
                itemToUpdate.Assignee = item.Assignee;
                await _context.SaveChangesAsync();
            }
        }
    }
}
