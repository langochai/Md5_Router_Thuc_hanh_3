import { useLocation,useNavigate } from "react-router-dom";
function Product() {
	const { state } = useLocation();
	const navigate = useNavigate()
	const back = () =>{
		navigate("/")
	}
	return (
		<div>
			<h3>Id selected {state.categoryId} </h3>
			<button onClick={back}>Back</button>
		</div>
	);
}

export default Product;