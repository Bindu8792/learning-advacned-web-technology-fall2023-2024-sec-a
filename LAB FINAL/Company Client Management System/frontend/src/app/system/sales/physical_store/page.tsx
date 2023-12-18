'use client'
import { physicalStoreData } from "./physicalStoreData";
import { redirect, useRouter } from "next/navigation"

const Sales = () => {

    const router = useRouter();

    const SalesLog = () => {
        router.push("/system/sales/physical_store/sales_log");
      }


    function Display(props : any){
        return(
            <>
            Number of Item Sold: {props.NumberOfItemSold}<br />
            Number of Item Sold in last 7 days: {props.Last7Days}<br />
            Most Sold Item Name: {props.MostSoldIteName}<br />
            Average Sales Amount: {props.AvgSaleAmount}<br />
            <label>---------------------------</label>
            <br />
            </>
        )
    }

    return(
        <>
            {physicalStoreData.map((sales) => (
        <Display NumberOfItemSold={sales.NumberOfItemSold} Last7Days={sales.Last7Days} MostSoldIteName={sales.MostSoldIteName} AvgSaleAmount={sales.AvgSaleAmount} />
      ))}

            <button onClick={SalesLog}>Sales Log</button>

            <br/><br/>

            <label>Customer Name:</label>
            <input type="text" id="customerName" name="customerName" />
            <br/>

            <label>Address:</label>
            <input type="text" id="address" name="address" />
            <br/>

            <label>Phone:</label>
            <input type="tel" id="phone" name="phone" />
            <br/>

            <label>Product ID:</label>
            <input type="text" id="productId" name="productId" />
            <br/>

            <label>Product Name:</label>
            <input type="text" id="productName" name="productName" />
            <br/>

            <label>Unit Price:</label>
            <input type="text" id="unitPrice" name="unitPrice" />
            <br/>

        </>
    );
}

export default Sales;