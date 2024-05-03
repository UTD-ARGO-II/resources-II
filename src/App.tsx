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
							href: 'http://www.chromatic.com/library?appId=660f1f3045766446634edc95'
						},
						{
							text: 'Storybook Github Repo',
							href: 'https://github.com/UTD-ARGO-II/argo-storybook-II',
							icon: <GitHub />
						},
						{
							text: 'Storybook NPM Package',
							href: 'https://www.npmjs.com/package/@utd-argo-ii/ux-master-library'
						},
						{
							text: 'StorybookGPT',
							href: 'https://chat.openai.com/g/g-C38VKZySB-storybook-gpt'
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
							href: 'https://docs.google.com/presentation/d/1yrbnyEgRuGgoUdAlMto71pNjznOtvNdOv_gHPz6Er2w/edit?usp=sharing',
							icon: <PhotoLibrary />
						},
						{
							text: 'UTD Presentation',
							href: 'https://docs.google.com/presentation/d/1RObnZCj-4Yj9cgPzyMqxQ3o8Fju8vLMqgL0uXGZN7E0/edit?usp=sharing',
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
