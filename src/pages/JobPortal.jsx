import JobCard from "../components/JobCard";

const JobPortal = () => {
  return (
    <>
      <aside>
        <h1><span>join</span> our team</h1>
        <div className="filter-container">
          <h4>employment type</h4>
          <div className="filter">
            <div className="filter-radio">
              <input type="radio" name="contract" id="contract" />
              <label htmlFor="contract">contract</label>
            </div>
            <div className="filter-radio">
              <input type="radio" name="internship" id="internship" />
              <label htmlFor="internship">internship</label>
            </div>
            <div className="filter-radio">
              <input type="radio" name="full-time" id="full-time" />
              <label htmlFor="full-time">full-time</label>
            </div>
            <div className="filter-radio">
              <input type="radio" name="temporary" id="temporary" />
              <label htmlFor="temporary">temporary</label>
            </div>
            <div className="filter-radio">
              <input type="radio" name="part-time" id="part-time" />
              <label htmlFor="part-time">part-time</label>
            </div>
          </div>
          <h4>position level</h4>
          <div className="filter">
            <div className="filter-radio">
              <input type="radio" name="level-5" id="level-5" />
              <label htmlFor="level-5">CEO/GM/Director/Manager Senior</label>
            </div>
            <div className="filter-radio">
              <input type="radio" name="level-4" id="level-4" />
              <label htmlFor="level-4">Manager/Assistant Manager</label>
            </div>
            <div className="filter-radio">
              <input type="radio" name="level-3" id="level-3" />
              <label htmlFor="level-3">Supervisor/Koordinator</label>
            </div>
            <div className="filter-radio">
              <input type="radio" name="level-2" id="level-2" />
              <label htmlFor="level-2">
                Pegawai non-manajemen dan non-supervisor
              </label>
            </div>
            <div className="filter-radio">
              <input type="radio" name="level-1" id="level-1" />
              <label htmlFor="level-1">
                Lulusan Baru/Pengalaman Kerja Kurang dari 1 tahun
              </label>
            </div>
          </div>
        </div>
      </aside>
      <main>
        <JobCard />
        <JobCard />
        <JobCard />

        <JobCard />
        <JobCard />
        <JobCard />

        <JobCard />
        <JobCard />
        <JobCard />

        <JobCard />
        <JobCard />
        <JobCard />

        <JobCard />
        <JobCard />
        <JobCard />

        <JobCard />
        <JobCard />
        <JobCard />

        <JobCard />
        <JobCard />
        <JobCard />

        <JobCard />
        <JobCard />
        <JobCard />

        <JobCard />
        <JobCard />
        <JobCard />
      </main>
    </>
  );
};

export default JobPortal;
