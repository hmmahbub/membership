import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div  className="bg-blue-400 flex flex-col mx-2 p-4 text-center rounded text-black">
            <h2>
                <span className='text-3xl'>{price}</span>
            </h2>
                <h4 className='text-5xl my-4'>{name}</h4>
               <div className='flex-grow'>
               {
                    features.map((feature, index) => <Feature key={index} feature = {feature}></Feature>)
                }
               </div>
                <button className='w-full h-10 bg-green-500 hover:bg-green-700 font-bold text-white rounded-lg p-1 text-lg my-5'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;