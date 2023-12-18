import { numberOfProductDetails } from "./numberOfProductDetails";


const Product_Management = () => {
    function Display(props : any){
        return(
            <>
            Category: {props.Category}<br />
            Number of Product: {props.Total}<br />
            <label>---------------------------</label>
            <br />
            </>
        )
    }

    return(
        <>
            {numberOfProductDetails.map((product) => (
        <Display Category={product.Category} Total={product.Total} />
      ))}
        </>
    );
}

export default Product_Management;