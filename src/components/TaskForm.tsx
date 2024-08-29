import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Group controlId="taskTitle">
        <Form.Control
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          placeholder="Add new task"
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-2">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm;
