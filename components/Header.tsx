import Head from "next/head"

interface IProps{
    title: string
}

function Header({title}:IProps){
    return(
        <Head>
          <title>SignUp</title>
          <link 
            rel="icon" 
            href="/hot-news-logo.png"
            type="image"
          />
        </Head>
    )

}

export default Header