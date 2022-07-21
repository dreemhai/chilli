import Header from "./header";
import { Suspense } from "react";

const MainLayout = ({children}) => {
  return (
    <>
      <Suspense fallback={<span style={{zIndex: '10', color: '#000'}}>Loading...</span>}>
        <Header />
        <main>
          {children}
        </main>
      </Suspense>
    </>
  )
}

export default MainLayout;