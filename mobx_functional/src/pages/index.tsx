import type { GetServerSideProps, NextPage } from 'next'

const Home: NextPage = () => {
	return <></>
}

export const getServerSideProps: GetServerSideProps = async () => {
	const props = {}
	return {
		props,
		redirect: {
			permanent: false,
			destination: '/todo',
		},
	}
}

export default Home
