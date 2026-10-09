import { sectionsNav } from "../data/nav";

const TitleName = () => {
  return (
    <button className='flex font-semibold gap-2 cursor-pointer'
      onClick={() => {
        document.getElementById(sectionsNav.about.id)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div className="flex">
        <p>Gisy</p>
        <p className="text-primary">Dev</p>
      </div>
    </button>
  )
}

export default TitleName