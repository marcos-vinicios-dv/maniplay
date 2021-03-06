import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 500px;

  border: 2px solid var(--gray-200);
  border-radius: 30px;

  display: flex;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
    color: var(--gray-400);
    margin-bottom: -3px;
  }

  input {
    flex: 1;
    margin: 0 0 0 1.35rem;

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

  button {
    margin-right: -2px;
    background: none;
    border: none;
    border-radius: 0 30px 30px 0;
    padding: 0.55rem 1.35rem;
  }

  transition: all 0.2s ease;

  &:focus-within {
    border-color: var(--pink);

    button {
      background: var(--pink);
      border: var(--pink);

      svg {
        color: var(--gray-50);
      }
    }
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;
