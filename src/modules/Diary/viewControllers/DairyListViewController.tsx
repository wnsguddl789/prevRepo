import * as React from 'react';
import { DairyListView } from '../views';
import type { Moment } from 'moment';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import { Badge } from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';

export const DairyListViewController = () => {
  const { data: session } = useSession();
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [date, setDate] = React.useState(moment());

  const onSelect = (newValue: Moment) => {
    setDate(newValue);
    setIsModalVisible(true);
  };

  const onPanelChange = (newValue: Moment) => {
    setDate(newValue);
  };

  const dateCellRender = (value: Moment) => {
    const { length: count } = getListData(value);
    if (count !== 0)
      return (
        <Badge style={{ backgroundColor: '#52c41a' }} dot>
          <PaperClipOutlined />
        </Badge>
      );
  };

  return (
    <DairyListView
      dateCellRender={dateCellRender}
      setIsModalVisible={setIsModalVisible}
      isModalVisible={isModalVisible}
      date={date}
      onSelect={onSelect}
      onPanelChange={onPanelChange}
    />
  );
};

const getMonthData = (value: Moment) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const getListData = (value: Moment) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
};
