import { useNavigate } from "react-router-dom";

const JobCard = () => {
  const nav = useNavigate();
  return (
    <section>
      <h3>job title</h3>
      <div className="job-desc">
        job descridivtions. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Dicta qui magnam voluptatibus mollitia, est itaque dolore adipisci
        minima aut aperiam. Natus reprehenderit molestias optio delectus aut
        assumenda molestiae cumque incidunt.
      </div>
      <div className="btn-wrapper">
        <button onClick={() => nav("detail")}>view detail</button>
        <button>apply</button>
      </div>
    </section>
  );
};

export default JobCard;
