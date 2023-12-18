import Link from "next/link";

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
      <div>
        <ul>
            <li><Link href='/system/product_management/existing_products'>Existing Products</Link></li>
            <li><Link href='/system/product_management/upcoming_products'> Upcoming Products</Link></li>
            <li><Link href='/system/product_management/add_product'>Add Product</Link></li>
        </ul>
        {children}
      </div>
    )
  }
  
  export default Layout;
  