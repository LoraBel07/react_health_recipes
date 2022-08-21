import image3 from './icons9.png';
import image4 from './list.png';
import image5 from './food.png';

function MyOptionsComponent({label, cuisineType, image, CAquantity, CHOLEquantity, FATquantity, NAquantity, SUGARquantity, VITCquantity, VITDquantity, ZNquantity,  ingredientLines, calories}) {
	return(
		<div>
			<div className="box">
				<h2>{label}</h2>
			</div>

			<div className='box type'>
				<img src={image5} className='icons2' alt="heart"/>
				<h4> {cuisineType} kitchen </h4>
				<img src={image5} className='icons2' alt="heart"/>
				<h4> {calories.toFixed()} Kcal </h4>
				<img src={image5} className='icons2' alt="heart"/>
			</div>			

			

			<div className='description'>
				<div className='paragraph'>
					<div className="imgbox">
						<img className="tasty" src={image} alt="dishes"/>
					</div>

					<ul className="list">
						{ingredientLines.map((ingredient, index) => (
						<li key={index}>
							<img src={image3} className='icons2' alt="checkmark"/>
							{ingredient}
						</li>
						) )}
					</ul>

				</div>

				<div className='box'>
						<h2>Main Nutrients</h2>
					</div>

				<div className='paragraph'>
					
					<div className='smallbox'>
						<img src={image4} className='icons2' alt="checkmark" />
						<p> Calcium {CAquantity.toFixed()} mg.</p>
					</div>

					<div className='smallbox'>
						<img src={image4} className='icons2' alt="checkmark"/>						
						<p> Cholesterol {CHOLEquantity.toFixed(2)} mg.</p>
					</div>

					<div className='smallbox'>
						<img src={image4} className='icons2' alt="checkmark"/>
						<p> Fat {FATquantity.toFixed(2)} g.</p>
					</div>

					<div className='smallbox'>
						<img src={image4} className='icons2' alt="checkmark"/>
						<p> Sodium {NAquantity.toFixed()} mg.</p>
					</div>

					<div className='smallbox'>
						<img src={image4} className='icons2' alt="checkmark"/>
						<p> Sugar {SUGARquantity.toFixed()} g.</p>
					</div>

					<div className='smallbox'>
						<img src={image4} className='icons2' alt="checkmark"/>
						<p> Vitamin C {VITCquantity.toFixed(2)} mg.</p>
					</div>

					<div className='smallbox'>
						<img src={image4} className='icons2' alt="checkmark"/>
						<p> Vitamin D {VITDquantity.toFixed(2)} mg.</p>
					</div>

					<div className='smallbox'>
						<img src={image4} className='icons2' alt="checkmark"/>
						<p> Zinc {ZNquantity.toFixed(2)} mg.</p>
					</div>
				</div>
			</div>			

			<div className="box">
				<img src={image5} className='icons3' alt="heart"/>
			</div>

		</div>		
	)
}
export default MyOptionsComponent;