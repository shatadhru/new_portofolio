import "./Main_body.css"
import Header from "../header/Header"
import My_skills from "../my_skills/My_skills"
function Main_body() {
  return (
    <div>
      <section className="main_body">
        <Header />
        <div className="contents flex flex-col items-center justify-center">
          <div className="rounded border-amber-50 mt-50">
          <h6  className="text-white">Finding Proffesional Developer???</h6>
          </div>
        </div>
      </section>
      <My_skills />
    </div>
  );
}

export default Main_body
