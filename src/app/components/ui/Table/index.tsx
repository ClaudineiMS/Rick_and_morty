import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface Data {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return { name, calories, fat, carbs, protein };
}

const rows: Data[] = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Brasil", 356, 16.0, 49, 3.9),
  createData("Lavras", 356, 16.0, 49, 3.9),
  createData("Chocolate Cake", 450, 25.0, 60, 5.0),
  createData("Apple Pie", 300, 14.0, 48, 4.5),
  createData("Cheesecake", 400, 20.0, 50, 6.2),
  createData("Brownie", 380, 18.5, 55, 5.1),
  createData("Donut", 310, 15.0, 40, 4.0),
  createData("Pavlova", 290, 10.0, 35, 3.5),
  createData("Tiramisu", 420, 22.0, 48, 5.8),
  createData("Creme Brulee", 330, 16.0, 42, 4.2),
  createData("Pudding", 280, 12.0, 38, 3.9),
  createData("Muffin", 360, 17.0, 54, 4.6),
  createData("Pudding", 285, 11.5, 37, 3.7),
  createData("Custard", 295, 12.5, 36, 3.8),
  createData("Macaron", 250, 9.0, 30, 3.2),
  createData("Pecan Pie", 410, 20.0, 55, 4.7),
  createData("Lemon Tart", 330, 15.5, 45, 4.0),
  createData("Banana Split", 380, 18.0, 52, 5.1),
  createData("Chocolate Mousse", 360, 22.0, 40, 4.5),
  createData("Crepe Suzette", 290, 12.0, 38, 3.9),
  createData("Fruit Salad", 180, 2.5, 40, 2.0),
  createData("Carrot Cake", 420, 19.0, 60, 5.5),
  createData("Blueberry Muffin", 350, 17.0, 5, 4.3),
  createData("Rice Pudding", 240, 10.0, 35, 3.2),
  createData("Chocolate Brownie", 390, 18.5, 58, 5.0),
  createData("Brownie", 398, 18.5, 58, 5.0),
];

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "black",
          fontWeight: "bold",
          backgroundColor: "#CAE8BD",
        },
      },
    },
  },
});

export default function DenseTable(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "100%",
          overflowY: "auto",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="a dense table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={`${row.name}-${idx}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ py: 2 }}>
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
