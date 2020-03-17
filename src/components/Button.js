import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  text-transform: capitalize;
  background: transparent;
  padding: 4px 6px;
  margin: 0 10px 0 0;
  border: 2px solid var(--mainBrown);
  border-color: ${props =>
    props.cart ? "var(--darkGreen)" : "var(--mainBrown)"};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${props =>
      props.cart ? "var(--darkGreen)" : "var(--lightBrown)"};
    color: var(--mainWhite);
    cursor: ${props => (props.disabled ? "no-drop" : null)};
    background-color: ${props => (props.pay ? "transparent" : "transparent")};
    transform: ${props => (props.pay ? "scale(1.1)" : "scale(1.1)")};
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(3px);
  }
`;
export default Button;
