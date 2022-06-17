import express, { json } from "express";

const app = express();

const users = [
  'Joe',
  'Max',
  'Robb'
];

app.get('/users', (request, response) => {
  console.log("Listagem de usuários");
  return response.json(users);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);
  const user = users[id];
  return response.json(user);
});

app.post('/users', (request, response) => {
  const user = {
    name: 'Ricky',
    email: 'ricky@teste.com'
  };

  console.log('Usuário criado');
  return response.json(user);
});

app.listen(3333); 
