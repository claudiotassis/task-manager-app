import React, { useState, useEffect } from 'react';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">Task Manager</h1>
          <TaskForm onAddTask={addTask} />
          <ListGroup>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onToggleComplete={toggleTaskCompletion}
                onDelete={deleteTask}
              />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
