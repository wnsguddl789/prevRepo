import styled from "@emotion/styled";
const Header = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  top: 0;
  background-color: white;
  padding: 20px 30px;
  button {
    background-color: #6200ee;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 12px;
    cursor: pointer;
  }
`;
const RoomList = styled.section`
  width: 100%;
  margin-top: 76px;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`;
const RoomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  margin: 5px 0;
  .root-title {
    width: 50%;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
    font-weight: 700;
  }
  .room-user-list {
    width: 20%;
    text-align: center;
  }
  .room-button {
    width: 15%;
    background-color: #6200ee;
    border: none;
    color: white;
    padding: 10px 10px;
    border-radius: 12px;
    cursor: pointer;
  }
`;

export { Header, RoomCard, RoomList };
