import Link from "next/link";

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
      <div>
        <ul>
            <li><Link href='/system/sales/physical_store'>Physical Strore</Link></li>
            <li><Link href='/system/sales/social_media' replace>Social Media</Link></li>
            <li><Link href='/system/sales/ecommerce'>Ecommerce Web App</Link></li>
        </ul>
        {children}
      </div>
    )
  }
  
  export default Layout;
  