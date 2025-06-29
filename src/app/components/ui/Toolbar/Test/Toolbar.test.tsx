import { render, screen } from "@testing-library/react";
import * as React from "react";

import DashBoardToolbar from "@/app/components/ui/Toolbar/index";

import "@testing-library/jest-dom";

describe("DashBoardToolbar", () => {
  it("renderiza o título corretamente", () => {
    render(<DashBoardToolbar />);
    const title = screen.getByText("Quadro desmatamento - Módulo desmatamento");
    expect(title).toBeInTheDocument();
  });

  it("renderiza os ícones ChevronRight", () => {
    render(<DashBoardToolbar />);
    const chevrons = screen.getAllByTestId("ChevronRightIcon");
    expect(chevrons).toHaveLength(2);
  });
});
