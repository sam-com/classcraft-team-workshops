import { useState, useEffect } from "react";

export function LifeCycleTest({ name }: { name: string }) {
	useEffect(() => {
		console.log(`✨ ${name}`);
		return () => console.log(`💣 ${name}`);
	}, [name]);

	console.log(`🔁 ${name}`);
	return <p>{name}</p>;
}

export function ProblemDemo() {
	const [, setRandomChange] = useState(Math.random());
	const handleRandomChange = () => setRandomChange(Math.random());

	const ReMount = () => <LifeCycleTest name="re-mount" />;

	return (
		<div className="App">
			<ReMount />
			<LifeCycleTest name="re-render" />
			<button onClick={handleRandomChange}>trigger random change</button>
		</div>
	);
}
