﻿using System;
namespace TodoList.Models
{
    public partial class Todo
    {
        public int TodoId { get; set; }
        public string TaskName { get; set; }
        public string Assignee { get; set; }
    }
}