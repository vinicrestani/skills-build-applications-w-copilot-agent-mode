
import React, { useEffect, useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaders(results);
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched leaderboard:', results);
      });
  }, [endpoint]);

  return (
    <Card className="mb-4">
      <Card.Header as="h2" className="bg-success text-white">Leaderboard</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, idx) => (
              <tr key={leader.id || idx}>
                <td>{leader.id || idx + 1}</td>
                <td>{leader.name || '-'}</td>
                <td>{leader.score || '-'}</td>
                <td>{JSON.stringify(leader)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success" onClick={() => window.location.reload()}>Reload</Button>
      </Card.Body>
    </Card>
  );
};

export default Leaderboard;
