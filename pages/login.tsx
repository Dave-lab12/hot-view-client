import Head from "next/head"
import Login from "@/components/Login"
function login(){
    return (
        <div className="bg-gray-300 overflow-hidden">
        <Head>
          <title>Login</title>
          <link 
            rel="icon" 
            href="/hot-news-logo.png"
            type="image"
          />
        </Head>
        <main>
          <div className="grid place-items-center h-screen">
            <Login />
          </div>
        </main>
      </div>
    )
}

export default login