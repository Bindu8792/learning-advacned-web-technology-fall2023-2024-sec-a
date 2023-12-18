import Link from "next/link";
import { existingProducts } from "./existingProducts";


const ExistingProducts = () => {
    function Display(props : any){
        return(
            <>
            <tr>
            <td>
            {props.ID}<br />
            </td>
            <td>
            {props.Name}<br />
            </td>
            <td>
            NUmber of {props.TotalSold}<br />
            </td>
            <td>
            {props.Price}<br/>
            </td>
            <td>
            {props.Category}<br/>
            </td>
            <td>
            <Link href={`/system/product_management/existing_products/edit/${props.ID}`}>Edit</Link>
            </td>
            </tr>
            </>
        )
    }

    return(

        <div>
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Total Sold</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
                
                    {existingProducts.map((product) => (
                        <Display ID={product.ID} Name={product.Name} TotalSold={product.TotalSold} Price={product.Price} Category={product.Category} />
                    ))}
                
            </table>
        </div>
    );
}

export default ExistingProducts;