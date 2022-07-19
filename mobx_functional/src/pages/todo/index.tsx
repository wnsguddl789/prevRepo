import * as React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { TodoPage } from 'src/modules/Todo';

const TodoList: NextPage = () => {
	return <TodoPage />;
};

export const getSeverSideProps: GetServerSideProps = async (context) => {
	return {
		props: {},
	};
};

export default TodoList;
