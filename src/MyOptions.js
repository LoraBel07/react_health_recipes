import image3 from './icons9.png';

function MyOptionsComponent({label, cuisineType, image, CAquantity, CHOLEquantity, FATquantity, NAquantity, SUGARquantity, VITCquantity, VITDquantity, ZNquantity,  ingredientLines, calories}) {
	return(
		<div>
			<div className="box">
				<h3>{label}</h3>
			</div>

			<div className='box type'>
				<h3>* * * {cuisineType} * * *</h3>
			</div>			

			

			<div className='description'>
				<div className='paragraph'>
					<div className="imgbox">
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

				</div>



				<div className='paragraph'>
					<div className='smallbox'>
						<p> Calcium {CAquantity.toFixed()} mg.</p>
					</div>

					<div className='smallbox'>
						<p> Cholesterol {CHOLEquantity.toFixed(2)} mg.</p>
					</div>

					<div className='smallbox'>
						<p> Fat {FATquantity.toFixed(2)} g.</p>
					</div>

					<div className='smallbox'>
						<p> Sodium {NAquantity.toFixed()} mg.</p>
					</div>

					<div className='smallbox'>
						<p> Sugar {SUGARquantity.toFixed()} g.</p>
					</div>

					<div className='smallbox'>
						<p> Vitamin C {VITCquantity.toFixed(2)} mg.</p>
					</div>

					<div className='smallbox'>
						<p> Vitamin D {VITDquantity.toFixed(2)} mg.</p>
					</div>

					<div className='smallbox'>
						<p> Zinc {ZNquantity.toFixed(2)} mg.</p>
					</div>


				</div>
							

			</div>			

			<div className="box">
				<h4>{calories.toFixed()} calories</h4>
			</div>

		</div>		
	)
}
export default MyOptionsComponent;