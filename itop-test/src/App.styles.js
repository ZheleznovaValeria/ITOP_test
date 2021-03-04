import styled from 'styled-components';

const Buttons = styled.button`
  height: 100px;
  width: 200px;
  border: none;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
  background: linear-gradient(45deg, rgba(255, 240, 0, 1) 20%, rgba(255, 145, 0, 1) 100%);
  outline: none;
  text-align: center;
  color: black;
  font-size: 20px;

  :disabled {
    background: linear-gradient(
      45deg,
      rgba(187, 179, 52, 0.5018382352941176) 0%,
      rgba(140, 0, 104, 0.4906337535014006) 100%
    );
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: black;
`;

export { Buttons, Container, Wrapper, Text };
