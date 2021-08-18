import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 400px;
  padding: 0.8rem 1.34rem;

  border: 2px solid var(--gray-200);
  border-radius: 30px;

  display: flex;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
    color: var(--gray-400);
  }

  input {
    margin-left: 1rem;

    background-color: transparent;
    border: none;

    &::placeholder {
      color: var(--gray-400);
    }

    &:focus {
      outline: none;
    }

    &:-webkit-autofill {
      border: none;
      box-shadow: 0 0 0 30px var(--gray-100) inset;
    }
  }

  transition: 0.2s ease;

  &:focus-within {
    border-color: var(--pink);
  }
`;
