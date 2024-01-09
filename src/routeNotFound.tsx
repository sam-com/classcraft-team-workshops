import { useNavigate } from "react-router-dom";

export function RouteNotFound() {
	const navigate = useNavigate();

	return (
		<div>
			<div>404 URL not found</div>
			<button onClick={() => navigate(-1)}>Back</button>
		</div>
	);
}
