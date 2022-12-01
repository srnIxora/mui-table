import { TableColumnType, IMustHave } from "../custom-table/types";

export interface Person extends IMustHave {
  Name: string;
  Age: string;
}

export interface Car extends IMustHave {
  Model: string;
  Year: number;
}

export const personColumn: TableColumnType<Person>[] = [
  {
    id: "Name",
    canBeSorted: true,
    label: "Name",
    render: (person) => <>{person.Name} is a person</>,
  },
  {
    id: "Age",
    label: "Age",
    canBeSorted: true,
    render: (person) => <>{person.Age}</>,
  },
  {
    id: "Action",
    canBeSorted: false,
    label: "Edit Info",
    render: () => <>show edit delete btn</>,
  },
];

export const carColumn: TableColumnType<Car>[] = [
  {
    id: "Checkbox",
    label: null,
    render: () => null,
    canBeSorted: false,
  },
  {
    id: "Model",
    label: "Car Info",
    render: (car) => (
      <>
        {car.Model} made in {car.Year}
      </>
    ),
    canBeSorted: false,
  },
];

export const persons: Person[] = [
  {
    Age: "20",
    Name: "Abcd",
    Id: "1",
  },
  {
    Age: "30",
    Name: "XYZ",
    Id: "2",
  },
];

export const cars: Car[] = [
  {
    Model: "Aston Martin",
    Year: 2000,
    Id: "1",
  },
  {
    Model: "Alpha Romeo",
    Year: 2010,
    Id: "2",
  },
];
