import { salesList } from "./salesList";

const Sales = () => {
    function Display(props : any){
        return(
            <>
            ID: {props.ID}<br />
            Name: {props.Name}<br />
            NUmber of Sales: {props.TotalSold}<br />
            <label>---------------------------</label>
            <br />
            </>
        )
    }

    return(
        <>
            {salesList.map((sales) => (
        <Display ID={sales.ID} Name={sales.Name} TotalSold={sales.TotalSold} />
      ))}
        </>
    );
}

export default Sales;