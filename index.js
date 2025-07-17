// server.js
const express = require('express')
const app = express()
const port = 5000

// Middleware
app.use(express.json())

// Dummy data
let users = [
  {
    id: 'a3fcb240-35f7-4f91-a35f-bb6ff40f1f01',
    name: 'Rakibul Islam',
    email: 'rakibul@example.com',
    phone: '+8801787654321',
    address: 'Dhaka, Bangladesh',
    image: 'https://i.pravatar.cc/150?img=1',
    createdAt: '2024-07-10T08:45:00.000Z',
    updatedAt: '2024-07-15T11:30:00.000Z',
  },
  {
    id: 'f19a96f5-9e65-44e5-9d68-4f9ab6d96e8f',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1-202-555-0171',
    address: 'New York, USA',
    image: 'https://i.pravatar.cc/150?img=2',
    createdAt: '2024-07-09T10:00:00.000Z',
    updatedAt: '2024-07-15T14:20:00.000Z',
  },
  {
    id: '7b2ea144-1f4f-49a1-9a21-3b3e9f4f5c8d',
    name: 'Fatima Akter',
    email: 'fatima.akter@example.com',
    phone: '+8801812345678',
    address: 'Chattogram, Bangladesh',
    image: 'https://i.pravatar.cc/150?img=3',
    createdAt: '2024-06-20T09:30:00.000Z',
    updatedAt: '2024-07-10T13:10:00.000Z',
  },
  {
    id: '9f7ec21e-1a77-4820-b91e-58c21d4e2ae2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+44 7700 900077',
    address: 'London, UK',
    image: 'https://i.pravatar.cc/150?img=4',
    createdAt: '2024-06-30T12:45:00.000Z',
    updatedAt: '2024-07-13T16:05:00.000Z',
  },
  {
    id: 'bd267afd-38cf-47e6-aaa2-54f4e8b40ff5',
    name: 'Mehedi Hasan',
    email: 'mehedi.hasan@example.com',
    phone: '+8801998765432',
    address: 'Sylhet, Bangladesh',
    image: 'https://i.pravatar.cc/150?img=5',
    createdAt: '2024-07-01T10:15:00.000Z',
    updatedAt: '2024-07-14T12:50:00.000Z',
  },
  {
    id: 'c3438e58-06d7-4707-a56f-e2e432f834f6',
    name: 'Emily Johnson',
    email: 'emily.j@example.com',
    phone: '+1-303-555-0199',
    address: 'Denver, USA',
    image: 'https://i.pravatar.cc/150?img=6',
    createdAt: '2024-06-25T14:10:00.000Z',
    updatedAt: '2024-07-12T17:30:00.000Z',
  },
  {
    id: 'e93cfa9e-b4c9-441c-b5fa-3915c3dbe62a',
    name: 'Sakib Rahman',
    email: 'sakib.r@example.com',
    phone: '+8801765432100',
    address: 'Rajshahi, Bangladesh',
    image: 'https://i.pravatar.cc/150?img=7',
    createdAt: '2024-06-18T08:55:00.000Z',
    updatedAt: '2024-07-11T11:00:00.000Z',
  },
]

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the API! and Welcome from BPS.')
})

// Get all users
app.get('/api/users', (req, res) => {
  res.json(users)
})

// Get user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id))
  if (!user) return res.status(404).json({ message: 'User not found' })
  res.json(user)
})

// Create new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  }
  users.push(newUser)
  res.status(201).json(newUser)
})

// Update user
app.put('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id))
  if (!user) return res.status(404).json({ message: 'User not found' })

  user.name = req.body.name || user.name
  res.json(user)
})

// Delete user
app.delete('/api/users/:id', (req, res) => {
  users = users.filter((u) => u.id !== parseInt(req.params.id))
  res.json({ message: 'User deleted' })
})

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`)
})
