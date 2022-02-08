import styled from '@emotion/styled';

interface SelectProps {
  datas: Array<SELECT_TYPE>;
  handleLanguage: Function;
}

interface SELECT_TYPE {
  english_name: string;
  iso_639_1: string;
}

const Select = ({ datas, handleLanguage }: SelectProps) => {
  return (
    <Container onChange={(e) => handleLanguage(e)}>
      {datas &&
        datas.map((data: SELECT_TYPE, idx: number) => {
          return (
            <option key={idx} value={data.iso_639_1}>
              {data.english_name}
            </option>
          );
        })}
    </Container>
  );
};

export default Select;

const Container = styled.select`
  background-color: rgba(20, 20, 20, 0.8);
  color: white;
  width: 100%;
  padding-left: 15px;
  text-align: left;
  outline: none;
  border-radius: 5px;
`;
