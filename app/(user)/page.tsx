import { redirect } from "next/navigation";

async function Home() {
    redirect("/about");
    return(<></>)
}

export default Home;
