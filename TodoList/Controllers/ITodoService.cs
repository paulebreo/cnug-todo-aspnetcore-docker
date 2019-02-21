using System.Collections.Generic;
using System.Threading.Tasks;
using TodoList.Models;

namespace TodoList.Controllers
{
    public interface ITodoService
    {
        Task Add(Todo item);
        Task<Todo> Find(int key);
        Task<IEnumerable<Todo>> GetAll();
        Task Remove(int Id);
        Task Update(Todo item);
    }
}