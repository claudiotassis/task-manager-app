import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

interface TaskProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="me-2"
        />
        {task.title}
      </div>
      <Button variant="danger" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default Task;
