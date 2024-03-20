import type { MetaFunction } from '@remix-run/node';
import { Header } from '../widgets/header';
export const meta: MetaFunction = () => {
	return [
		{
			title: 'Plan.io',
		},
		{
			name: 'description',
			content: 'Your all in one productivity app',
		},
	];
};

export default function Index() {
	return (
		<>
			<Header />
		</>
	);
}
