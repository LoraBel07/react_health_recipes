import image3 from './icons9.png';

function MyOptionsComponent({label, cuisineType, CAquantity, CHOLEquantity, image, ingredientLines, calories}) {
	return(
		<div>
			<div className="box">
				<h3>{label}</h3>
			</div>

			<div className='box type'>
				<h3>* * * {cuisineType} * * *</h3>
			</div>

			<div className='box type2'>
				<p> Calcium {CAquantity.toFixed()} mg.</p>
			</div>

			<div className='box type2'>
				<p> Cholesterol {CHOLEquantity.toFixed()} mg.</p>
			</div>

			<div className="box">
				<img className="tasty" src={image} alt="dishes"/>
			</div>

			
			<ul className="list">
				{ingredientLines.map((ingredient, index) => (
					<li key={index}>
						<button>
						<img src={image3} className='icons2' alt="checkmark"/>
						</button>
						{ingredient}
					</li>
				) )}
			</ul>
			

			<div className="box">
				<h4>{calories.toFixed()} calories</h4>
			</div>



		</div>
		
	)
}
export default MyOptionsComponent;