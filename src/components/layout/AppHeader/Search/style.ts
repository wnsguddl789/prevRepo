import styled from "@emotion/styled"
export const SearchWrapper = styled.div`
`
export const SearchInput = styled.input`
  width: 100px;
  margin: 3px 0;
  outline: none;
  background: none;
  border-radius: 8px;
  text-align: center;
  :focus {
    animation-name: border-focus;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes border-focus {
    from {
      border-radius: 8px;
    }
    to {
      border-radius: 15px;
    }
  }
`