import { Paper } from "@mui/material";
import CustomTable from "./custom-table/custom-table";
import { personColumn, Car, Person, carColumn, cars, persons } from "./data";

function App() {
  return (
    <Paper
      sx={{
        padding: "10px",
        background: "teal",
      }}
    >
      <CustomTable<Person>
        columns={personColumn}
        data={persons}
        defaultSortedColumn="Name"
      />

      <div style={{ padding: "30px 0", background: "red", margin: "20px 0" }} />

      <CustomTable<Car>
        columns={carColumn}
        data={cars}
        defaultSortedColumn="Model"
      />
    </Paper>
  );
}

export default App;
