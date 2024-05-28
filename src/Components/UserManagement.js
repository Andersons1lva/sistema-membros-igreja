import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox,
  IconButton, Chip, TextField, Paper, Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const rows = [
  { name: 'Anderson Silva', email: 'mireya13@hotmail.com', phone: '201-465-1954', company: 'Presbitero', role: 'Executive', status: 'Active' },
  { name: 'Ariana Lang', email: 'tyrel_greenholt@gmail.com', phone: '262-702-2396', company: 'Wuckert Inc', role: 'Intern', status: 'Pending' },
  { name: 'Jaqueline Spencer', email: 'constantin91@yahoo.com', phone: '964-940-3166', company: 'Feest Group', role: 'Telesale', status: 'Banned' },
  { name: 'Jaqueline Spencer', email: 'kallie_powlowski57@hotmail.com', phone: '538-295-9408', company: 'Kihn, Marquardt and Crist', role: 'Full Stack Designer', status: 'Rejected' },
  { name: 'Cristopher Cardenas', email: 'dasia_jenkins@hotmail.com', phone: '575-347-2399', company: 'Rempel, Hand and Herzog', role: 'Backend Developer', status: 'Active' },
];

const statusColors = {
  Active: 'green',
  Pending: 'orange',
  Banned: 'red',
  Rejected: 'gray',
};

function UserManagement() {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>User Management</Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Celular</TableCell>
              <TableCell>Cargo</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.email}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <Chip label={row.status} style={{ backgroundColor: statusColors[row.status], color: 'white' }} />
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default UserManagement;
