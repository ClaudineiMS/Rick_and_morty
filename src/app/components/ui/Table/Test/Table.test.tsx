import { render } from "@testing-library/react";
import * as React from "react";

import DenseTable from "@/app/components/ui/Table/index";

import "@testing-library/jest-dom";

describe("DenseTable", () => {
  it("Deve renderizar a tabela", () => {
    render(<DenseTable />);
  });
});
