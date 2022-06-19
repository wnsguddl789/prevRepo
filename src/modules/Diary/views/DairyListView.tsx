import * as React from 'react';
import { Calendar } from 'antd';
import styled from '@emotion/styled';
import type { Moment } from 'moment';
import Modal from '../../../components/Modal';
import { DiaryCreateModalForm } from '../components';
interface DairyListViewProps {
  date: any;
  dateCellRender: any;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: (newValue: Moment) => void;
  onPanelChange: (newValue: Moment) => void;
}

export const DairyListView: React.FunctionComponent<DairyListViewProps> = ({
  isModalVisible,
  setIsModalVisible,
  date,
  onSelect,
  onPanelChange,
  dateCellRender,
}) => (
  <Container>
    <Modal title={`${date.format('LL')} Today I Learned..`} setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}>
      <DiaryCreateModalForm date={date} />
    </Modal>
    <Calendar value={date} onSelect={onSelect} onPanelChange={onPanelChange} dateCellRender={dateCellRender} />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
