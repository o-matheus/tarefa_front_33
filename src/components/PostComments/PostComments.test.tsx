import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve renderizar dois comentários", () => {
    const { debug } = render(<PostComment />);
    fireEvent.change(screen.getByTestId('text-comentario'), { target: { value: 'estudar React' } })
    fireEvent.click(screen.getByTestId('btn-comentar'))
    fireEvent.change(screen.getByTestId('text-comentario'), { target: { value: 'estudar Java' } })
    fireEvent.click(screen.getByTestId('btn-comentar'))
    debug()
    expect(screen.getByText("estudar React")).toBeInTheDocument();
    expect(screen.getByText("estudar Java")).toBeInTheDocument();
  });
});
