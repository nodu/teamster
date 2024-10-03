import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { vi, Mocked } from "vitest";

import axiosClient from "../api/axiosClient";
import MemberList from "./MemberList";

vi.mock("../api/axiosClient");

const mockedAxios = axiosClient as Mocked<typeof axiosClient>;

describe("MemberList component", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        { id: 1, first_name: "Mert", last_name: "Doe", role: "admin" },
        { id: 2, first_name: "Jani", last_name: "Doe", role: "regular" },
      ],
    });
  });

  test("renders the list of members from the API", async () => {
    render(
      <BrowserRouter>
        <MemberList />
      </BrowserRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText(/Mert Doe/)).toBeInTheDocument();
      expect(screen.getByText(/Jani Doe/)).toBeInTheDocument();
    });
  });
});
