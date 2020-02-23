import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  text-transform: capitalize;
  background: transparent;
  padding: 4px 6px;
  border: 2px solid var(--mainBrown);
  border-color: ${props =>
    props.cart ? "var(--darkGreen)" : "var(--mainBrown)"};
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? "var(--darkGreen)" : "var(--lightBrown)"};
    color: var(--mainWhite);
    cursor: ${props => (props.disabled ? "no-drop" : null)};
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(3px);
  }
`;
export default Button;
