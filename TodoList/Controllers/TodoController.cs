using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TodoList.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TodoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ITodoService _service;

        public TodoController(ITodoService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var contactList = await _service.GetAll();
            return Ok(contactList);
        }

        [HttpGet("{id}", Name = "GetTodo")]
        public async Task<IActionResult> GetById([FromRoute]int id)
        {
            var item = await _service.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Todo item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            await _service.Add(item);
            return CreatedAtRoute("GetTodo", new { Controller = "Todo", id = item.TodoId }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Todo item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var contactObj = await _service.Find(id);
            if (contactObj == null)
            {
                return NotFound();
            }
            await _service.Update(item);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.Remove(id);
            return NoContent();
        }
    }
}
