import React from 'react';
import { Card } from '@utd-argo/ux-master-library';
import {
	OpenInNew,
	GitHub,
	PictureAsPdf,
	PhotoLibrary
} from '@mui/icons-material';
import {
	archDoc,
	designDoc,
	projMgmtPlan,
	reqsDoc,
	testPlan,
	finalReport
} from './assets';
import './App.css';

function App() {
	return (
		<div className="App">
			<h1>Resources</h1>
			<div className="cardContainer">
				<RecCard
					title="Storybook"
					desc="Storybook proof of concept UX Master Library"
					links={[
						{
							text: 'Storybook Library Website',
							href: 'https://main--63f2c0bed84a2da0ed389ac2.chromatic.com/'
						},
						{
							text: 'Storybook Github Repo',
							href: 'https://github.com/UTD-ARGO/argo-storybook',
							icon: <GitHub />
						},
						{
							text: 'Storybook NPM Package',
							href: 'https://www.npmjs.com/package/@utd-argo/ux-master-library'
						}
					]}
				/>
				<RecCard
					title="Fresh Oranges"
					links={[
						{
							text: 'Fresh Oranges Website',
							href: 'https://utd-argo.github.io/argo-rtclone-example/'
						},
						{
							text: 'Fresh Oranges Github Repo',
							href: 'https://github.com/UTD-ARGO/argo-rtclone-example',
							icon: <GitHub />
						}
					]}
					desc="A rotten tomatoes clone"
				/>
				<RecCard
					title="Stocks"
					desc="A stocks dashboard"
					links={[
						{
							text: 'Stocks Website',
							href: 'https://utd-argo.github.io/argo-stocks-example/'
						},
						{
							text: 'Stocks Github Repo',
							href: 'https://github.com/UTD-ARGO/argo-stocks-example',
							icon: <GitHub />
						}
					]}
				/>
				<RecCard
					title="Socialyze!"
					desc="A social media analytics dashboard"
					links={[
						{
							text: 'Socialyze! Website',
							href: 'https://utd-argo.github.io/argo-analytics-example/'
						},
						{
							text: 'Socialyze! Github Repo',
							href: 'https://github.com/UTD-ARGO/argo-analytics-example',
							icon: <GitHub />
						}
					]}
				/>
				<RecCard
					title="Documents"
					desc="Course deliverables"
					links={[
						{
							text: 'Project Management Plan',
							href: projMgmtPlan,
							icon: <PictureAsPdf />
						},
						{
							text: 'Requirements Documentation',
							href: reqsDoc,
							icon: <PictureAsPdf />
						},
						{
							text: 'Architecture Documentation',
							href: archDoc,
							icon: <PictureAsPdf />
						},
						{
							text: 'Detailed Design Documentation',
							href: designDoc,
							icon: <PictureAsPdf />
						},
						{
							text: 'Testing Plan',
							href: testPlan,
							icon: <PictureAsPdf />
						},
						{
							text: 'Final Report',
							href: finalReport,
							icon: <PictureAsPdf />
						},
						{
							text: 'ARGO Presentation',
							href: 'https://1drv.ms/p/s!AmDVB43RhQLLhOVSzYt1AcU9_XwiSg?e=f8rOu6',
							icon: <PhotoLibrary />
						},
						{
							text: 'UTD Presentation',
							href: 'https://1drv.ms/p/s!AmDVB43RhQLLhOVR_piXLDnCH3C9eQ?e=v9slWy',
							icon: <PhotoLibrary />
						}
					]}
				/>
			</div>
		</div>
	);
}

type RecCardProps = {
	title: string;
	desc: string;
	links: Link[];
};

type Link = {
	text: string;
	href: string;
	icon?: React.ReactNode;
};

const RecCard = (props: RecCardProps) => {
	return (
		<Card title={props.title} footerBar={<p>{props.desc}</p>}>
			<div className="links">
				{props.links.map((link, i) => (
					<a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
						{link.icon ? link.icon : <OpenInNew />}
						{link.text}
					</a>
				))}
			</div>
		</Card>
	);
};

export default App;
