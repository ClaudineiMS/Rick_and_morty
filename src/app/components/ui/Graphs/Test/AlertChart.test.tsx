import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";

import AlertCard from "@/app/components/ui/Graphs/AlertChart/alertCard";

import "@testing-library/jest-dom";

// Mock do react-google-charts
jest.mock("react-google-charts", () => ({
  Chart: ({ data, options }: any) => (
    <div data-testid="mock-chart">
      Mocked Chart - Data: {JSON.stringify(data)} - Options: {JSON.stringify(options)}
    </div>
  ),
}));

describe("AlertCard", () => {
  const defaultProps = {
    title: "Alerta de Incêndio",
    count: 20,
    previousCount: 30,
    isHighRes: false,
  };

  it("deve renderizar o título e o count", () => {
    render(<AlertCard {...defaultProps} />);

    expect(screen.getByText("Alerta de Incêndio")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
  });

  it("deve renderizar a porcentagem correta", () => {
    render(<AlertCard {...defaultProps} />);

    const percentage = Math.round(
      (defaultProps.count / (defaultProps.count + defaultProps.previousCount)) * 100
    );
    expect(screen.getByText(`${percentage}%`)).toBeInTheDocument();
  });

  it("deve renderizar o gráfico com os dados corretos", () => {
    render(<AlertCard {...defaultProps} />);

    const chart = screen.getByTestId("mock-chart");
    expect(chart).toBeInTheDocument();
    expect(chart).toHaveTextContent('"Anterior",30');
    expect(chart).toHaveTextContent('"Atual",20');
  });
});
