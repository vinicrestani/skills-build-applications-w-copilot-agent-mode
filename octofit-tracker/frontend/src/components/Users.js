
import React, { useEffect, useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';

const Users = () => {
  const [users, setUsers] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Users endpoint:', endpoint);
        console.log('Fetched users:', results);
      });
  }, [endpoint]);

  return (
    <Card className="mb-4">
      <Card.Header as="h2" className="bg-warning text-dark">Users</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id || idx}>
                <td>{user.id || idx + 1}</td>
                <td>{user.username || '-'}</td>
                <td>{user.name || '-'}</td>
                <td>{JSON.stringify(user)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="warning" onClick={() => window.location.reload()}>Reload</Button>
      </Card.Body>
    </Card>
  );
};

export default Users;
