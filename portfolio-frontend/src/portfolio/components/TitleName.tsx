import { sectionsNav } from "../data/nav";

const TitleName = () => {
  return (
    <button className='flex font-semibold gap-2 cursor-pointer'
      onClick={() => {
        document.getElementById(sectionsNav.about.id)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <p className='text-primary font-bold'>{"<"}</p>
      <h1 className=''>GisyDev</h1>
      <p className='text-primary font-bold'>{"/>"}</p>
    </button>
  )
}

export default TitleName