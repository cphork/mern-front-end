import React from "react";

const Display = (props) => {
    const { cars } = props


    const loaded = () => (
        <div style={{textAlign: "center"}} className='image-layout'>
            {cars.map((car) => (
                <article key={car._id}>
                    
                    <p className="year">{car.year}</p>
                    <p className="make">{car.make}</p>
                    <p className="model">{car.model}</p>
                    <img className="image" src={car.img} alt="cars" />
                    <p className="description">{car.description}</p>

                    
                    <button className="edit" onClick={() => {
                        props.selectCar(car)
                        props.history.push("/edit")
                    }}>
                        Edit
                    </button>


                    <button className="delete" onClick ={() => {
                        props.deleteCar(car)
                    }}>
                        Delete
                    </button>
                    <hr />

                </article>
            ))}
        </div>  
    )

    const loading = () =>
    <img className ='loading-img' src="https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,w_317/v1621295527/loading-time-tips_lrphoz.jpg" alt="loading"/>
    return cars.length > 0 ? loaded() : loading()

};

export default Display;