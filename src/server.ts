import express from 'express';
import { v4 as uuid } from 'uuid'

interface IUser {
  id: string;
  name: string;
  email: string;
}

const users: IUser[] = [];

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    id: uuid(),
    name,
    email,
  }

  users.push(user);
  
  return response.json(user);
});

app.put('/users/:id', (request, response) => {
  const { id } = request.params;

  const { name, email } = request.body;

  const userIndex = users.findIndex(user => user.id === id);

  if(userIndex < 0) {
    return response.status(404).json({ message: 'User not found!' });
  }

  users[userIndex] = {
    id,
    name,
    email,
  }
  
  return response.json(users[userIndex]);
});

app.patch('/users/email/:id', (request, response) => {
  const { id } = request.params;

  const { email } = request.body;

  const userIndex = users.findIndex(user => user.id === id);

  if(userIndex < 0) {
    return response.status(404).json({ message: 'User not found!' });
  }

  users[userIndex].email = email
  
  return response.json(users[userIndex]);
});

app.get('/users', (request, response) => {
  const { email } = request.query;

  const parsedEmail = email as string || "";

  const filteredUsers = users.filter(user => {
    return user.email.toLowerCase().includes(parsedEmail.toLowerCase())
  })

  return response.json(filteredUsers)
})

app.delete('/users/:id', (request, response) => {
  const { id } = request.params;

  const userIndex = users.findIndex(user => user.id === id);

  if(userIndex < 0) {
    return response.status(404).json({ message: 'User not found!' });
  }

  users.splice(userIndex, 1);
  
  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('*** Server is running on port 3333 ***');
});