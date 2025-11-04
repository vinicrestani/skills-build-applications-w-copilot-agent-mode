
import React, { useEffect, useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Teams endpoint:', endpoint);
        console.log('Fetched teams:', results);
      });
  }, [endpoint]);

  return (
    <Card className="mb-4">
      <Card.Header as="h2" className="bg-info text-white">Teams</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.id || idx}>
                <td>{team.id || idx + 1}</td>
                <td>{team.name || '-'}</td>
                <td>{JSON.stringify(team)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="info" onClick={() => window.location.reload()}>Reload</Button>
      </Card.Body>
    </Card>
  );
};

export default Teams;
