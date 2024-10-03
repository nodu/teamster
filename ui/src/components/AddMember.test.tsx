import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddMember from "./AddMember";
import axiosClient from "../api/axiosClient";
import { vi, Mocked } from "vitest";

vi.mock("../api/axiosClient");

const mockedAxios = axiosClient as Mocked<typeof axiosClient>;

beforeAll(() => {
  window.alert = vi.fn();
});

describe("AddMember component", () => {
  test("renders the form and submits correctly", async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: {
        id: 3,
        first_name: "Robert",
        last_name: "Smith",
        role: "regular",
        email: "robert@example.com",
        phone: "123-456-7890",
      },
    });

    render(
      <BrowserRouter>
        <AddMember />
      </BrowserRouter>,
    );

    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "Robert" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Smith" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "robert@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "123-456-7890" },
    });

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /Save/i }));
    });

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith("/members", {
        first_name: "Robert",
        last_name: "Smith",
        role: "regular",
        email: "robert@example.com",
        phone: "123-456-7890",
      });
    });
  });
});
